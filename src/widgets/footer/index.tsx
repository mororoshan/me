import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="p-4 border-t border-border text-text-secondary text-sm text-center shrink-0">
      {t('common.copyright')}
    </footer>
  )
}
