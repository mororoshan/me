/**
 * Project entity – used by pages and widgets for listing and detail views.
 */
export type ProjectType = 'handwritten' | 'vibe-coded'

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  type: ProjectType
}
