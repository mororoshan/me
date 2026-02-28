import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Typography, Tag, Button } from 'antd'
import { projects } from '../../entities/project'

const { Title, Paragraph } = Typography

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  const project = id ? projects.find((p) => p.id === id) : null

  if (!id || !project) {
    return <Navigate to="/projects" replace />
  }

  const typeLabel = project.type === 'handwritten' ? t('projects.handwritten') : t('projects.vibeCoded')

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/projects">
        <Button type="link" style={{ marginBottom: 16, padding: 0 }}>
          ← {t('project.backToProjects')}
        </Button>
      </Link>
      <Title level={1} style={{ marginBottom: 8 }}>
        {project.title}
      </Title>
      <Tag style={{ marginBottom: 16 }}>{typeLabel}</Tag>
      <Paragraph style={{ color: 'var(--color-text-secondary)', marginBottom: 16 }}>
        {project.description}
      </Paragraph>
      {project.tags.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <span style={{ color: 'var(--color-text-tertiary)', marginRight: 8 }}>{t('project.tags')}:</span>
          {project.tags.map((tag) => (
            <Tag key={tag} style={{ marginRight: 4, marginBottom: 4 }}>
              {tag}
            </Tag>
          ))}
        </div>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--color-accent)' }}
        >
          {t('project.link')} →
        </a>
      )}
    </div>
  )
}
