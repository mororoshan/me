import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../shared/ui'
import ProjectGrid from '../../widgets/project-grid'

export default function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8">
      <PageTitle>{t('projects.title')}</PageTitle>
      <ProjectGrid />
    </div>
  )
}
