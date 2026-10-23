// Расходники из базы владельца (таблица «МАСЛА и прочее» и картинки мануалов) – без собранного
// Claude «на проверку». Группа = одинаковая жидкость или допуск; машины подставляются из данных.
import { brands, type Row } from './brands';

export type Cat = 'Моторные масла' | 'Трансмиссия и редукторы' | 'Охлаждающие жидкости' | 'Тормозная жидкость' | 'Кондиционер' | 'Прочие жидкости' | 'Фильтры' | 'Запчасти';
export const CATS: Cat[] = ['Моторные масла', 'Трансмиссия и редукторы', 'Охлаждающие жидкости', 'Тормозная жидкость', 'Кондиционер', 'Прочие жидкости', 'Фильтры', 'Запчасти'];

type Rule = { id: string; cat: Cat; title: string; test: RegExp; note?: string };

// Порядок важен: первое совпадение забирает строку.
const RULES: Rule[] = [
  { id: 'm-vcc', cat: 'Моторные масла', title: '0W-20, допуск Volvo VCC RBS0-2AE', test: /RBS0-2AE/ },
  { id: 'm-c5', cat: 'Моторные масла', title: '0W-20 SP / ACEA C5', test: /C5/ },
  { id: 'm-0w16', cat: 'Моторные масла', title: '0W-16, SP/GF-6', test: /0W-16/ },
  { id: 'm-c2', cat: 'Моторные масла', title: '0W-30 / 5W-30, ACEA C2', test: /ACEA C2/ },
  { id: 'm-c3', cat: 'Моторные масла', title: '5W-30, ACEA C3', test: /5W-30.*C3|C3.*5W-30|Titan 5W-30/ },
  { id: 'm-5w30', cat: 'Моторные масла', title: '5W-30, API SN и выше', test: /5W-30/ },
  { id: 'm-0w20', cat: 'Моторные масла', title: '0W-20, API SP / SN', test: /0W-20/ },

  { id: 't-w1', cat: 'Трансмиссия и редукторы', title: 'Castrol ON EV Transmission Fluid W1', test: /\bW1\b/ },
  { id: 't-383', cat: 'Трансмиссия и редукторы', title: 'Castrol BOT 383', test: /BOT[ -]?383/ },
  { id: 't-384', cat: 'Трансмиссия и редукторы', title: 'Castrol BOT 384', test: /BOT[ -]?384/ },
  { id: 't-805', cat: 'Трансмиссия и редукторы', title: 'Castrol BOT 805C EV', test: /805/ },
  { id: 't-350', cat: 'Трансмиссия и редукторы', title: 'Castrol BOT 350 M3', test: /BOT ?350/ },
  { id: 't-352', cat: 'Трансмиссия и редукторы', title: 'Castrol BOT 352 (B1)', test: /BOT 352/ },
  { id: 't-ehsf', cat: 'Трансмиссия и редукторы', title: 'BYD EHSF-2LV', test: /EHSF/ },
  { id: 't-skdhtf', cat: 'Трансмиссия и редукторы', title: 'SK DHTF-01', test: /SK DHTF/ },
  { id: 't-dhtf', cat: 'Трансмиссия и редукторы', title: 'Shell E-Fluids E6 i DHTF / CA-DHTF-1', test: /DHTF/ },
  { id: 't-etf', cat: 'Трансмиссия и редукторы', title: 'Voyah / AITO ETF-EMC', test: /ETF-EMC/ },
  { id: 't-voyah', cat: 'Трансмиссия и редукторы', title: 'Voyah: Oil motor EV, PHEV front motor, HV generator lub.', test: /Oil motor EV|PHEV front motor|HV generator/ },
  { id: 't-li', cat: 'Трансмиссия и редукторы', title: 'Li Auto: LV MV и Castrol D2', test: /LV MV|Castrol D2/ },
  { id: 't-dx6', cat: 'Трансмиссия и редукторы', title: 'Dexron VI (DX6)', test: /DX6|Dexron 6|Dexron VI/ },
  { id: 't-ulv', cat: 'Трансмиссия и редукторы', title: 'ATF ULV (Dexron ULV, Ravenol ULV D-M)', test: /ULV/ },
  { id: 't-dex3', cat: 'Трансмиссия и редукторы', title: 'ATF Dexron III (Shell S3-ATF-MD3)', test: /Dexron\)? ?III|ATF III|MD3/ },
  { id: 't-matic', cat: 'Трансмиссия и редукторы', title: 'Nissan Matic S', test: /Matic[ -]S/ },
  { id: 't-80w90', cat: 'Трансмиссия и редукторы', title: '80W-90 GL-5', test: /80W[-/]?90/ },
  { id: 't-75w90', cat: 'Трансмиссия и редукторы', title: '75W-90 GL-4/GL-5', test: /75W-90/ },
  { id: 't-75w', cat: 'Трансмиссия и редукторы', title: '75W (редукторное, без допуска в таблице)', test: /^75W$|^75w$|^75W |^75W;|; 75W\b/i },
  { id: 't-haldex', cat: 'Трансмиссия и редукторы', title: 'Масло муфты распределения момента (Habot 311)', test: /Habot/ },

  { id: 'c-oj', cat: 'Охлаждающие жидкости', title: 'ОЖ на этиленгликоле, карбоксилатная (OAT / LEC-II / G12+), до −40 °C', test: /./, note: 'У Li Auto в таблице: подходит G12++, G12+ смешивать не рекомендуется.' },
  { id: 'b-dot4', cat: 'Тормозная жидкость', title: 'DOT 4 (HZY4 / HZY6)', test: /./, note: 'HZY4 и HZY6 – китайские классы, в таблице указаны вместе с DOT 4.' },
  { id: 'a-r134a', cat: 'Кондиционер', title: 'Хладагент R134a', test: /134/ },
  { id: 'a-r1234', cat: 'Кондиционер', title: 'Хладагент R1234yf', test: /1234/ },
  { id: 'a-pag', cat: 'Кондиционер', title: 'Масло компрессора PAG', test: /PAG/ },
  { id: 'a-poe', cat: 'Кондиционер', title: 'Масло компрессора POE', test: /POE/ },
  { id: 'a-pve', cat: 'Кондиционер', title: 'Масло компрессора PVE 56EA', test: /PVE/ },
  { id: 'a-js', cat: 'Кондиционер', title: 'Масло компрессора JS AM 20', test: /JS AM/ },
];

