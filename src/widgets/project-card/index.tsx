import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Card, Tag } from 'antd'
import type { Project } from '../../entities/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()
  const typeLabel = project.type === 'handwritten' ? t('projects.handwritten') : t('projects.vibeCoded')

  return (
    <Card
      title={
        <Link to={`/projects/${project.id}`} style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
          {project.title}
        </Link>
      }
      style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      styles={{ body: { color: 'var(--color-text-secondary)' } }}
    >
      <Tag style={{ marginBottom: 8 }}>{typeLabel}</Tag>
      <p style={{ marginBottom: 12 }}>{project.description}</p>
      {project.tags.length > 0 && (
        <div style={{ marginBottom: 8 }}>
          {project.tags.map((tag) => (
            <Tag key={tag} style={{ marginRight: 4, marginBottom: 4 }}>
              {tag}
            </Tag>
          ))}
        </div>
      )}
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--color-accent)' }}>
          {t('project.link')} →
        </a>
      )}
    </Card>
  )
}
