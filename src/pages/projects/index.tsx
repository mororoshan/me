import { useTranslation } from 'react-i18next'
import { Typography } from 'antd'
import ProjectGrid from '../../widgets/project-grid'

const { Title } = Typography

export default function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Title level={1} style={{ marginBottom: 24 }}>
        {t('projects.title')}
      </Title>
      <ProjectGrid />
    </div>
  )
}
