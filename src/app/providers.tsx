import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { ConfigProvider, theme } from 'antd'
import enUS from 'antd/locale/en_US'
import ruRU from 'antd/locale/ru_RU'

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
 * Global providers: Ant Design theme (dark, @theme tokens) and locale (synced with i18n).
 * Router and MobX Provider will be added in later phases.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <AntConfigWrapper>{children}</AntConfigWrapper>
}
