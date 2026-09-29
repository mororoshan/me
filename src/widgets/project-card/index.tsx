import { useTranslation } from 'react-i18next'
import type { Project } from '../../entities/project'
import { Link, Tag } from '../../shared/ui'

interface ProjectCardProps {
  project: Project
}

const externalLinkClass = 'font-medium text-accent no-underline hover:text-accent-hover'

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()
  const typeLabel = project.type === 'handwritten' ? t('projects.handwritten') : t('projects.vibeCoded')

  return (
    <article className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-4">
      <h2 className="m-0 text-base font-semibold">
        <Link to={`/projects/${project.id}`}>{project.title}</Link>
      </h2>
      <div>
        <Tag>{typeLabel}</Tag>
      </div>
      <p className="m-0 text-text-secondary">{project.description}</p>
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
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
    </article>
  )
}
