import { useTranslation } from 'react-i18next'

export default function ProjectsPage() {
  const { t } = useTranslation()
  return <h1>{t('projects.title')}</h1>
}
