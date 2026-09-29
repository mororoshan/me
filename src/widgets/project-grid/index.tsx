import { projects } from '../../entities/project'
import ProjectCard from '../project-card'

export default function ProjectGrid() {
  return (
    <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
