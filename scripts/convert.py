# research/*.json (от агентов) -> src/data/nsk/*.json для сайта
import json, sys, re, os
sys.path.insert(0, os.path.dirname(__file__))
from years import keep
R, OUT, COUNTS = sys.argv[1], sys.argv[2], json.load(open(sys.argv[3]))
BRAND = {'li auto': 'Li Auto (Lixiang)', 'lixiang': 'Li Auto (Lixiang)', 'li': 'Li Auto (Lixiang)'}
# модель агента -> название на drom (для счётчика объявлений)
DROM = {
 ('Toyota','Prius'):'Toyota Prius', ('Toyota','Prius Alpha'):'Toyota Prius Alpha', ('Toyota','Aqua'):'Toyota Aqua',
 ('Toyota','Sienta'):'Toyota Sienta', ('Toyota','Corolla Fielder / Axio'):'Toyota Corolla Fielder', ('Toyota','Camry'):'Toyota Camry',
 ('Toyota','Crown'):'Toyota Crown', ('Toyota','C-HR'):'Toyota C-HR', ('Toyota','Alphard / Vellfire'):'Toyota Alphard',
 ('Toyota','Noah / Voxy / Esquire'):'Toyota Noah', ('Toyota','Harrier'):'Toyota Harrier', ('Toyota','bZ3X'):'Toyota bZ3X',
 ('Lexus','RX400h'):'Lexus RX400h', ('Lexus','RX450h'):'Lexus RX450h', ('Lexus','CT200h'):'Lexus CT200h', ('Lexus','ES300h'):'Lexus ES300h', ('Lexus','GS450h'):'Lexus GS450h',
 ('Honda','Fit Hybrid'):'Honda Fit', ('Honda','Fit Shuttle Hybrid'):'Honda Fit Shuttle', ('Honda','Shuttle Hybrid'):'Honda Shuttle', ('Honda','Insight'):'Honda Insight',
 ('Honda','Vezel Hybrid'):'Honda Vezel', ('Honda','Freed'):'Honda Freed', ('Honda','CR-Z'):'Honda CR-Z', ('Honda','Civic Hybrid'):'Honda Civic',
 ('Nissan','Leaf'):'Nissan Leaf', ('Nissan','Note e-Power'):'Nissan Note', ('Nissan','Serena S-Hybrid'):'Nissan Serena', ('Nissan','Serena e-Power'):'Nissan Serena',
 ('Nissan','X-Trail Hybrid'):'Nissan X-Trail', ('Nissan','X-Trail e-Power'):'Nissan X-Trail', ('Suzuki','Solio'):'Suzuki Solio', ('Mitsubishi','Outlander PHEV'):'Mitsubishi Outlander',
}
# Мои правки после сверки с первоисточником: (марка, модель, начало sub, узел) -> поля
PATCH = [
 ('Honda', 'Fit Hybrid', '3 поколение', 'Тормозная жидкость', {'spec': 'DOT3 или DOT4'}),  # мануал GP5 с. 289
]
# Куда цеплять дополнения, если агент указал модель не так, как карточка в справочнике:
# (марка, модель агента) -> (карточка, начало подписи, приписка к названию строки)
ADD_MAP = {
 ('Zeekr', '001'): ('001', '2024', ''),
 ('Voyah', 'Free'): ('Free', '2023, рестайлинг', ''),
 ('Li Auto (Lixiang)', 'L7'): ('L6 / L7 / L8 / L9', '', ' (L7)'),
 ('Li Auto (Lixiang)', 'L9'): ('L6 / L7 / L8 / L9', '', ' (L9)'),
}
# Дубли: эти записи перекрыты более полными из других файлов
SKIP = {('ev.json', 'Voyah', 'Free'), ('ev.json', 'Li Auto (Lixiang)', 'L7'), ('ev.json', 'Li Auto (Lixiang)', 'L9')}
def fix(s): return re.sub(r'\s*—\s*', ' – ', s).strip() if isinstance(s, str) else s
files = {}
dropped = []
for f in sorted(os.listdir(R)):
    if not f.endswith('.json'): continue
    out = []
    for m in json.load(open(os.path.join(R, f))):
        brand = BRAND.get(m['brand'].lower(), m['brand'])
        if (f, brand, m['model']) in SKIP: continue
        e = {'brand': brand, 'model': fix(m['model'])}
        sub = fix(m.get('sub', ''))
        if sub.lower().startswith('дополнение'):
            e['addTo'] = e['model']
            rest = sub.split(':', 1)[1].strip() if ':' in sub else ''
            if rest: e['addSub'] = rest
        else:
            if keep(sub) is False:  # поколение закончилось до 2023 – не берём
                dropped.append(f"{m['brand']} {m['model']} | {sub}"); continue
            if sub: e['sub'] = sub
        if m.get('code'): e['code'] = fix(m['code'])
        k = DROM.get((brand, m['model'])) or next((v for (b, mm), v in DROM.items() if b == brand and m['model'].startswith(mm)), None)
        if not k:  # общее правило: объявления «Марка Модель…» на drom (все варианты названия)
            n = lambda x: re.sub(r'[^a-z0-9]', '', x.lower())
            alias = {'GAC': ['GAC', 'GAC Trumpchi'], 'Changan': ['Changan', 'Changan Qiyuan Nevo'], 'Exeed': ['EXEED', 'ESTEO']}.get(brand, [brand])
            first = n(m['model'].split('/')[0].split('(')[0])
            hits = [c for c in COUNTS for a in alias if first and n(c).startswith(n(a) + first)]
            w0 = n(m['model'].split()[0])
            if not hits and re.search(r'\d', w0):  # «500 Hi4-T» -> «Tank 500», «EX5 EM-i» -> «Geely EX5 Hybrid»
                hits = [c for c in COUNTS for a in alias if re.fullmatch(n(a) + w0 + r'(hybrid|phev|hi4t|emi)?', n(c))]
            if hits: e['nsk'] = sum(COUNTS[c] for c in set(hits))
        elif k in COUNTS and 'addTo' not in e: e['nsk'] = COUNTS[k]
        rows = []
        for r in m['rows']:
            row = {x: fix(r[x]) for x in ('name', 'oil', 'spec', 'part', 'vol', 'note', 'src') if r.get(x)}
            if r.get('alt'): row['alt'] = [fix(a) for a in r['alt'] if a]
            rows.append(row)
        for pb, pm, ps, pn, upd in PATCH:
            if brand == pb and e['model'] == pm and e.get('sub', '').startswith(ps):
                for row in rows:
                    if row['name'] == pn: row.update(upd)
        if 'addTo' in e and (brand, e['model']) in ADD_MAP and 'addSub' not in e:
            card, sub0, suffix = ADD_MAP[(brand, e['model'])]
            e['addTo'] = card
            if sub0: e['addSub'] = sub0
            for row in rows: row['name'] += suffix
        e['rows'] = rows
        out.append(e)
    json.dump(out, open(os.path.join(OUT, f), 'w'), ensure_ascii=False, indent=1)
    files[f] = (len(out), sum(len(x['rows']) for x in out), sum(1 for x in out if 'nsk' in x))
for f, v in files.items(): print(f, 'карточек', v[0], 'строк', v[1], 'со счётчиком', v[2])
print('отброшено (до 2023):', len(dropped))
