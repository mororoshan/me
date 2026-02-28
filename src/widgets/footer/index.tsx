import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer
      style={{
        marginTop: 32,
        padding: '16px',
        borderTop: '1px solid var(--color-border)',
        color: 'var(--color-text-secondary)',
        fontSize: '0.875rem',
        textAlign: 'center',
      }}
    >
      {t('common.copyright')}
    </footer>
  )
}
