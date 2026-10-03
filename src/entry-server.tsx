/* Build-time entry only — never hot-reloaded, so the fast-refresh rule does not apply. */
/* eslint-disable react/only-export-components */
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import AppRoutes from './routes'
import { seo } from './data/site'
export { brand } from './brand'

/** Pages written by the prerenderer: the home page and the 404. */
export const PAGES = [
  { url: '/', file: 'index.html', ...seo.home },
  { url: '/404', file: '404.html', ...seo.notFound },
]

/** Renders one route to HTML at build time. */
export function render(url: string) {
  const base = import.meta.env.BASE_URL
  return renderToString(
    <StaticRouter basename={base} location={base.replace(/\/$/, '') + url}>
      <AppRoutes />
    </StaticRouter>,
  )
}
