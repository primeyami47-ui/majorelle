import { Link } from 'react-router'
import Seo from '../components/Seo'
import { Arrow } from '../components/Reveal'
import { useContent } from '../content'
import { homeOf, useLang } from '../i18n'

export default function NotFound() {
  const t = useContent()
  return (
    <section className="sec nf">
      <Seo {...t.seo.notFound} />
      <div className="wrap head">
        <span className="eyebrow">{t.notFound.eyebrow}</span>
        <h1 className="t-h2">{t.notFound.title}</h1>
        <p className="t-lead">{t.notFound.lead}</p>
        <p><Link to={homeOf(useLang())} className="btn btn--primary">{t.notFound.cta} <Arrow /></Link></p>
      </div>
    </section>
  )
}
