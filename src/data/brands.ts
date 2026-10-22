// Перенесено из Google-таблицы «МАСЛА и прочее» 22.10.2026. Типы, общие списки аналогов
// и марки Leopard–Zeekr – в brands-2.ts, здесь AITO–Li Auto и общий список.
import { brandsLZ, DEX3, DEX3_NOTE, GL45, HUNTER_COMMON, HUNTER_FLUIDS, ULV4, ULV5, type Brand } from './brands-2';

export type { Brand, Model, Row } from './brands-2';

export const brands: Brand[] = [
  {
    id: 'aito',
    name: 'AITO',
    models: [
      {
        name: 'M5',
        rows: [
          { name: 'Масло трансмиссионное (SEP165)', oil: 'ATF-VI; ETF-EMC', vol: '3,0 ± 0,5 л' },
          { name: 'Редуктор CTZ196XY0P1', oil: 'Castrol BOT 805 C', alt: ['75W'], vol: '1,7 ± 0,1 л' },
          { name: 'Редуктор CTZ196XY0P4', oil: 'Castrol BOT 805 C', alt: ['75W'], vol: '1,7 ± 0,1 л' },
          { name: 'Редуктор CYS210XY0P1', oil: 'Castrol BOT 805 C', alt: ['75W'], vol: '2,0 ± 0,1 л' },
          { name: 'Масло моторное (H15RT)', oil: 'SP 0W-20', vol: '4 л' },
          { name: 'Тормозная жидкость', oil: 'DOT4', vol: '700 ± 50 мл' },
          { name: 'Охлаждающая жидкость ДВС', oil: 'до −40 °C', vol: '8,7 ± 0,5 л' },
          { name: 'Охлаждающая жидкость тяговой батареи', oil: 'до −40 °C', vol: '13,5 ± 0,5 л' },
          { name: 'Хладагент кондиционера', oil: 'R134a', vol: '600 ± 20 г' },
          { name: 'Омывающая жидкость', oil: 'любая', vol: '3,7 ± 0,2 л' },
          { name: 'Фильтр салона', oil: 'Filtron K1175' },
          { name: 'Фильтр воздушный', oil: 'Подходит от Voyah (дорест)' },
        ],
      },
      {
        name: 'M7',
        rows: [
          { name: 'Трансмиссия SE200', oil: 'BOT 805C EV', alt: ['75W'], vol: '1,7 ± 0,1 л' },
          { name: 'Трансмиссия DET300', oil: 'SK DHTF-01', vol: '2,2 ± 0,1 л' },
          {
            name: 'ДВС генераторной установки (H15RT)',
            oil: 'SP 0W-20',
            vol: '4 л при замене фильтра; 4,5 л при капремонте двигателя',
          },
          { name: 'Охлаждающая жидкость генераторной установки', oil: 'до −40 °C', vol: '8,9 ± 0,6 л' },
          { name: 'Охлаждающая жидкость тяговой батареи', oil: 'до −40 °C', vol: '5,7 ± 0,5 л' },
          {
            name: 'Охлаждающая жидкость электропривода',
            oil: 'до −40 °C',
            vol: '7,5 л (моно) / 8,9 л (полный привод)',
          },
          { name: 'Хладагент кондиционера', oil: 'R134a', vol: '850 ± 10 г' },
          { name: 'Омывающая жидкость (зимняя)', oil: 'до −35 °C', vol: '2,5 л' },
        ],
      },
    ],
  },
  {
    id: 'avatr',
    name: 'Avatr',
    models: [
      {
        name: 'Avatr 11',
        code: 'SC6491EBCBEV, SC6491EBEBEV',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 805 C EV', oil: 'Castrol ON EV Transmission Fluid W1', vol: '1,6 ± 0,1 л' },
          { name: 'Задний редуктор', spec: 'BOT 805 C EV', oil: 'Castrol ON EV Transmission Fluid W1', vol: '1,8 ± 0,1 л' },
          { name: 'Тормозная жидкость', oil: 'DOT4/HZY4', vol: '1000 мл' },
          { name: 'ОЖ: контур отопления, вентиляции и кондиционирования', oil: 'KEVO −40 °C', vol: '2,9 л' },
          { name: 'ОЖ: тяговая батарея', oil: 'KEVO −40 °C', vol: '5,85 л' },
          { name: 'ОЖ: цепь электропривода', oil: 'KEVO −40 °C', vol: '7,8 л' },
          { name: 'Хладагент кондиционера', oil: 'R134a', vol: '850 ± 20 мл' },
          { name: 'Омывающая жидкость', oil: 'ZT-30', vol: '3 л' },
          { name: 'Колодки передние', oil: 'FDP2076' },
        ],
      },
      {
        name: 'Avatr 12',
        rows: [
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
        rows: [
          { name: 'Передний редуктор', oil: 'CA-DHTF-1', vol: '4,1 ± 0,1 л' },
          { name: 'Задний редуктор', oil: '75W', vol: '1,8 ± 0,1 л' },
          { name: 'ДВС', oil: '0W-16', vol: '4 л' },
        ],
      },
      {
        name: 'Avatr 07',
        sub: 'Электро',
        rows: [
          { name: 'Передний редуктор', oil: '75W', vol: '1,05 л' },
          { name: 'Задний редуктор', oil: '75W', vol: '1,65 л' },
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
        rows: [{ name: 'Редуктор', spec: 'Dexron ULV', oil: 'Ravenol ULV D-M', vol: 'по книге 3,17 л, фактически 2,7 л' }],
      },
    ],
  },
  {
    id: 'byd',
    name: 'BYD',
    models: [
      { name: 'Song Plus', sub: '2024', rows: [{ name: 'Редуктор', spec: 'BOT 383', oil: 'Castrol', alt: ULV4, vol: '0,8–1,6 л' }] },
      {
        name: 'E2',
        sub: '2023–2024',
        rows: [
          { name: 'Редуктор', spec: 'BOT 384', alt: ULV4, vol: '0,5 л' },
          { name: 'Тормозная жидкость', oil: 'BASF DOT4; Sinopec HZY6', vol: '1,0 ± 0,05 л' },
          { name: 'Охлаждающая жидкость', oil: 'Этиленгликолевый, стойкий антикоррозийный антифриз', vol: '4,5 ± 0,2 л' },
        ],
      },
      {
        name: 'E2',
        sub: 'до 2023',
        rows: [
          { name: 'Редуктор', spec: 'Shell S3-ATF-MD3', oil: DEX3_NOTE, alt: DEX3, vol: '0,5 л' },
          { name: 'Тормозная жидкость', oil: 'DOT4', vol: '0,75 ± 0,05 л' },
          {
            name: 'Охлаждающая жидкость',
            oil: 'Гликолевый долговечный антикоррозийный антифриз (внутренний рынок)',
            vol: '4,6 ± 0,2 л',
            note: 'Замерзание по климату: −25 °C – круглый год на юге и летом на севере; −40 °C – зима в северных регионах',
          },
          { name: 'ОЖ батареи', oil: 'Органический кислотный антифриз −40 °C', vol: '3,8 ± 0,1 л' },
          { name: 'Шаровая', oil: 'Узкий палец' },
        ],
      },
      {
        name: 'Yuan Up',
        rows: [
          { name: 'Редуктор', alt: ULV5, vol: '600 ± 50 мл' },
          { name: 'Фильтр салона', oil: 'FC474NY (Nakayama)' },
        ],
      },
      {
        name: 'Yuan Plus',
        rows: [
          { name: 'Редуктор', spec: 'BOT 384', alt: ULV5, vol: '600 ± 50 мл' },
          { name: 'Стойки стабилизатора задние', oil: 'PS4283' },
        ],
      },
      {
        name: 'Han',
        sub: 'до 2022',
        rows: [
          { name: 'Передний редуктор', alt: ['75W-90'], vol: '0,75 л' },
          { name: 'Задний редуктор', alt: ['75W-90'], vol: '0,85 л' },
        ],
      },
      {
        name: 'Han',
        sub: 'с 2022',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 384', alt: ULV5, vol: '0,9 л' },
          { name: 'Задний редуктор', spec: 'BOT 384', alt: ULV5, vol: '1 л' },
          { name: 'Тормозная жидкость', oil: 'DOT4/HZY6', vol: '1,13 ± 0,2 л (2WD); 1,15 ± 0,2 л (4WD)' },
        ],
      },
      {
        name: 'Han',
        sub: '2022',
        rows: [
          { name: 'Передний узел в сборе', oil: 'BOT 384', alt: ULV5, vol: '0,85 ± 0,1 л' },
          { name: 'Задний узел в сборе', oil: 'BOT 384', alt: ULV5, vol: '0,95 ± 0,1 л' },
          { name: 'Фреон', oil: 'R-134a', vol: '1150 ± 10 г' },
        ],
      },
      {
        name: 'Sea Lion',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 383', oil: 'Castrol', alt: ULV5, vol: '1,6 л' },
          { name: 'Задний редуктор', spec: 'BOT 383', oil: 'Castrol', alt: ULV5, vol: '1,55 л' },
        ],
      },
      {
        name: 'Song L',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 383', oil: 'Castrol', alt: ULV5, vol: '1,6 л' },
          { name: 'Задний редуктор', spec: 'BOT 383', oil: 'Castrol', alt: ULV5, vol: '1,55 л' },
          { name: 'Колодки передние', oil: 'HP9157NY' },
          { name: 'Колодки задние', oil: 'PBP363' },
        ],
      },
      {
        name: 'Song L DM-i',
        rows: [
          { name: 'Передний редуктор', spec: 'EHSF-2LV', alt: ['Idemitsu CVTF Type 2'], vol: '3,3 л' },
          { name: 'Задний редуктор', spec: 'EHSF-2LV', alt: ['Idemitsu CVTF Type 2'], vol: '3,3 л' },
          { name: 'ДВС', spec: '0W-16', vol: '4 л' },
        ],
      },
      {
        name: 'Qin Plus',
        sub: '2020',
        rows: [
          { name: 'Редуктор', spec: 'S3-ATF-MD3', oil: DEX3_NOTE, alt: DEX3, vol: '0,7 л' },
          { name: 'Тормозная жидкость', oil: 'DOT4', vol: '850 ± 50 мл' },
          {
            name: 'Охлаждающая жидкость',
            vol: 'с подогревом батареи 4,4 л; без подогрева 3,3 л; без электрического + с электрическим подогревом 5,0 л',
          },
          { name: 'ОЖ батареи', oil: 'На основе этиленгликоля', vol: '5,4 л' },
        ],
      },
      {
        name: 'Qin Plus',
        sub: '2023',
        rows: [
          { name: 'Редуктор BYD7000BVBEV', spec: 'Castrol BOT 384', oil: 'Castrol', alt: ULV5, vol: '0,65 ± 0,05 л' },
          { name: 'Редуктор BYD7000BVBEV2', spec: 'Castrol BOT 384', oil: 'Castrol', alt: ULV5, vol: '0,8 ± 0,05 л' },
          { name: 'Тормозная жидкость', oil: 'HZY6/DOT4', vol: '0,93 ± 0,05 л' },
          { name: 'Охлаждающая жидкость', oil: 'Этиленгликолевая органическая долговечная', vol: '7,4 л' },
        ],
      },
      {
        name: 'Tang EV',
        sub: '2025',
        rows: [
          {
            name: 'Передний редуктор',
            spec: 'Castrol BOT 383 или W5, Total GL-4 75W-90, Shell S3 ATF MD3',
            alt: [...ULV5, '75W'],
            vol: '2,3 ± 0,05 л',
          },
          {
            name: 'Задний редуктор',
            spec: 'Castrol BOT 383 или W5, Total GL-4 75W-90, Shell S3 ATF MD3',
            alt: [...ULV5, '75W'],
            vol: '1,9 ± 0,05 л',
          },
          { name: 'Тормозная жидкость', oil: 'DOT4/HZY6', vol: '1,15 ± 0,05 л' },
          { name: 'Охлаждающая жидкость', oil: 'LEC-II', vol: 'BYD7006BEVA / BEVA2 – 5,1 ± 0,2 л; BYD7006BEVA1 – 5,8 ± 0,2 л' },
          { name: 'Фреон', vol: 'BYD7006BEVA1 или BEVA2 – 1500 ± 10 г; BYD7006BEVA – 1200 ± 10 г' },
        ],
      },
      {
        name: 'Seal',
        sub: '2022',
        rows: [
          { name: 'Передний редуктор', spec: 'Castrol BOT 383', alt: [...ULV5, '75W'], vol: '2 ± 0,05 л' },
          { name: 'Задний редуктор', spec: 'Castrol BOT 383', alt: [...ULV5, '75W'], vol: '1,7 ± 0,05 л' },
          { name: 'Тормозная жидкость', oil: 'DOT4/HZY6', vol: '1100 ± 100 мл' },
          { name: 'Охлаждающая жидкость', vol: 'TZ180XSF – 3,1 ± 0,2 л; TZ200XSQ – 3,3 ± 0,2 л' },
          { name: 'Фреон', oil: 'R134a', vol: 'BYD7006BEVA1 или BEVA2 – 1500 ± 10 г; BYD7006BEVA – 1200 ± 10 г' },
        ],
      },
      {
        name: 'Dolphin',
        rows: [
          { name: 'Редуктор TZ180XSF (70 кВт, 94 л. с.)', spec: 'BOT 384', alt: [...ULV5, '75W'], vol: '0,5 л' },
          { name: 'Редуктор TZ200XSQ (130 кВт, 174 л. с.)', spec: 'BOT 384', alt: [...ULV5, '75W'], vol: '0,65 л' },
          { name: 'Фреон', oil: 'R1234yf', vol: '1000 ± 20 г' },
        ],
      },
    ],
  },
  {
    id: 'changan',
    name: 'Changan',
    models: [{ name: 'Qiyuan A07', rows: [{ name: 'Редуктор', spec: 'BOT 805C EV', oil: '75W', vol: '1,1 л' }] }],
  },
  {
    id: 'deepal',
    name: 'Changan Deepal',
    models: [
      {
        name: 'SL07',
        sub: '2025',
        rows: [
          { name: 'Задний редуктор', spec: 'BOT 805C EV', oil: 'Castrol BOT805C EV', alt: ['75W', 'Fuchs Titan'], vol: '1,0 л' },
          {
            name: 'Моторное масло',
            oil: 'SN/GF-5 и выше, 0W-20 (Q/JD J-GY5)',
            vol: '3,2 ± 0,1 л',
            note: 'В таблице у мастеров ДВС – 3,3 л',
          },
          { name: 'Охлаждающая жидкость', oil: 'LEC-II-40 (Q/JD1028)', vol: '11,6 л' },
          { name: 'Тормозная жидкость', oil: 'HZY4 или DOT4', vol: '950 ± 50 мл' },
          { name: 'Компрессорное масло кондиционера', oil: 'PVE 56EA', vol: '140 мл', note: 'В мануале опечатка «ФЖЕЛ 56EA»' },
          { name: 'Хладагент кондиционера', oil: 'R134a', vol: '480 г' },
          { name: 'Омывающая жидкость', oil: 'ZT-30', vol: '3,0 л' },
          { name: 'Топливо', oil: 'АИ-92 и выше (GB 17930)', vol: '45 л' },
        ],
      },
      {
        name: 'SL07',
        sub: '2026',
        rows: [
          { name: 'Задний редуктор', spec: 'BOT 805C EV', oil: '75W', alt: ['Fuchs Titan'], vol: '1,7 л' },
          { name: 'ДВС', vol: '3,3 л' },
        ],
      },
      {
        name: 'G318',
        rows: [
          {
            name: 'Передний редуктор',
            spec: 'Changan CA-DHTF-1',
            oil: 'Shell Geely E-Fluids E6 i DHTF',
            vol: '3,8 л',
          },
          { name: 'Задний редуктор', spec: 'Castrol BOT 805C EV', oil: '75W', vol: '1,2 л' },
          { name: 'ДВС', spec: '0W-16', oil: 'SP/GF-6 и выше', vol: '4 л' },
          { name: 'Фильтр переднего редуктора', oil: 'C318F211802-1401 (1504520-HFE30D01)' },
          { name: 'Фильтр масляный', oil: 'OC1566' },
        ],
      },
      {
        name: 'S05',
        rows: [
          { name: 'Редуктор', oil: 'Castrol BOT805C EV', alt: ['75W'], vol: '1,0 л' },
          {
            name: 'Моторное масло',
            oil: 'SP/GF-6 и выше, 0W-16 (Q/JD J-GY5)',
            vol: '4 ± 0,1 л',
            note: 'В таблице у мастеров – 0W-20',
          },
          { name: 'Охлаждающая жидкость', oil: 'LEC-II-40 (Q/JD1028)', vol: '15 ± 0,5 л' },
          { name: 'Тормозная жидкость', oil: 'HZY4', vol: '800 ± 80 мл' },
          { name: 'Компрессорное масло кондиционера', oil: 'PVE 56EA', vol: '150 мл' },
          { name: 'Хладагент кондиционера', oil: 'R134a', vol: '570 ± 10 г' },
          { name: 'Омывающая жидкость', oil: 'HG0807000006', vol: '2,9 ± 0,5 л' },
          { name: 'Топливо', oil: 'АИ-92 и выше', vol: '51 л' },
        ],
      },
    ],
  },
  {
    id: 'changan-hunter',
    name: 'Changan Hunter',
    models: [
      {
        name: 'Hunter',
        sub: 'Бензин',
        code: 'D20TG-AB',
        rows: [
          ...HUNTER_COMMON,
          { name: 'Масло АКПП (8AT)', oil: 'Shell L12108', vol: '8,5 ± 1,0 л' },
          { name: 'Раздаточная коробка (Active 4WD)', oil: 'Mercon LV', vol: '1,5 ± 0,05 л' },
          { name: 'Масло двигателя', oil: '0W-20, SN/GF-5', vol: '4,5 ± 0,1 л' },
          {
            name: 'Охлаждающая жидкость',
            oil: 'BASF Glysantin G30',
            vol: 'высокотемпературная система 8,9 л; низкотемпературная 2,7 л',
          },
          ...HUNTER_FLUIDS,
          { name: 'Топливо (Euro VI)', oil: 'Бензин неэтилированный, RON не ниже 92 (AKI не ниже 89)', vol: '80 л' },
        ],
      },
      {
        name: 'Hunter',
        sub: 'Дизель',
        code: '4D20M',
        rows: [
          ...HUNTER_COMMON,
          { name: 'Масло двигателя', oil: '5W-30, ACEA C3', vol: '5,0 ± 0,02 л' },
          { name: 'Охлаждающая жидкость', oil: 'RLFD-101', vol: '8,4 ± 0,5 л' },
          ...HUNTER_FLUIDS,
          { name: 'Жидкость гидроусилителя руля', oil: 'ATF III', vol: '1,05 ± 0,02 л' },
          { name: 'Раствор мочевины', oil: 'AUS32 (массовая доля 31,8–33,2 %)', vol: '16,5 л' },
          {
            name: 'Топливо (Euro VI)',
            oil: 'Дизель: 0# – выше 5 °C; −10# – выше −5 °C; −20# – выше −10 °C; −35# – выше −25 °C',
            vol: '80 л',
          },
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
        code: 'ДВС BYD479ZQA',
        rows: [
          { name: 'Передний редуктор (коробка EHS)', oil: 'EHSF-2LV', vol: '3,1 ± 0,05 л' },
          {
            name: 'Задний электропривод',
            oil: 'EHSF-2LV',
            vol: '2,6 ± 0,1 л',
            note: 'Установлено 2 задних редуктора, заливаются через общее отверстие',
          },
          { name: 'Масло ДВС', oil: 'SP 0W-20; C5 0W-20, одновременно SN+/SP', vol: '5,4 ± 0,1 л' },
          { name: 'Тормозная жидкость', oil: 'HZY6/DOT4', vol: '1,08 ± 0,1 л' },
          {
            name: 'Охлаждающая жидкость электропривода и электроники',
            oil: 'Этиленгликолевая органическо-кислотная (OAT) долговечная, −40 °C',
            vol: '11,15 ± 0,5 л',
          },
          {
            name: 'Охлаждающая жидкость двигателя',
            oil: 'Этиленгликолевая органическо-кислотная (OAT) долговечная, −40 °C',
            vol: '9,5 ± 0,5 л',
          },
        ],
        note: 'Таблица из китайского мануала, переведено',
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
        rows: [
          { name: 'Редукторы', oil: 'HBVFE-2 GL-4 75W' },
          { name: 'Задний редуктор', vol: '0,95 л' },
          { name: 'ДВС', oil: 'SN PLUS 0W-20', vol: '3,1 л' },
          { name: 'Фреон', vol: '600 г' },
        ],
      },
    ],
  },
  {
    id: 'foton',
    name: 'Foton',
    models: [
      {
        name: 'Mars 9',
        rows: [{ name: 'Редуктор задний' }, { name: 'Редуктор передний' }, { name: 'Двигатель', oil: 'Titan 5W-30 C3', vol: '5,5 л' }],
      },
    ],
  },
  {
    id: 'gac',
    name: 'GAC',
    models: [
      {
        name: 'Aion Y Plus',
        rows: [
          { name: 'Редуктор TZ184XYA2001', oil: 'Idemitsu MOTF TS-1', vol: '1,35–1,43 л' },
          { name: 'Редуктор TZ180XS127 / TZ180XS130', spec: 'BOT 350 M3', alt: ['75W'], vol: '650–750 мл' },
          { name: 'Редуктор TZ180XYXOF51', oil: 'Mobil 304', vol: '1,5 л' },
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
        rows: [
          { name: 'Передний редуктор', oil: 'ULV D-M', vol: '1,6 л' },
          { name: 'Задний редуктор', oil: 'ULV D-M', vol: '1,8 л' },
        ],
      },
      { name: 'Farizon', rows: [{ name: 'Передний редуктор', oil: 'ULV D-M', vol: '0,8 л' }] },
      {
        name: 'E5',
        sub: '2025',
        rows: [
          { name: 'Передний редуктор', oil: 'Geely Shell E-Fluids E6 i DHTF', vol: '1 л', note: 'Под сливной крышкой ещё одна крышка' },
          {
            name: 'Хладагент',
            oil: 'R134',
            vol: '725 ± 20 г',
            note: 'Было на наклейке у машины, которая к нам приезжала; лучше смотреть под капотом у каждой',
          },
        ],
      },
      {
        name: 'Monjaro',
        rows: [
          { name: 'АКПП', oil: 'ATF AW-1', vol: '6,65 л' },
          { name: 'Раздаточная коробка', oil: '75W-90', vol: '0,45 л' },
          { name: 'Задняя главная передача и дифференциал', oil: '75W-90', vol: '0,45 л' },
          { name: 'Масло для распределения крутящего момента', spec: 'Habot 311', oil: 'Пока нет информации' },
          { name: 'ДВС', spec: 'VCC RBS0-2AE', oil: '0W-20', vol: '6,8 л сухой / 5,6 л при замене' },
          { name: 'Тормозная жидкость', oil: 'DOT-4', vol: '0,86 л; интеллектуальный усилитель 0,73 л' },
          { name: 'Хладагент', oil: 'R134', vol: '550 г' },
        ],
      },
      {
        name: 'Coolray',
        rows: [
          { name: 'ДВС', oil: '0W-20 Geely LP0W20AFS4L Lopal' },
          { name: 'Фильтр масляный', oil: 'Mahle OC614 / Mann 7030' },
          { name: 'Фильтр салонный', oil: 'Filtron K1017' },
          { name: 'Фильтр воздушный', oil: 'BIG FILTER GB95113, Goodwill AG853, JS Asakashi A0841, Totachi TA-4109' },
        ],
      },
    ],
  },
  {
    id: 'honda',
    name: 'Honda',
    models: [
      { name: 'M-NV', sub: '2024', rows: [{ name: 'Редуктор', spec: 'BOT 352', alt: GL45 }] },
      { name: 'M-NV', sub: '2023', rows: [{ name: 'Редуктор', spec: 'BOT 352', alt: GL45, vol: '950 г' }] },
      { name: 'e:NP1', rows: [{ name: 'Редуктор', spec: 'BEVF TYPE 1.0 75W', vol: '350 г' }] },
      { name: 'e:NP2', rows: [{ name: 'Редуктор', spec: 'BOT 352', alt: GL45, vol: '900 г' }] },
    ],
  },
  {
    id: 'jac',
    name: 'JAC',
    models: [{ name: 'Refine M3 / e3', rows: [{ name: 'Редуктор TZ220XSLJC60C', oil: '75W-90 GL-4/GL-5', vol: '1,25 л' }] }],
  },
  {
    id: 'leapmotor',
    name: 'Leapmotor',
    models: [
      { name: 'C11', sub: 'С водяным охлаждением', rows: [{ name: 'Редуктор', spec: 'BOT 350 M3', oil: '75W', vol: '1,9 ± 0,05 л' }] },
      {
        name: 'C11',
        sub: 'С масляным охлаждением',
        rows: [
          { name: 'Передний редуктор', spec: 'BOT 805C', oil: '75W', vol: '2,8 ± 0,05 л' },
          { name: 'Задний редуктор', spec: 'BOT 805C', oil: '75W', vol: '3,0 ± 0,05 л' },
          { name: 'Фильтр', oil: 'OP525' },
        ],
      },
    ],
  },
  ...brandsLZ,
];
