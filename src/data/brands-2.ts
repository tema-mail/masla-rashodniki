// Перенесено из Google-таблицы «МАСЛА и прочее» 22.10.2026: текст ячеек и таблицы-картинки
// из мануалов (Avatr, AITO, Leopard, Denza, Changan Hunter, Deepal) без водяных знаков.
// Один лист таблицы = одна марка. Группа строки (трансмиссия, двигатель…) определяется по названию.

export type Row = {
  name: string; // узел или жидкость
  spec?: string; // допуск
  oil?: string; // чем заливать
  alt?: string[]; // аналоги
  part?: string; // артикул
  vol?: string; // объём
  note?: string;
};

export type Model = {
  name: string;
  sub?: string;
  code?: string; // заводской код модели или двигателя
  rows: Row[];
  note?: string;
};

export type Brand = { id: string; name: string; models: Model[] };

export const ULV4 = ['KROON-OIL SP Matic 2096', 'Castrol ON EV Transmission Fluid D1', 'Ravenol ATF ULV D-M', 'Castrol ON EV Transmission Fluid W5'];
export const ULV5 = [...ULV4, 'Wolf OFFICIALTECH ATF D/M ULV'];
export const DEX3 = ['FUCHS TITAN ATF 4400 DEXRON III', 'TOTAL FLUIDMATIC XLD FE', 'ZIC ATF MULTI SP-III Dexron III (1 л)'];
export const DEX3_NOTE = 'На канистре должно быть указано Dexron III / Dex/Merc / Mercon';
export const GL45 = ['75W-90 или любое с допуском GL-4/GL-5'];
// У Xiaomi фреон и тормозная жидкость в таблице общие на все модели.
export const XIAOMI_COMMON: Row[] = [
  { name: 'Хладагент', oil: 'R134a', vol: '1150 г' },
  { name: 'Тормозная жидкость', oil: 'DOT 4', vol: '1 л' },
];
// Changan Hunter: общее для бензинового и дизельного по мануалу.
export const HUNTER_COMMON: Row[] = [
  { name: 'Масло МКПП (6MT)', oil: 'Castrol BOT350 M3', alt: ['75W'], vol: '2,8 ± 0,1 л' },
  { name: 'Раздаточная коробка (Part-time 4WD)', oil: 'ATF (Dexron) III', vol: '1,5 ± 0,05 л' },
  { name: 'Передний редуктор', oil: 'Sinopec LD GL-5 80W-90', vol: '1,2 ± 0,05 л' },
  { name: 'Задний редуктор', oil: 'Sinopec LD GL-5 80W-90', vol: '2,2 ± 0,05 л' },
];
export const HUNTER_FLUIDS: Row[] = [
  { name: 'Масло кондиционера', oil: 'JS AM 20', vol: '140 ± 10 г' },
  { name: 'Хладагент кондиционера', oil: 'R134a', vol: '510 ± 20 г' },
  {
    name: 'Омывающая жидкость',
    oil: 'RLQ-303',
    vol: '1,0 ± 0,02 л',
    note: 'Обычные регионы – замерзание ниже −20 °C, холодные – ниже −45 °C',
  },
  { name: 'Тормозная жидкость', oil: 'DOT4 или HZY4', vol: '0,95 ± 0,05 л' },
];


