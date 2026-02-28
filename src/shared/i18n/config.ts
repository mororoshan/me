import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ru from './locales/ru.json'

const STORAGE_KEY = 'portfolio_lang'

function getInitialLanguage(): 'en' | 'ru' {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ru' || stored === 'en') return stored
  return 'en'
}

/**
 * i18n config – import this before React so useTranslation() works.
 * Initial language is read from localStorage when available.
 */
i18n.use(initReactI18next).init({
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  resources: {
    en: { translation: en as Record<string, unknown> },
    ru: { translation: ru as Record<string, unknown> },
  },
})

export { i18n }
export { STORAGE_KEY as I18N_STORAGE_KEY }
