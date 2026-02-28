import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { ConfigProvider, theme } from 'antd'
import enUS from 'antd/locale/en_US'
import ruRU from 'antd/locale/ru_RU'
import { AppStoreProvider } from './store/context'
import { appStore } from './store/appStore'

const antTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgContainer: 'var(--color-surface)',
    colorBgElevated: 'var(--color-surface-elevated)',
    colorBorder: 'var(--color-border)',
    colorPrimary: 'var(--color-accent)',
    colorPrimaryHover: 'var(--color-accent-hover)',
    colorText: 'var(--color-text-primary)',
    colorTextSecondary: 'var(--color-text-secondary)',
    colorIcon: 'var(--color-icon)',
    colorIconHover: 'var(--color-icon-active)',
  },
}

function AntConfigWrapper({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()
  const locale = i18n.language === 'ru' ? ruRU : enUS

  return (
    <ConfigProvider theme={antTheme} locale={locale}>
      {children}
    </ConfigProvider>
  )
}

/**
 * Global providers: AppStore (MobX), Ant Design theme and locale.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppStoreProvider store={appStore}>
      <AntConfigWrapper>{children}</AntConfigWrapper>
    </AppStoreProvider>
  )
}

