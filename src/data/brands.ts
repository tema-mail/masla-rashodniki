// Перенесено из Google-таблицы «МАСЛА и прочее» 22.10.2026.
// Один лист таблицы = одна марка. Пустые ячейки не переносятся.

export type Unit = {
  name: string; // узел: передний редуктор, ДВС, АКПП…
  vol?: string; // объём
  spec?: string; // допуск
  oil?: string; // масло
  alt?: string[]; // аналоги
  part?: string; // артикул
};

export type Extra = { k: string; v: string };

export type Model = {
  name: string;
  sub?: string;
  units?: Unit[];
  extra?: Extra[];
  note?: string;
};

export type Brand = { id: string; name: string; models: Model[] };

const ULV4 = [
  'KROON-OIL SP Matic 2096',
  'Castrol ON EV Transmission Fluid D1',
  'Ravenol ATF ULV D-M',
  'Castrol ON EV Transmission Fluid W5',
];
const ULV5 = [...ULV4, 'Wolf OFFICIALTECH ATF D/M ULV'];
const DEX3 = [
  'FUCHS TITAN ATF 4400 DEXRON III',
  'TOTAL FLUIDMATIC XLD FE',
  'ZIC ATF MULTI SP-III Dexron III (1 л)',
];
const DEX3_NOTE = 'На канистре должно быть указано Dexron III / Dex/Merc / Mercon';
const GL45 = ['75W-90 или любое с допуском GL-4/GL-5'];
// У Xiaomi фреон и тормозная жидкость в таблице общие на все модели.
const XIAOMI_COMMON: Extra[] = [
  { k: 'Хладагент', v: 'R134a, 1150 г' },
  { k: 'Тормозная жидкость', v: 'DOT 4, 1 л' },
];

