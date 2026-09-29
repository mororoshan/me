import { useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../../entities/project'
import { Link, PageText, PageTitle, Tag } from '../../shared/ui'

const externalLinkClass = 'font-medium text-accent no-underline hover:text-accent-hover'

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  const project = id ? projects.find((p) => p.id === id) : null

  if (!id || !project) {
    return <Navigate to="/projects" replace />
  }

  const typeLabel = project.type === 'handwritten' ? t('projects.handwritten') : t('projects.vibeCoded')

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8">
      <Link to="/projects">← {t('project.backToProjects')}</Link>
      <PageTitle>{project.title}</PageTitle>
      <div>
        <Tag>{typeLabel}</Tag>
      </div>
      <PageText>{project.description}</PageText>
      {project.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-1">
          <span className="mr-1 text-text-tertiary">{t('project.tags')}:</span>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
          {t('project.link')} →
        </a>
      )}
    </div>
  )
}
