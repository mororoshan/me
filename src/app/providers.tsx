import type { ReactNode } from 'react'
import { ConfigProvider, theme } from 'antd'

/**
 * Global providers: Ant Design theme (dark, @theme tokens).
 * Router and MobX Provider will be added in later phases.
 */
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

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={antTheme}>
      {children}
    </ConfigProvider>
  )
}