// Марки со второй половины алфавита (Leopard–Zeekr); первая половина – в brands.ts.
export const brandsLZ: Brand[] = [
  {
    id: 'leopard',
    name: 'Leopard',
    models: [
      {
        name: 'Leopard 5',
        rows: [
          { name: 'Передний редуктор', oil: 'EHSF-2LV', vol: '5,7 ± 0,1 л' },
          { name: 'Задний редуктор', oil: 'EHSF-2LV', vol: '2,8 л' },
          { name: 'Масло для дифференциала', oil: 'Castrol GL-5 80W-90', vol: '1,3 ± 0,1 л' },
          { name: 'Масло моторное', oil: 'SP 0W-20 или SP 0W-20 C5', vol: '4,2 л без замены фильтра; 4,5 л с заменой' },
          { name: 'Тормозная жидкость', oil: 'HZY6/DOT4', vol: '1,2 ± 0,2 л' },
          { name: 'Охлаждающая жидкость', oil: 'Любая до −40 °C на основе этиленгликоля', vol: '10,5 ± 0,5 л' },
        ],
      },
      {
        name: 'Leopard 3',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 383', vol: '1,6 ± 0,05 л' },
          { name: 'Задний редуктор', spec: 'BOT 383', oil: 'Castrol BOT-383', vol: '1,5 ± 0,05 л' },
          { name: 'Тормозная жидкость', oil: 'HZY6/DOT4', vol: '1,05 ± 0,05 л' },
          {
            name: 'Охлаждающая жидкость электроуправления двигателем',
            oil: 'Гликолевый антифриз, замерзание −40 °C (морозостойкий)',
            vol: '7,2 ± 0,5 л',
          },
        ],
      },
    ],
  },
  {
    id: 'lixiang',
    name: 'Li Auto (Lixiang)',
    models: [
      {
        name: 'L6 / L7 / L8 / L9',
        sub: '2023–2024',
        rows: [
          { name: 'Передний редуктор · UMC', part: 'X01-21000012', oil: 'LV MV', vol: '1,1 + 0,05 л' },
          { name: 'Передний редуктор · OT&TB', part: 'X03-10010012', oil: 'LV MV', vol: '1,1 + 0,05 л' },
          { name: 'Передний редуктор · UMC', part: 'X028-2100013', oil: 'LV MV', vol: '0,8 + 0,1 л' },
          { name: 'Задний редуктор · UMC', part: 'W01-21000018', oil: 'Castrol D2', vol: '1,7 + 0,1 л' },
          { name: 'Задний редуктор · BorgWarner', part: 'X03B-21000011', oil: 'Castrol D2', vol: '1,1 л' },
          { name: 'Задний редуктор · Huawei', part: 'W01-21000012', oil: '75W', vol: '1,7 + 0,1 л' },
          { name: 'ДВС', spec: 'ACEA C2', oil: '0W-30, 5W-30', vol: '4 л' },
          {
            name: 'Антифриз',
            oil: 'Этиленгликолевый, LEC-II (GB 29743-2013), карбоксилатный',
            vol: '18 л',
            note: 'С завода до −35 °C. Нам подходит G12++, G12+ смешивать не рекомендуется',
          },
        ],
      },
      { name: 'L7', rows: [{ name: 'Правый бачок охлаждения', oil: '(P10-0205) LAA30030012' }] },
      {
        name: 'L6',
        rows: [
          { name: 'Рычаг правый', oil: 'PS50644R' },
          { name: 'Рычаг левый', oil: 'PS50644L' },
        ],
      },
    ],
  },
  {
    id: 'lynk',
    name: 'Lynk & Co',
    models: [
      {
        name: '08',
        rows: [
          { name: 'Редуктор', oil: 'Shell E-Fluids E6 i DHTF', part: '9020009000', vol: 'частичная замена 4,5 л' },
          { name: 'ДВС', spec: 'VCC RBS0-2AE', oil: 'Строго 0W-20', vol: '≈ 4,2 л', note: 'Замена каждые 10 000 км' },
          { name: 'Фильтр масляный', oil: '1016057051', note: 'Подходит также на 06 EM-P и 900 1.5T' },
          { name: 'Фильтр воздушный', oil: '8889682625', note: 'Подходит также на 06 EM-P и Geely Monjaro Hi-X' },
          { name: 'Фильтр салонный', oil: '8888397355' },
          { name: 'Свечи зажигания', oil: '1016056801', note: 'Замена каждые 40 000 км' },
        ],
      },
    ],
  },
  {
    id: 'nissan',
    name: 'Nissan',
    models: [
      {
        name: 'Ariya',
        rows: [
          { name: 'Задний редуктор', oil: 'Nissan MT-XZ NFX 75W', alt: ['75W'], vol: '0,75 л' },
          { name: 'Коробка', vol: '0,87 л' },
        ],
      },
      {
        name: 'Ariya',
        sub: '2022',
        rows: [
          { name: 'Передний редуктор', alt: ['75W'], vol: '0,9 л' },
          { name: 'Коробка', vol: '0,87 л' },
          { name: 'Кондиционер', oil: 'POE', vol: '1050 г', note: 'Была наклейка на авто; мы делали так, когда машина приехала' },
        ],
      },
      { name: 'e-NV200', rows: [{ name: 'Редуктор', oil: 'Nissan Matic S', alt: ['Ravenol TWS Longlife'] }] },
      {
        name: 'e-NV200 Evalia',
        rows: [
          { name: 'Редуктор', spec: 'Nissan Matic-S', oil: 'Nissan Matic-S', alt: ['ZIC MULTI LF'], vol: '1,6 л' },
          { name: 'Фильтр', oil: 'ADN12540' },
        ],
      },
    ],
  },
  {
    id: 'polar-stone',
    name: 'Polar Stone',
    models: [
      {
        name: '01',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 352 B1 BEV', alt: ['Ravenol ATF ULV D-M 75W'], vol: '0,8 ± 0,1 л' },
          { name: 'Задний редуктор', spec: 'BOT 352 B1 BEV', alt: ['Ravenol ATF ULV D-M 75W'], vol: '0,8 ± 0,1 л' },
        ],
      },
    ],
  },
  {
    id: 'stelato',
    name: 'Stelato',
    models: [
      {
        name: 'S9',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 805C', oil: '75W', vol: '1,6 л' },
          { name: 'Задний редуктор', spec: 'BOT 805C', oil: '75W', vol: '1,8 л' },
          { name: 'Тормозная жидкость', oil: 'DOT-4', vol: '1 л' },
          { name: 'Охлаждающая жидкость', vol: 'задний привод 16,8 л; полный привод 17,3 л' },
          { name: 'Фреон', oil: 'HFC-134a', vol: '675 ± 20 г' },
        ],
      },
    ],
  },
  {
    id: 'vw',
    name: 'Volkswagen',
    models: [
      {
        name: 'ID.4 / ID.6',
        rows: [
          {
            name: 'Передний редуктор',
            oil: 'G053013M2',
            alt: ['FUCHS TITAN FFL-2', '30939071 (5 л)', 'G052182A2 – масло для DSG', 'FEBI BILSTEIN 39071'],
            part: '602016157',
            vol: '1,6 л',
          },
          { name: 'Задний редуктор', oil: 'G052527A2', alt: ['FUCHS TITAN SINTOFLUID FE 75W'], part: '600632199', vol: '0,8 л' },
        ],
      },
      { name: 'ID.3', rows: [{ name: 'Задний редуктор', alt: ['FUCHS TITAN SINTOFLUID FE 75W'], vol: '0,8 л' }] },
    ],
  },
  {
    id: 'voyah',
    name: 'Voyah',
    models: [
      {
        name: 'Free',
        sub: '2021–2022',
        rows: [
          { name: 'Мотор передний · SEP200, 255 кВт', oil: 'ETF-EMC', part: 'H41201001', alt: ['DX6'], vol: '3 л' },
          { name: 'Мотор задний · SEP200, 255 кВт', oil: 'ETF-EMC', part: 'H41201001', alt: ['DX6'], vol: '3 л' },
          { name: 'Генератор', oil: 'ETF-EMC', part: 'H41201001, 2, 3, 4', vol: '1,1 л' },
          { name: 'ДВС · SFG15TR, 80 кВт', oil: '5W-30 API SN и выше', vol: '4 л' },
        ],
      },
      {
        name: 'Free',
        sub: '2021–2023, дорест',
        rows: [
          { name: 'Мотор передний · TZ200XSP10, 160 кВт', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'], vol: '0,8 л' },
          { name: 'Мотор задний · TZ220XSP01, 200 кВт', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'], vol: '0,8 л' },
          { name: 'Генератор', oil: 'ETF-EMC', part: 'H41201001, 2, 3, 4', vol: '1,1 л' },
          { name: 'ДВС · SFG15TR, 80 кВт', oil: '5W-30 API SN и выше', vol: '4 л' },
          { name: 'Кондиционер', oil: 'R134, масло PAG', vol: '620 г' },
          { name: 'Пыльник ШРУСа', oil: 'Наружный (в таблице не дописано)' },
        ],
      },
      {
        name: 'Free',
        sub: '2023, рестайлинг (318 км)',
        rows: [
          { name: 'Мотор передний · TZ200XSP10, 160 кВт', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'], vol: '0,8 л' },
          { name: 'Мотор задний · TZ220XSP01, 200 кВт', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'], vol: '0,8 л' },
          { name: 'Генератор · EHSF-2LV', oil: 'HV generator lub.', part: 'H41203001, 2, 3', vol: '1,4 л' },
          { name: 'ДВС · DAM15NTDE, 110 кВт', oil: '0W-20', vol: '4 л' },
        ],
      },
      {
        name: 'Free+',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 805C EV', alt: ['75W'], vol: '0,75 ± 0,05 л' },
          { name: 'Задний редуктор', spec: 'BOT 805C EV', alt: ['75W'], vol: '2,35 ± 0,05 л' },
          { name: 'ДВС', oil: 'SP 0W-20', vol: '4 л' },
          { name: 'Кондиционер', oil: 'R134a', vol: '620 г' },
        ],
      },
      {
        name: 'Dream',
        rows: [
          { name: 'Мотор передний · TZ200XSP08, 130 кВт', oil: 'PHEV front motor', part: 'H41202003', vol: '3 л' },
          { name: 'Мотор задний · TZ200XSP08, 160 кВт', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'], vol: '0,8 л' },
          { name: 'Генератор', oil: 'PHEV front motor', part: 'H41202003' },
          { name: 'ДВС · DFMC15TE2, 100 кВт', oil: '0W-20', vol: '4 л' },
          { name: 'Колодки передние', oil: 'PBP479' },
        ],
      },
      {
        name: 'Dream',
        sub: 'новая модель',
        rows: [
          { name: 'Мотор передний · TZ236XY150, 150 кВт', oil: 'PHEV front motor', part: 'H41202001, 2, 3', vol: '5 л' },
          { name: 'Мотор задний · TZ200XSP08, 160 кВт', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'], vol: '0,8 л' },
          { name: 'ДВС · DFMC15TE3, 110 кВт', oil: '0W-20', vol: '4 л' },
          { name: 'Фильтр масляный', oil: 'W6103' },
        ],
      },
      {
        name: 'Passion',
        rows: [
          { name: 'Передний электродвигатель', oil: '75W', vol: '0,85 л' },
          { name: 'Задний электродвигатель', oil: '75W', vol: '0,85 л' },
        ],
      },
      {
        name: 'Courage',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 802 EV', oil: 'Castrol W1', alt: ['75W'], vol: '2,3 л' },
          { name: 'Задний редуктор', spec: 'BOT 802 EV', oil: 'Castrol W1', alt: ['75W'], vol: '2,3 л' },
          { name: 'Кондиционер', oil: 'R134a', vol: '1150 ± 15 г' },
          {
            name: 'Антифриз',
            vol: 'полный привод 13,3 ± 0,6 л; 2WD 12,8 ± 0,6 л; 2WD с увеличенным запасом хода 12,03 ± 0,6 л',
          },
        ],
      },
    ],
  },
  {
    id: 'weltmeister',
    name: 'Weltmeister',
    models: [
      { name: 'EX5', rows: [{ name: 'Редуктор', oil: 'Dexron 6', vol: '1,8 л' }] },
      { name: 'EX5-Z', rows: [{ name: 'Редуктор', spec: 'BOT 350 M3', oil: '75W', vol: '700 ± 50 мл' }] },
    ],
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    models: [
      {
        name: 'SU7',
        sub: 'Полный привод',
        rows: [
          { name: 'Передний редуктор', spec: 'Castrol BOT 805C EV', oil: '75W', vol: '1,8 л' },
          { name: 'Задний редуктор', spec: 'Castrol BOT 805C EV', oil: '75W', vol: '2 л' },
          { name: 'Охлаждающая жидкость', oil: 'Valvoline LC100', vol: '20 л' },
          ...XIAOMI_COMMON,
        ],
      },
      {
        name: 'SU7',
        sub: 'Задний привод',
        rows: [
          { name: 'Задний редуктор', spec: 'Castrol BOT 352 B1 REV', oil: '75W-90 или любое с допуском GL-4/GL-5' },
          { name: 'Охлаждающая жидкость', oil: 'Valvoline LC100', vol: '17 л' },
          ...XIAOMI_COMMON,
        ],
      },
      {
        name: 'YU7',
        sub: 'Задний привод',
        rows: [
          { name: 'Задний редуктор', spec: 'Castrol BOT 805C EV', oil: '75W' },
          { name: 'Охлаждающая жидкость', oil: 'Valvoline LC100', vol: '19,5 л' },
          ...XIAOMI_COMMON,
        ],
      },
      {
        name: 'YU7 Pro',
        sub: 'Полный привод',
        rows: [
          { name: 'Передний редуктор', spec: 'Castrol BOT 805C EV', oil: '75W', vol: '1,75 л' },
          { name: 'Задний редуктор', spec: 'Castrol BOT 805C EV', oil: '75W', vol: '1,95 л' },
          { name: 'Охлаждающая жидкость', oil: 'Valvoline LC100', vol: '19,5 л' },
          ...XIAOMI_COMMON,
        ],
      },
      {
        name: 'YU7 Max',
        sub: 'Полный привод',
        rows: [
          { name: 'Передний редуктор', spec: 'Castrol BOT 805C EV', oil: '75W', vol: '1,8 л' },
          { name: 'Задний редуктор', spec: 'Castrol BOT 805C EV', oil: '75W', vol: '2 л' },
          { name: 'Охлаждающая жидкость', oil: 'Valvoline LC100', vol: '22 л' },
          ...XIAOMI_COMMON,
        ],
      },
    ],
  },
  {
    id: 'zeekr',
    name: 'Zeekr',
    models: [
      {
        name: '001',
        sub: 'Дорест, Vremt',
        rows: [
          { name: 'Передний редуктор', oil: 'DX6', vol: '0,9 л' },
          { name: 'Задний редуктор', oil: 'DX6', vol: '0,9 л' },
        ],
      },
      {
        name: '001',
        sub: 'Дорест, Nidec',
        rows: [
          { name: 'Передний редуктор', oil: 'DX6', vol: '1,6 л' },
          { name: 'Задний редуктор', oil: 'DX6', vol: '1,6 л' },
        ],
        note: 'Встречается крайне редко, это самые первые 001',
      },
      {
        name: '001',
        sub: '2024–2025',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 383', alt: ULV5, vol: 'ТО 2,0 л ± 50 мл; при замене двигателя 1,5 л ± 50 мл' },
          { name: 'Задний редуктор', spec: 'BOT 383', alt: ULV5, vol: 'ТО 2,0 л ± 50 мл; при замене двигателя 1,5 л ± 50 мл' },
          { name: 'Два передних редуктора', spec: 'BOT 383', alt: ULV5, vol: 'ТО 5,1 л ± 50 мл' },
          { name: 'Два задних редуктора', spec: 'BOT 383', alt: ULV5, vol: 'ТО: левый 2,3 ± 0,1 л, правый 2,3 ± 0,1 л' },
        ],
        note: 'Масло заливать через заправочное отверстие',
      },
      {
        name: '7X',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 383', alt: ULV5, vol: '2 л' },
          { name: 'Задний редуктор', spec: 'BOT 383', alt: ULV5, vol: '2 л' },
        ],
      },
      {
        name: '007',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 383', alt: ULV5, vol: '1,5 л ± 50 мл' },
          { name: 'Задний редуктор', spec: 'BOT 383', alt: ULV5, vol: '1,8 л ± 50 мл' },
        ],
        note: 'Лить через маслозаливное отверстие, остановиться, когда уровень дойдёт до отверстия',
      },
      {
        name: 'X',
        rows: [
          { name: 'Передний редуктор · Vremt', spec: 'DX6', oil: 'Dexron 6', vol: '0,7 ± 0,05 л' },
          { name: 'Задний редуктор', spec: 'DX6', oil: 'Dexron 6', vol: '1 л; с Vremt 0,8 ± 0,025 л' },
        ],
      },
    ],
  },
];
