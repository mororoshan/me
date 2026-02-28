import { createContext, useContext, type ReactNode } from 'react'
import type { AppStore } from './appStore'

const AppStoreContext = createContext<AppStore | null>(null)

export function AppStoreProvider({ store, children }: { store: AppStore; children: ReactNode }) {
  return (
    <AppStoreContext.Provider value={store}>
      {children}
    </AppStoreContext.Provider>
  )
}

export function useAppStore(): AppStore {
  const store = useContext(AppStoreContext)
  if (!store) throw new Error('useAppStore must be used within AppStoreProvider')
  return store
}
