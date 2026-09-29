import type { ReactNode } from 'react'
import { AppStoreProvider } from './store/context'
import { appStore } from './store/appStore'

/**
 * Global providers: AppStore (MobX).
 */
export function Providers({ children }: { children: ReactNode }) {
  return <AppStoreProvider store={appStore}>{children}</AppStoreProvider>
}