export const brands: Brand[] = [
  {
    id: 'aito',
    name: 'AITO',
    models: [
      {
        name: 'M5',
        units: [{ name: 'Редуктор', alt: ['75W'] }],
        extra: [
          { k: 'Фильтр салона', v: 'Filtron K1175' },
          { k: 'Фильтр воздушный', v: 'Подходит от Voyah (дорест)' },
        ],
      },
      { name: 'M7', units: [{ name: 'Редуктор', alt: ['75W'] }] },
    ],
  },
  {
    id: 'avatr',
    name: 'Avatr',
    models: [
      {
        name: 'Avatr 11',
        units: [{ name: 'Редуктор', spec: 'BOT 805 C EV', oil: 'Castrol ON EV Transmission Fluid W1' }],
        extra: [{ k: 'Колодки передние', v: 'FDP2076' }],
      },
      {
        name: 'Avatr 12',
        units: [
          {
            name: 'Редуктор',
            spec: 'BOT 805 C EV',
            oil: 'Castrol BOT 805 C EV',
            alt: ['Ravenol MTF-4 70W API GL-4+', 'Castrol Transmax Manual FE 75W API GL-4'],
          },
        ],
      },
      {
        name: 'Avatr 07',
        sub: 'Гибрид, полный привод',
        units: [
          { name: 'Передний редуктор', vol: '4,1 ± 0,1 л', oil: 'CA-DHTF-1' },
          { name: 'Задний редуктор', vol: '1,8 ± 0,1 л', oil: '75W' },
          { name: 'ДВС', vol: '4 л', oil: '0W-16' },
        ],
      },
      {
        name: 'Avatr 07',
        sub: 'Электро',
        units: [
          { name: 'Передний редуктор', vol: '1,05 л', oil: '75W' },
          { name: 'Задний редуктор', vol: '1,65 л', oil: '75W' },
        ],
      },
    ],
  },
  {
    id: 'buick',
    name: 'Buick Electra',
    models: [
      {
        name: 'E4',
        units: [
          {
            name: 'Редуктор',
            vol: 'по книге 3,17 л, фактически 2,7 л',
            spec: 'Dexron ULV',
            oil: 'Ravenol ULV D-M',
          },
        ],
      },
    ],
  },
  {
    id: 'byd',
    name: 'BYD',
    models: [
      {
        name: 'Song Plus',
        sub: '2024',
        units: [{ name: 'Редуктор', vol: '0,8–1,6 л', spec: 'BOT 383', oil: 'Castrol', alt: ULV4 }],
      },
      {
        name: 'E2',
        sub: '2023–2024',
        units: [{ name: 'Редуктор', vol: '0,5 л', spec: 'BOT 384', alt: ULV4 }],
        extra: [
          { k: 'Тормозная жидкость', v: 'BASF DOT4; Sinopec HZY6, 1,0 ± 0,05 л' },
          { k: 'Охлаждающая жидкость', v: 'Этиленгликолевый, стойкий антикоррозийный антифриз, 4,5 ± 0,2 л' },
        ],
      },
      {
        name: 'E2',
        sub: 'до 2023',
        units: [{ name: 'Редуктор', vol: '0,5 л', spec: 'Shell S3-ATF-MD3', oil: DEX3_NOTE, alt: DEX3 }],
        extra: [
          { k: 'Тормозная жидкость', v: 'DOT4, 0,75 ± 0,05 л' },
          {
            k: 'Охлаждающая жидкость',
            v: 'Для внутреннего рынка: гликолевый долговечный антикоррозийный антифриз, 4,6 ± 0,2 л. Температура замерзания по климату: −25 °C – круглый год на юге и летом на севере; −40 °C – зима в северных регионах',
          },
          { k: 'ОЖ батареи', v: 'Органический кислотный антифриз, −40 °C, 3,8 ± 0,1 л' },
          { k: 'Шаровая', v: 'Узкий палец' },
        ],
      },
      {
        name: 'Yuan Up',
        units: [{ name: 'Редуктор', vol: '600 ± 50 мл', alt: ULV5 }],
        extra: [{ k: 'Фильтр салона', v: 'FC474NY (Nakayama)' }],
      },
      {
        name: 'Yuan Plus',
        units: [{ name: 'Редуктор', vol: '600 ± 50 мл', spec: 'BOT 384', alt: ULV5 }],
        extra: [{ k: 'Стойки стабилизатора', v: 'Задние PS4283' }],
      },
      {
        name: 'Han',
        sub: 'до 2022',
        units: [
          { name: 'Передний редуктор', vol: '0,75 л', alt: ['75W-90'] },
          { name: 'Задний редуктор', vol: '0,85 л', alt: ['75W-90'] },
        ],
      },
      {
        name: 'Han',
        sub: 'с 2022',
        units: [
          { name: 'Передний редуктор', vol: '0,9 л', spec: 'BOT 384', alt: ULV5 },
          { name: 'Задний редуктор', vol: '1 л', spec: 'BOT 384', alt: ULV5 },
        ],
        extra: [{ k: 'Тормозная жидкость', v: 'DOT4/HZY6: 1,13 ± 0,2 л (2WD), 1,15 ± 0,2 л (4WD)' }],
      },
      {
        name: 'Han',
        sub: '2022',
        units: [
          { name: 'Передний узел в сборе', vol: '0,85 ± 0,1 л', oil: 'BOT 384', alt: ULV5 },
          { name: 'Задний узел в сборе', vol: '0,95 ± 0,1 л', oil: 'BOT 384', alt: ULV5 },
        ],
        extra: [{ k: 'Фреон', v: 'R-134a, 1150 ± 10 г' }],
      },
      {
        name: 'Sea Lion',
        units: [
          { name: 'Передний редуктор', vol: '1,6 л', spec: 'BOT 383', oil: 'Castrol', alt: ULV5 },
          { name: 'Задний редуктор', vol: '1,55 л', spec: 'BOT 383', oil: 'Castrol', alt: ULV5 },
        ],
      },
      {
        name: 'Song L',
        units: [
          { name: 'Передний редуктор', vol: '1,6 л', spec: 'BOT 383', oil: 'Castrol', alt: ULV5 },
          { name: 'Задний редуктор', vol: '1,55 л', spec: 'BOT 383', oil: 'Castrol', alt: ULV5 },
        ],
        extra: [{ k: 'Колодки', v: 'Передние HP9157NY, задние PBP363' }],
      },
      {
        name: 'Song L DM-i',
        units: [
          { name: 'ДВС', vol: '4 л', spec: '0W-16' },
          { name: 'Передний редуктор', vol: '3,3 л', spec: 'EHSF-2LV', alt: ['Idemitsu CVTF Type 2'] },
          { name: 'Задний редуктор', vol: '3,3 л', spec: 'EHSF-2LV', alt: ['Idemitsu CVTF Type 2'] },
        ],
      },
      {
        name: 'Qin Plus',
        sub: '2020',
        units: [{ name: 'Редуктор', vol: '0,7 л', spec: 'S3-ATF-MD3', oil: DEX3_NOTE, alt: DEX3 }],
        extra: [
          { k: 'Тормозная жидкость', v: 'DOT4, 850 ± 50 мл' },
          {
            k: 'Охлаждающая жидкость',
            v: 'С подогревом батареи – 4,4 л; без подогрева батареи – 3,3 л; без электрического + с электрическим подогревом – 5,0 л',
          },
          { k: 'ОЖ батареи', v: 'На основе этиленгликоля, 5,4 л' },
        ],
      },
      {
        name: 'Qin Plus',
        sub: '2023',
        units: [
          {
            name: 'Редуктор',
            vol: 'BYD7000BVBEV – 0,65 ± 0,05 л; BYD7000BVBEV2 – 0,8 ± 0,05 л',
            spec: 'Castrol BOT 384',
            oil: 'Castrol',
            alt: ULV5,
          },
        ],
        extra: [
          { k: 'Тормозная жидкость', v: 'HZY6/DOT4, 0,93 ± 0,05 л' },
          { k: 'Охлаждающая жидкость', v: 'Этиленгликолевая органическая долговечная, 7,4 л' },
        ],
      },
      {
        name: 'Tang EV',
        sub: '2025',
        units: [
          {
            name: 'Передний редуктор',
            vol: '2,3 ± 0,05 л',
            spec: 'Castrol BOT 383 или W5, Total GL-4 75W-90, Shell S3 ATF MD3',
            alt: [...ULV5, '75W'],
          },
          {
            name: 'Задний редуктор',
            vol: '1,9 ± 0,05 л',
            spec: 'Castrol BOT 383 или W5, Total GL-4 75W-90, Shell S3 ATF MD3',
            alt: [...ULV5, '75W'],
          },
        ],
        extra: [
          { k: 'Фреон', v: 'BYD7006BEVA1 или BYD7006BEVA2 – 1500 ± 10 г; BYD7006BEVA – 1200 ± 10 г' },
          { k: 'Тормозная жидкость', v: 'DOT4/HZY6, 1,15 ± 0,05 л' },
          { k: 'Охлаждающая жидкость', v: 'LEC-II: BYD7006BEVA / BYD7006BEVA2 – 5,1 ± 0,2 л; BYD7006BEVA1 – 5,8 ± 0,2 л' },
        ],
      },
      {
        name: 'Seal',
        sub: '2022',
        units: [
          { name: 'Передний редуктор', vol: '2 ± 0,05 л', spec: 'Castrol BOT 383', alt: [...ULV5, '75W'] },
          { name: 'Задний редуктор', vol: '1,7 ± 0,05 л', spec: 'Castrol BOT 383', alt: [...ULV5, '75W'] },
        ],
        extra: [
          { k: 'Фреон', v: 'R134a: BYD7006BEVA1 или BYD7006BEVA2 – 1500 ± 10 г; BYD7006BEVA – 1200 ± 10 г' },
          { k: 'Тормозная жидкость', v: 'DOT4/HZY6, 1100 ± 100 мл' },
          { k: 'Охлаждающая жидкость', v: 'TZ180XSF – 3,1 ± 0,2 л; TZ200XSQ – 3,3 ± 0,2 л' },
        ],
      },
      {
        name: 'Dolphin',
        units: [
          {
            name: 'Редуктор',
            vol: 'TZ180XSF (70 кВт, 94 л. с.) – 0,5 л; TZ200XSQ (130 кВт, 174 л. с.) – 0,65 л',
            spec: 'BOT 384',
            alt: [...ULV5, '75W'],
          },
        ],
        extra: [{ k: 'Фреон', v: 'R1234yf, 1000 ± 20 г' }],
      },
    ],
  },
  {
    id: 'changan',
    name: 'Changan',
    models: [
      { name: 'Qiyuan A07', units: [{ name: 'Редуктор', vol: '1,1 л', spec: 'BOT 805C EV', oil: '75W' }] },
    ],
  },
  {
    id: 'changan-hunter',
    name: 'Changan Hunter',
    models: [{ name: 'Hunter', units: [{ name: 'Редуктор', spec: 'BOT 350 M3', alt: ['75W'] }] }],
  },
  {
    id: 'deepal',
    name: 'Changan Deepal',
    models: [
      {
        name: 'SL07',
        sub: '2025',
        units: [
          { name: 'Задний редуктор', vol: '1 л', spec: 'BOT 805C EV', oil: '75W', alt: ['Fuchs Titan'] },
          { name: 'ДВС', vol: '3,3 л' },
        ],
      },
      {
        name: 'SL07',
        sub: '2026',
        units: [
          { name: 'Задний редуктор', vol: '1,7 л', spec: 'BOT 805C EV', oil: '75W', alt: ['Fuchs Titan'] },
          { name: 'ДВС', vol: '3,3 л' },
        ],
      },
      {
        name: 'G318',
        units: [
          { name: 'Передний редуктор', vol: '3,8 л', spec: 'Changan CA-DHTF-1', oil: 'Shell Geely E-Fluids E6 i DHTF' },
          { name: 'Задний редуктор', vol: '1,2 л', spec: 'Castrol BOT 805C EV', oil: '75W' },
          { name: 'ДВС', vol: '4 л', spec: '0W-16', oil: 'SP/GF-6 и выше' },
        ],
        extra: [
          { k: 'Фильтр переднего редуктора', v: 'C318F211802-1401 (1504520-HFE30D01)' },
          { k: 'Фильтр масляный', v: 'OC1566' },
        ],
      },
      {
        name: 'S05',
        units: [
          { name: 'ДВС', oil: '0W-20' },
          { name: 'Редуктор', oil: '75W' },
        ],
      },
    ],
  },
  {
    id: 'denza',
    name: 'Denza',
    models: [
      {
        name: 'Z9',
        units: [
          { name: 'Передний редуктор' },
          { name: 'Задний редуктор', vol: 'установлено 2, заливаются через общее отверстие' },
        ],
        note: 'В таблице данных по маслу пока нет',
      },
    ],
  },
  {
    id: 'dongfeng',
    name: 'Dongfeng',
    models: [
      {
        name: '230 Pro',
        sub: 'Гибрид',
        units: [
          { name: 'Редукторы', oil: 'HBVFE-2 GL-4 75W' },
          { name: 'Задний редуктор', vol: '0,95 л' },
          { name: 'ДВС', vol: '3,1 л', oil: 'SN PLUS 0W-20' },
        ],
        extra: [{ k: 'Фреон', v: '600 г' }],
      },
    ],
  },
  {
    id: 'foton',
    name: 'Foton',
    models: [
      {
        name: 'Mars 9',
        units: [
          { name: 'Двигатель', vol: '5,5 л', oil: 'Titan 5W-30 C3' },
          { name: 'Редуктор задний' },
          { name: 'Редуктор передний' },
        ],
      },
    ],
  },
  {
    id: 'gac',
    name: 'GAC',
    models: [
      {
        name: 'Aion Y Plus',
        units: [
          { name: 'Редуктор TZ184XYA2001', vol: '1,35–1,43 л', oil: 'Idemitsu MOTF TS-1' },
          { name: 'Редуктор TZ180XS127 / TZ180XS130', vol: '650–750 мл', spec: 'BOT 350 M3', alt: ['75W'] },
          { name: 'Редуктор TZ180XYXOF51', vol: '1,5 л', oil: 'Mobil 304' },
        ],
      },
    ],
  },
  {
    id: 'geely',
    name: 'Geely',
    models: [
      {
        name: 'E8',
        units: [
          { name: 'Передний редуктор', vol: '1,6 л', oil: 'ULV D-M' },
          { name: 'Задний редуктор', vol: '1,8 л', oil: 'ULV D-M' },
        ],
      },
      { name: 'Farizon', units: [{ name: 'Передний редуктор', vol: '0,8 л', oil: 'ULV D-M' }] },
      {
        name: 'E5',
        sub: '2025',
        units: [{ name: 'Передний редуктор', vol: '1 л', oil: 'Geely Shell E-Fluids E6 i DHTF' }],
        extra: [
          {
            k: 'Хладагент',
            v: 'R134, 725 ± 20 г (было на наклейке у машины, которая к нам приезжала; лучше смотреть под капотом у каждой)',
          },
        ],
        note: 'Под сливной крышкой ещё одна крышка',
      },
      {
        name: 'Monjaro',
        units: [
          { name: 'Раздаточная коробка', vol: '0,45 л', oil: '75W-90' },
          { name: 'Задняя главная передача и дифференциал', vol: '0,45 л', oil: '75W-90' },
          { name: 'ДВС', vol: '6,8 л сухой / 5,6 л при замене', spec: 'VCC RBS0-2AE', oil: '0W-20' },
          { name: 'Масло для распределения крутящего момента', spec: 'Habot 311', oil: 'Пока нет информации' },
          { name: 'АКПП', vol: '6,65 л', oil: 'ATF AW-1' },
        ],
        extra: [
          { k: 'Хладагент', v: 'R134, 550 г' },
          { k: 'Тормозная жидкость', v: 'DOT-4, 0,86 л / интеллектуальный усилитель 0,73 л' },
        ],
      },
      {
        name: 'Coolray',
        units: [{ name: 'ДВС', oil: '0W-20 Geely LP0W20AFS4L Lopal' }],
        extra: [
          { k: 'Фильтр масляный', v: 'Mahle OC614 / Mann 7030' },
          { k: 'Фильтр салонный', v: 'Filtron K1017' },
          { k: 'Фильтр воздушный', v: 'BIG FILTER GB95113, Goodwill AG853, JS Asakashi A0841, Totachi TA-4109' },
        ],
      },
    ],
  },
  {
    id: 'honda',
    name: 'Honda',
    models: [
      { name: 'M-NV', sub: '2024', units: [{ name: 'Редуктор', spec: 'BOT 352', alt: GL45 }] },
      { name: 'M-NV', sub: '2023', units: [{ name: 'Редуктор', vol: '950 г', spec: 'BOT 352', alt: GL45 }] },
      { name: 'e:NP1', units: [{ name: 'Редуктор', vol: '350 г', spec: 'BEVF TYPE 1.0 75W' }] },
      { name: 'e:NP2', units: [{ name: 'Редуктор', vol: '900 г', spec: 'BOT 352', alt: GL45 }] },
    ],
  },
  {
    id: 'jac',
    name: 'JAC',
    models: [
      {
        name: 'Refine M3 / e3',
        units: [{ name: 'Редуктор TZ220XSLJC60C', vol: '1,25 л', oil: '75W-90 GL-4/GL-5' }],
      },
    ],
  },
  {
    id: 'leapmotor',
    name: 'Leapmotor',
    models: [
      {
        name: 'C11',
        sub: 'С водяным охлаждением',
        units: [{ name: 'Редуктор', vol: '1,9 ± 0,05 л', spec: 'BOT 350 M3', oil: '75W' }],
      },
      {
        name: 'C11',
        sub: 'С масляным охлаждением',
        units: [
          { name: 'Передний редуктор', vol: '2,8 ± 0,05 л', spec: 'BOT 805C', oil: '75W' },
          { name: 'Задний редуктор', vol: '3,0 ± 0,05 л', spec: 'BOT 805C', oil: '75W' },
        ],
        extra: [{ k: 'Фильтр', v: 'OP525' }],
      },
    ],
  },
  {
    id: 'leopard',
    name: 'Leopard',
    models: [
      {
        name: 'Leopard 5',
        units: [
          { name: 'Передний редуктор', vol: '5,7 л', oil: 'EHSF-2LV' },
          { name: 'Задний редуктор', vol: '2,8 л', oil: 'EHSF-2LV' },
        ],
      },
      { name: 'Leopard 3', units: [{ name: 'Редуктор', spec: 'BOT 383' }] },
    ],
  },
  {
    id: 'lixiang',
    name: 'Li Auto (Lixiang)',
    models: [
      {
        name: 'L6 / L7 / L8 / L9',
        sub: '2023–2024',
        units: [
          { name: 'Передний редуктор · UMC', part: 'X01-21000012', vol: '1,1 + 0,05 л', oil: 'LV MV' },
          { name: 'Передний редуктор · OT&TB', part: 'X03-10010012', vol: '1,1 + 0,05 л', oil: 'LV MV' },
          { name: 'Передний редуктор · UMC', part: 'X028-2100013', vol: '0,8 + 0,1 л', oil: 'LV MV' },
          { name: 'Задний редуктор · UMC', part: 'W01-21000018', vol: '1,7 + 0,1 л', oil: 'Castrol D2' },
          { name: 'Задний редуктор · BorgWarner', part: 'X03B-21000011', vol: '1,1 л', oil: 'Castrol D2' },
          { name: 'Задний редуктор · Huawei', part: 'W01-21000012', vol: '1,7 + 0,1 л', oil: '75W' },
          { name: 'ДВС', vol: '4 л', spec: 'ACEA C2', oil: '0W-30, 5W-30' },
        ],
        extra: [
          {
            k: 'Антифриз',
            v: 'На основе этиленгликоля, спецификация LEC-II (Chinese National Standard GB 29743-2013), карбоксилатный. Общий объём 18 л. С завода до −35 °C. Нам подходит G12++, G12+ смешивать не рекомендуется',
          },
        ],
      },
      { name: 'L7', extra: [{ k: 'Правый бачок охлаждения', v: '(P10-0205) LAA30030012' }] },
      { name: 'L6', extra: [{ k: 'Рычаги', v: 'Правый PS50644R, левый PS50644L' }] },
    ],
  },
  {
    id: 'lynk',
    name: 'Lynk & Co',
    models: [
      {
        name: '08',
        units: [
          {
            name: 'ДВС',
            vol: '≈ 4,2 л',
            spec: 'VCC RBS0-2AE',
            oil: 'Строго 0W-20. Замена каждые 10 000 км',
          },
          {
            name: 'Редуктор',
            vol: 'частичная замена 4,5 л',
            oil: 'Shell E-Fluids E6 i DHTF',
            part: '9020009000',
          },
        ],
        extra: [
          { k: 'Фильтр масляный', v: '1016057051 (подходит также на 06 EM-P и 900 1.5T)' },
          { k: 'Фильтр воздушный', v: '8889682625 (подходит также на 06 EM-P и Geely Monjaro Hi-X)' },
          { k: 'Фильтр салонный', v: '8888397355' },
          { k: 'Свечи зажигания', v: '1016056801, замена каждые 40 000 км' },
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
        units: [
          { name: 'Задний редуктор', vol: '0,75 л', oil: 'Nissan MT-XZ NFX 75W', alt: ['75W'] },
          { name: 'Коробка', vol: '0,87 л' },
        ],
      },
      {
        name: 'Ariya',
        sub: '2022',
        units: [
          { name: 'Передний редуктор', vol: '0,9 л', alt: ['75W'] },
          { name: 'Коробка', vol: '0,87 л' },
        ],
        extra: [{ k: 'Кондиционер', v: 'POE, 1050 г (была наклейка на авто; мы делали так, когда машина приехала)' }],
      },
      { name: 'e-NV200', units: [{ name: 'Редуктор', oil: 'Nissan Matic S', alt: ['Ravenol TWS Longlife'] }] },
      {
        name: 'e-NV200 Evalia',
        units: [
          { name: 'Редуктор', vol: '1,6 л', spec: 'Nissan Matic-S', oil: 'Nissan Matic-S', alt: ['ZIC MULTI LF'] },
        ],
        extra: [{ k: 'Фильтр', v: 'ADN12540' }],
      },
    ],
  },
  {
    id: 'polar-stone',
    name: 'Polar Stone',
    models: [
      {
        name: '01',
        units: [
          { name: 'Передний редуктор', vol: '0,8 ± 0,1 л', spec: 'BOT 352 B1 BEV', alt: ['Ravenol ATF ULV D-M 75W'] },
          { name: 'Задний редуктор', vol: '0,8 ± 0,1 л', spec: 'BOT 352 B1 BEV', alt: ['Ravenol ATF ULV D-M 75W'] },
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
        units: [
          { name: 'Передний редуктор', vol: '1,6 л', spec: 'BOT 805C', oil: '75W' },
          { name: 'Задний редуктор', vol: '1,8 л', spec: 'BOT 805C', oil: '75W' },
        ],
        extra: [
          { k: 'Тормозная жидкость', v: 'DOT-4, 1 л' },
          { k: 'Охлаждающая жидкость', v: 'Задний привод – 16,8 л, полный привод – 17,3 л' },
          { k: 'Фреон', v: 'HFC-134a, 675 ± 20 г' },
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
        units: [
          {
            name: 'Передний редуктор',
            vol: '1,6 л',
            oil: 'G053013M2',
            alt: ['FUCHS TITAN FFL-2', '30939071 (5 л)', 'G052182A2 – масло для DSG', 'FEBI BILSTEIN 39071'],
            part: '602016157',
          },
          {
            name: 'Задний редуктор',
            vol: '0,8 л',
            oil: 'G052527A2',
            alt: ['FUCHS TITAN SINTOFLUID FE 75W'],
            part: '600632199',
          },
        ],
      },
      {
        name: 'ID.3',
        units: [{ name: 'Задний редуктор', vol: '0,8 л', alt: ['FUCHS TITAN SINTOFLUID FE 75W'] }],
      },
    ],
  },
  {
    id: 'voyah',
    name: 'Voyah',
    models: [
      {
        name: 'Free',
        sub: '2021–2022',
        units: [
          { name: 'Мотор передний · SEP200, 255 кВт', vol: '3 л', oil: 'ETF-EMC', part: 'H41201001', alt: ['DX6'] },
          { name: 'Мотор задний · SEP200, 255 кВт', vol: '3 л', oil: 'ETF-EMC', part: 'H41201001', alt: ['DX6'] },
          { name: 'Генератор', vol: '1,1 л', oil: 'ETF-EMC', part: 'H41201001, 2, 3, 4' },
          { name: 'ДВС · SFG15TR, 80 кВт', vol: '4 л', oil: '5W-30 API SN и выше' },
        ],
      },
      {
        name: 'Free',
        sub: '2021–2023, дорест',
        units: [
          { name: 'Мотор передний · TZ200XSP10, 160 кВт', vol: '0,8 л', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'] },
          { name: 'Мотор задний · TZ220XSP01, 200 кВт', vol: '0,8 л', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'] },
          { name: 'Генератор', vol: '1,1 л', oil: 'ETF-EMC', part: 'H41201001, 2, 3, 4' },
          { name: 'ДВС · SFG15TR, 80 кВт', vol: '4 л', oil: '5W-30 API SN и выше' },
        ],
        extra: [
          { k: 'Кондиционер', v: 'R134, 620 г; масло PAG' },
          { k: 'Пыльник ШРУСа', v: 'Наружный (в таблице не дописано)' },
        ],
      },
      {
        name: 'Free',
        sub: '2023, рестайлинг (318 км)',
        units: [
          { name: 'Мотор передний · TZ200XSP10, 160 кВт', vol: '0,8 л', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'] },
          { name: 'Мотор задний · TZ220XSP01, 200 кВт', vol: '0,8 л', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'] },
          { name: 'Генератор · EHSF-2LV', vol: '1,4 л', oil: 'HV generator lub.', part: 'H41203001, 2, 3' },
          { name: 'ДВС · DAM15NTDE, 110 кВт', vol: '4 л', oil: '0W-20' },
        ],
      },
      {
        name: 'Free+',
        units: [
          { name: 'Передний редуктор', vol: '0,75 ± 0,05 л', spec: 'BOT 805C EV', alt: ['75W'] },
          { name: 'Задний редуктор', vol: '2,35 ± 0,05 л', spec: 'BOT 805C EV', alt: ['75W'] },
          { name: 'ДВС', vol: '4 л', oil: 'SP 0W-20' },
        ],
        extra: [{ k: 'Кондиционер', v: 'R134a, 620 г' }],
      },
      {
        name: 'Dream',
        units: [
          { name: 'Мотор передний · TZ200XSP08, 130 кВт', vol: '3 л', oil: 'PHEV front motor', part: 'H41202003' },
          { name: 'Мотор задний · TZ200XSP08, 160 кВт', vol: '0,8 л', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'] },
          { name: 'Генератор', oil: 'PHEV front motor', part: 'H41202003' },
          { name: 'ДВС · DFMC15TE2, 100 кВт', vol: '4 л', oil: '0W-20' },
        ],
        extra: [{ k: 'Колодки передние', v: 'PBP479' }],
      },
      {
        name: 'Dream',
        sub: 'новая модель',
        units: [
          { name: 'Мотор передний · TZ236XY150, 150 кВт', vol: '5 л', oil: 'PHEV front motor', part: 'H41202001, 2, 3' },
          { name: 'Мотор задний · TZ200XSP08, 160 кВт', vol: '0,8 л', oil: 'Oil motor EV', part: 'H41202002', alt: ['75W'] },
          { name: 'ДВС · DFMC15TE3, 110 кВт', vol: '4 л', oil: '0W-20' },
        ],
        extra: [{ k: 'Фильтр масляный', v: 'W6103' }],
      },
      {
        name: 'Passion',
        units: [
          { name: 'Передний электродвигатель', vol: '0,85 л', oil: '75W' },
          { name: 'Задний электродвигатель', vol: '0,85 л', oil: '75W' },
        ],
      },
      {
        name: 'Courage',
        units: [
          { name: 'Передний редуктор', vol: '2,3 л', spec: 'BOT 802 EV', oil: 'Castrol W1', alt: ['75W'] },
          { name: 'Задний редуктор', vol: '2,3 л', spec: 'BOT 802 EV', oil: 'Castrol W1', alt: ['75W'] },
        ],
        extra: [
          { k: 'Кондиционер', v: 'R134a, 1150 ± 15 г' },
          {
            k: 'Антифриз',
            v: 'Полный привод – 13,3 ± 0,6 л; 2WD – 12,8 ± 0,6 л; 2WD с увеличенным запасом хода – 12,03 ± 0,6 л',
          },
        ],
      },
    ],
  },
  {
    id: 'weltmeister',
    name: 'Weltmeister',
    models: [
      { name: 'EX5', units: [{ name: 'Редуктор', vol: '1,8 л', oil: 'Dexron 6' }] },
      { name: 'EX5-Z', units: [{ name: 'Редуктор', vol: '700 ± 50 мл', spec: 'BOT 350 M3', oil: '75W' }] },
    ],
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    models: [
      {
        name: 'SU7',
        sub: 'Полный привод',
        units: [
          { name: 'Передний редуктор', vol: '1,8 л', spec: 'Castrol BOT 805C EV', oil: '75W' },
          { name: 'Задний редуктор', vol: '2 л', spec: 'Castrol BOT 805C EV', oil: '75W' },
        ],
        extra: [{ k: 'Охлаждающая жидкость', v: 'Valvoline LC100, 20 л' }, ...XIAOMI_COMMON],
      },
      {
        name: 'SU7',
        sub: 'Задний привод',
        units: [{ name: 'Задний редуктор', spec: 'Castrol BOT 352 B1 REV', oil: '75W-90 или любое с допуском GL-4/GL-5' }],
        extra: [{ k: 'Охлаждающая жидкость', v: 'Valvoline LC100, 17 л' }, ...XIAOMI_COMMON],
      },
      {
        name: 'YU7',
        sub: 'Задний привод',
        units: [{ name: 'Задний редуктор', spec: 'Castrol BOT 805C EV', oil: '75W' }],
        extra: [{ k: 'Охлаждающая жидкость', v: 'Valvoline LC100, 19,5 л' }, ...XIAOMI_COMMON],
      },
      {
        name: 'YU7 Pro',
        sub: 'Полный привод',
        units: [
          { name: 'Передний редуктор', vol: '1,75 л', spec: 'Castrol BOT 805C EV', oil: '75W' },
          { name: 'Задний редуктор', vol: '1,95 л', spec: 'Castrol BOT 805C EV', oil: '75W' },
        ],
        extra: [{ k: 'Охлаждающая жидкость', v: 'Valvoline LC100, 19,5 л' }, ...XIAOMI_COMMON],
      },
      {
        name: 'YU7 Max',
        sub: 'Полный привод',
        units: [
          { name: 'Передний редуктор', vol: '1,8 л', spec: 'Castrol BOT 805C EV', oil: '75W' },
          { name: 'Задний редуктор', vol: '2 л', spec: 'Castrol BOT 805C EV', oil: '75W' },
        ],
        extra: [{ k: 'Охлаждающая жидкость', v: 'Valvoline LC100, 22 л' }, ...XIAOMI_COMMON],
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
        units: [
          { name: 'Передний редуктор', vol: '0,9 л', oil: 'DX6' },
          { name: 'Задний редуктор', vol: '0,9 л', oil: 'DX6' },
        ],
      },
      {
        name: '001',
        sub: 'Дорест, Nidec',
        units: [
          { name: 'Передний редуктор', vol: '1,6 л', oil: 'DX6' },
          { name: 'Задний редуктор', vol: '1,6 л', oil: 'DX6' },
        ],
        note: 'Встречается крайне редко, это самые первые 001',
      },
      {
        name: '001',
        sub: '2024–2025',
        units: [
          {
            name: 'Передний редуктор',
            vol: 'ТО – 2,0 л ± 50 мл; при замене двигателя – 1,5 л ± 50 мл',
            spec: 'BOT 383',
            alt: ULV5,
          },
          {
            name: 'Задний редуктор',
            vol: 'ТО – 2,0 л ± 50 мл; при замене двигателя – 1,5 л ± 50 мл',
            spec: 'BOT 383',
            alt: ULV5,
          },
          { name: 'Два передних редуктора', vol: 'ТО – 5,1 л ± 50 мл', spec: 'BOT 383', alt: ULV5 },
          { name: 'Два задних редуктора', vol: 'ТО – левый 2,3 ± 0,1 л, правый 2,3 ± 0,1 л', spec: 'BOT 383', alt: ULV5 },
        ],
        note: 'Масло заливать через заправочное отверстие',
      },
      {
        name: '7X',
        units: [
          { name: 'Передний редуктор', vol: '2 л', spec: 'BOT 383', alt: ULV5 },
          { name: 'Задний редуктор', vol: '2 л', spec: 'BOT 383', alt: ULV5 },
        ],
      },
      {
        name: '007',
        units: [
          { name: 'Передний редуктор', vol: '1,5 л ± 50 мл', spec: 'BOT 383', alt: ULV5 },
          { name: 'Задний редуктор', vol: '1,8 л ± 50 мл', spec: 'BOT 383', alt: ULV5 },
        ],
        note: 'Лить через маслозаливное отверстие, остановиться, когда уровень дойдёт до отверстия',
      },
      {
        name: 'X',
        units: [
          { name: 'Передний редуктор · Vremt', vol: '0,7 ± 0,05 л', spec: 'DX6', oil: 'Dexron 6' },
          { name: 'Задний редуктор', vol: '1 л; с Vremt – 0,8 ± 0,025 л', spec: 'DX6', oil: 'Dexron 6' },
        ],
      },
    ],
  },
];
