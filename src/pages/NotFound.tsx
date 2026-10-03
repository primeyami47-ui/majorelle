import { Link } from 'react-router'
import Seo from '../components/Seo'
import { Arrow } from '../components/Reveal'
import { seo } from '../data/site'

export default function NotFound() {
  return (
    <section className="sec nf">
      <Seo {...seo.notFound} />
      <div className="wrap head">
        <span className="eyebrow">Erreur 404</span>
        <h1 className="t-h2">Cette page ne parle aucune de nos langues.</h1>
        <p className="t-lead">Elle n’existe pas, ou elle a déménagé.</p>
        <p><Link to="/" className="btn btn--primary">Retour à l’accueil <Arrow /></Link></p>
      </div>
    </section>
  )
}
