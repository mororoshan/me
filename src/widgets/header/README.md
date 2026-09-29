# Header widget

Header with navigation (Home, Projects) and language switcher (EN | RU). Used in the app layout so every page has it.

## Props

None.

## Dependencies

- `react-router-dom` (`Link`, `useLocation`)
- `react-i18next` (`useTranslation`)
- `shared/ui` (`Button`)
- `app/store` (`useAppStore` for the language switcher)

## Translation keys

- `common.navHome`, `common.navProjects`
- `app.langEn`, `app.langRu`