const catOf = (r: Row): Cat | null => {
  const n = r.name;
  if (/топлив/i.test(n)) return null;
  if (/фильтр/i.test(n)) return 'Фильтры';
  if (/колодк|свеч|рычаг|бачок|стойк|шаров|пыльник/i.test(n)) return 'Запчасти';
  if (/тормозн/i.test(n)) return 'Тормозная жидкость';
  if (/омыв|мочевин/i.test(n)) return 'Прочие жидкости';
  if (/охлажд|антифриз/i.test(n) || /ОЖ/.test(n)) return 'Охлаждающие жидкости';
  if (/фреон|хладагент|кондиц|компрессор/i.test(n)) return 'Кондиционер';
  if (/ДВС|моторное|Масло двигателя|^Двигатель/i.test(n) && !/электро/i.test(n)) return 'Моторные масла';
  return 'Трансмиссия и редукторы';
};

export type Use = { car: string; node: string; vol?: string; oil?: string };
export type Item = { id: string; cat: Cat; title: string; uses: Use[]; alt: string[]; note?: string };

const text = (r: Row) => [r.oil, r.spec, r.part, ...(r.alt ?? [])].filter(Boolean).join(' ');

function build(): Item[] {
  const items = new Map<string, Item>();
  for (const b of brands)
    for (const m of b.models) {
      if (m.check) continue;
      const car = `${b.name} ${m.name}${m.sub ? ` (${m.sub})` : ''}`;
      for (const r of m.rows) {
        if (r.check) continue;
        const cat = catOf(r);
        const t = text(r);
        if (!cat || !t || /нет информации|^любая$|подходит от/i.test(r.oil ?? '')) continue;
        const rule = RULES.find((x) => x.cat === cat && x.test.test(t + ' ' + r.name));
        // Без общего правила: отдельный пункт на каждую жидкость или артикул.
        const id = rule?.id ?? `${cat}|${r.part ?? r.oil ?? r.spec ?? r.alt?.[0]}`;
        const what = r.oil ?? r.spec ?? r.alt?.[0] ?? '';
        // У фильтров, запчастей и прочих жидкостей без узла непонятно, что за артикул.
        const title = rule?.title ?? (/Фильтры|Запчасти|Прочие/.test(cat) ? `${r.name}: ${what}` : what);
        const it = items.get(id) ?? { id, cat, title, uses: [], alt: [], note: rule?.note };
        it.uses.push({ car, node: r.name, vol: r.vol, oil: rule ? r.oil ?? r.spec : undefined });
        for (const a of r.alt ?? []) if (!it.alt.includes(a)) it.alt.push(a);
        items.set(id, it);
      }
    }
  const order = (it: Item) => {
    const i = RULES.findIndex((r) => r.id === it.id);
    return CATS.indexOf(it.cat) * 1000 + (i < 0 ? 900 : i);
  };
  return [...items.values()].sort((a, b) => order(a) - order(b) || a.title.localeCompare(b.title));
}

export const items = build();
