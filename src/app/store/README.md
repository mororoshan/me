# App store (MobX)

Global UI state for the app. Stores are created in `app` and provided via React context; widgets and features consume them via hooks.

## Stores

### AppStore

- **File**: `app/store/appStore.ts`
- **State**: `locale: 'en' | 'ru'` (and optional theme/sidebar later).
- **Actions**: `setLocale(lng)` — updates locale, calls `i18n.changeLanguage(lng)`, and persists to `localStorage` (`I18N_STORAGE_KEY`).
- **Init**: In constructor, reads `localStorage` and, if valid, sets `locale` and calls `i18n.changeLanguage()` so the app starts in the saved language.

### ProjectsStore

Not implemented. Pages and widgets read the project list from `entities/project` directly. Add a store here (or under `entities/project/model`) only if you need filters, “featured” logic, or other client-side project state.

## Usage

1. **Provider**: `app/providers.tsx` wraps the app with `AppStoreProvider` and passes `appStore`.
2. **Consume**: In widgets or features, `import { useAppStore } from '../app/store/context'` (or the correct path) and call `const appStore = useAppStore()`. Use `appStore.locale` and `appStore.setLocale(lng)`.
3. **Reactivity**: Wrap components that read observable state with `observer()` from `mobx-react-lite` so they re-render when the store changes (e.g. header language switcher).

## Locale persistence

- **Initial load**: `AppStore` constructor reads `localStorage.getItem(I18N_STORAGE_KEY)` and, if `'en'` or `'ru'`, sets `locale` and `i18n.changeLanguage(stored)`.
- **Switch**: User clicks EN/RU in header → `appStore.setLocale(lng)` → store updates, `i18n.changeLanguage(lng)`, `localStorage.setItem(I18N_STORAGE_KEY, lng)`.
- Ant Design locale is synced via `useTranslation()` in `AntConfigWrapper` (which re-renders when `i18n.language` changes).
