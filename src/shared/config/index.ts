/**
 * App config – base path and other shared settings.
 * basePath must match Vite config `base` and the GitHub Pages repo path
 * so that the router and asset URLs resolve correctly.
 */
export const config = {
  /** Base path for the app (router basename and asset base). Must match Vite `base` and GitHub Pages repo. */
  basePath: '/portfolio_project/',
} as const

export type Config = typeof config
