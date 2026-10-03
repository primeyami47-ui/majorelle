import { Component, type ReactNode } from 'react'
import { company } from '../data/site'

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
    return (
      <section className="sec">
        <div className="wrap-tight" style={{ textAlign: 'center' }}>
          <h1 className="t-h2" style={{ margin: '0 auto 1rem' }}>
            Une erreur est survenue
          </h1>
          <p className="t-lead" style={{ margin: '0 auto 2rem' }}>
            Rechargez la page. Si le problème persiste, écrivez-nous à{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
          <button className="btn btn--primary" onClick={() => window.location.reload()}>
            Recharger la page
          </button>
        </div>
      </section>
    )
  }
}
