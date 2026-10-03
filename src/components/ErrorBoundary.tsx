import { Component, type ReactNode } from 'react'
import { content } from '../content'
import { langFromPath } from '../i18n'

/** Without this, a single render error leaves the visitor a blank page.
    They at least get a way to reach the school. */
export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: Error) {
    console.error('Render error:', error)
  }

  render() {
    if (!this.state.failed) return this.props.children
    // En dehors du routeur : la langue se lit directement dans l'adresse.
    const t = content[langFromPath(location.pathname.slice(import.meta.env.BASE_URL.length - 1))]
    return (
      <section className="sec">
        <div className="wrap-tight" style={{ textAlign: 'center' }}>
          <h1 className="t-h2" style={{ margin: '0 auto 1rem' }}>
            {t.error.title}
          </h1>
          <p className="t-lead" style={{ margin: '0 auto 2rem' }}>
            {t.error.lead}{' '}
            <a href={`mailto:${t.company.email}`}>{t.company.email}</a>.
          </p>
          <button className="btn btn--primary" onClick={() => window.location.reload()}>
            {t.error.reload}
          </button>
        </div>
      </section>
    )
  }
}
