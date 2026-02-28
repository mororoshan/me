import { makeAutoObservable } from 'mobx'
import { i18n, I18N_STORAGE_KEY } from '../../shared/i18n'

export type Locale = 'en' | 'ru'

/**
 * App-level UI state: locale and any future theme/sidebar state.
 * Locale is persisted to localStorage and synced with i18n.
 */
export class AppStore {
  locale: Locale = 'en'

  constructor() {
    makeAutoObservable(this)
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(I18N_STORAGE_KEY) as Locale | null
      if (stored === 'en' || stored === 'ru') {
        this.locale = stored
        i18n.changeLanguage(stored)
      }
    }
  }

  setLocale(lng: Locale) {
    this.locale = lng
    i18n.changeLanguage(lng)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(I18N_STORAGE_KEY, lng)
    }
  }
}

export const appStore = new AppStore()
