import { useTranslation } from 'react-i18next'
import { PageText, PageTitle } from '../../shared/ui'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8">
      <PageTitle>{t('home.title')}</PageTitle>
      <PageText className="text-lg">{t('home.intro')}</PageText>
    </div>
  )
}
