import type { Project } from './types'

/**
 * Hardcoded project list for use by pages and widgets.
 * IDs are stable and suitable for routing (e.g. /projects/project-1).
 */
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Portfolio site',
    description: 'This portfolio app built with React, Vite, and FSD.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    link: 'https://github.com/example/portfolio_project',
    type: 'vibe-coded',
  },
  {
    id: 'project-2',
    title: 'CLI tool',
    description: 'A small command-line utility for local development.',
    tags: ['Node.js', 'TypeScript'],
    type: 'handwritten',
  },
  {
    id: 'project-3',
    title: 'API client library',
    description: 'Typed client for a REST API with retries and caching.',
    tags: ['TypeScript', 'Fetch'],
    link: 'https://github.com/example/api-client',
    type: 'handwritten',
  },
  {
    id: 'project-4',
    title: 'Landing page',
    description: 'Single-page marketing site with dark theme and animations.',
    tags: ['React', 'CSS'],
    type: 'vibe-coded',
  },
]
