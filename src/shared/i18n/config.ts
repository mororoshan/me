import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * i18n config – init before React so useTranslation() works.
 * Not wired into the app until Phase 4.
 */
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        common: { appName: 'Portfolio' },
      },
    },
    ru: {
      translation: {
        common: { appName: 'Портфолио' },
      },
    },
  },
})

export { i18n }
