/* Build-time entry only — never hot-reloaded, so the fast-refresh rule does not apply. */
/* eslint-disable react/only-export-components */
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import AppRoutes from './routes'
import { content } from './content'
import { dirOf, LANGS } from './i18n'
export { brand } from './brand'

/** Pages written by the prerenderer: the home page in each language, and the 404. */
export const PAGES = [
  ...LANGS.map((lang) => ({
    lang, dir: dirOf(lang), url: lang === 'fr' ? '/' : `/${lang}`,
    file: lang === 'fr' ? 'index.html' : `${lang}/index.html`, home: true,
    locale: { fr: 'fr_MA', en: 'en_GB', ar: 'ar_MA' }[lang], ...content[lang].seo.home,
  })),
  { lang: 'fr', dir: 'ltr', url: '/404', file: '404.html', home: false, locale: 'fr_MA', ...content.fr.seo.notFound },
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
