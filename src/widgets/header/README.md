# Header widget

Header with navigation (Home, Projects) and language switcher (EN | RU). Used in the app layout so every page has it.

## Props

None.

## Dependencies

- `react-router-dom` (`Link`, `useLocation`)
- `react-i18next` (`useTranslation`)
- `antd` (`Button`)
- `shared/i18n` (`I18N_STORAGE_KEY` for persistence)

## Translation keys

- `common.navHome`, `common.navProjects`
- `app.langEn`, `app.langRu`
