# Снимок наличия у поставщика GPI24 (gpi54.ru) -> src/data/supplier.json.
# Сопоставление «наш расходник -> товар поставщика» – research/gpi/mapping.json (решено вручную),
# наличие и цены – ответы /api/products/search/positions (research/gpi/positions-*.json).
import json, re, sys
MAP, POS, OUT, DATE = sys.argv[1:5]
mapping, pos = json.load(open(MAP)), json.load(open(POS))
def offer(brand, art, kind, why):
    items = [x for x in pos.get(f'{brand}|{art}', []) if isinstance(x, dict) and x.get('article') == art]
    if not items: raise SystemExit(f'нет снимка для {brand} {art}')
    x = items[0]; rem = x.get('remains') or []
    name = re.sub(r'\s+', ' ', x.get('applicability') or x.get('description') or '').strip()
    return {
        'brand': brand, 'article': art, 'name': name or x.get('description', ''), 'kind': kind, 'why': why,
        'nsk': sum(r['balance'] for r in rem if r['available'] and r['warehouse']['name'] == 'Новосибирск'),
        'other': sum(r['balance'] for r in rem if r['available'] and r['warehouse']['name'] != 'Новосибирск'),
        'order': min([r['delivery_days'] for r in rem if not r['available']], default=None),
        'price': min([r['price'] for r in rem], default=None),
        'url': 'https://gpi54.ru/search/positions?' + __import__('urllib.parse').parse.urlencode({'article': art, 'brand': brand}),
    }
out = {'date': DATE, 'items': {k: [offer(*o) for o in v] for k, v in mapping.items()}}
json.dump(out, open(OUT, 'w'), ensure_ascii=False, indent=1)
print(len(out['items']), 'позиций,', sum(len(v) for v in out['items'].values()), 'предложений')
