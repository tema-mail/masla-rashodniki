# Масла и расходники

Справочник: что заливать в редукторы, ДВС и системы электромобилей и гибридов, по маркам.
Источник – Google-таблица «МАСЛА и прочее» (1_9k_AFXRx-f_THXFTHODhT9dl8joYclLg4zn3q46ByU), перенос 22.10.2026.

- Astro, одна страница `src/pages/index.astro`, данные – `src/data/brands.ts` (марка → модели → узлы + прочее).
- Новые данные добавлять в `brands.ts`, не в разметку. Марки на странице сортируются по алфавиту.
- Выкладка: push в main → GitHub Pages (`.github/workflows/deploy.yml`), https://tema-mail.github.io/masla-rashodniki/
- Страница закрыта от поисковиков meta noindex (robots.txt в подпапке Pages не работает).
- Node: `~/.local/node/bin`, сборка `npx astro build`.
- Тире только короткое «–».
