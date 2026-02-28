import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { config } from '../shared/config'
import Layout from './layout'

const HomePage = lazy(() => import('../pages/home'))
const ProjectsPage = lazy(() => import('../pages/projects'))
const ProjectPage = lazy(() => import('../pages/project'))
const NotFoundPage = lazy(() => import('../pages/not-found'))

const fallback = <div style={{ padding: '1rem' }}>Loading…</div>

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Suspense fallback={fallback}><HomePage /></Suspense> },
        { path: 'projects', element: <Suspense fallback={fallback}><ProjectsPage /></Suspense> },
        { path: 'projects/:id', element: <Suspense fallback={fallback}><ProjectPage /></Suspense> },
      ],
    },
    { path: '*', element: <Suspense fallback={fallback}><NotFoundPage /></Suspense> },
  ],
  { basename: config.basePath.replace(/\/$/, '') }
)
