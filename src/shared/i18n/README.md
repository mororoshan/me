# Shared i18n

i18next + react-i18next for EN/RU. Ant Design locale is synced with `i18n.language`.

## Initialization

- **Where**: i18n is initialized in `app/main.tsx` by importing `../shared/i18n` **before** any other app code. That import runs `config.ts`, which calls `i18n.use(initReactI18next).init(...)`.
- **When**: The import runs before `createRoot`, so when any component uses `useTranslation()`, i18n is already initialized.
- **Initial language**: Read from `localStorage` key `portfolio_lang` (`'en'` or `'ru'`); default is `'en'`.

## Namespace structure

All keys live in the default `translation` namespace, grouped by screen/feature:

| Key prefix | Purpose |
|------------|--------|
| `common`   | App name, nav labels (e.g. `common.appName`, `common.navHome`, `common.navProjects`) |
| `home`     | Home page (e.g. `home.title`, `home.intro`) |
| `projects` | Projects list (e.g. `projects.title`, `projects.empty`, `projects.handwritten`, `projects.vibeCoded`) |
| `app`      | App shell / shared UI strings (e.g. `app.themeCheck`, `app.langEn`, `app.langRu`) |

## Adding new keys

1. Add the key to both `shared/i18n/locales/en.json` and `shared/i18n/locales/ru.json` under the right group (`common`, `home`, `projects`, or `app`).
2. Use in components: `const { t } = useTranslation(); t('home.title')`. For interpolated tags use `<Trans i18nKey="..." components={{ 0: <code /> }} />`.

## Ant Design locale

In `app/providers.tsx`, `ConfigProvider` receives `locale={locale}` where `locale` is `ruRU` or `enUS` from `antd/locale`, derived from `i18n.language`. A wrapper uses `useTranslation()` so the provider re-renders when the user switches language; Ant components (DatePicker, Table, etc.) then show in the correct language.

## Rule

**UI copy must use translation keys** — no hardcoded user-facing strings. Use `useTranslation()` or `<Trans>` and keys from the locale files.
