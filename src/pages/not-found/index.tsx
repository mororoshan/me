import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1>{t('notFound.title')}</h1>
      <p style={{ color: 'var(--color-text-secondary)' }}>{t('notFound.message')}</p>
    </div>
  )
}
