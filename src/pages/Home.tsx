import Seo from '../components/Seo'
import Reveal, { Arrow } from '../components/Reveal'
import Figures from '../components/Figures'
import HeroAssemble from '../components/HeroAssemble'
import { LevelBands, MethodPath, Seal, ServicePanels } from '../components/Majorelle'
import { Tick } from '../components/Icons'
import { useContent } from '../content'
import { LOCALES, useLang } from '../i18n'
import './Home.css'

export default function Home() {
  const t = useContent()
  const lang = useLang()
  return (
    <>
      <Seo {...t.seo.home} />

      {/* ---------------------------------------------------------- hero
          Le bleu Majorelle, une phrase, et les pièces du logo qui
          s'assemblent toutes seules en K. */}
      <div className="qhero-wrap">
        <section className="qhero">
          <div className="wrap qhero__in">
            <div className="qhero__text">
              <p className="qhero__proof">
                <Tick size={16} draw delay={600} />
                {t.hero.proof.replace('{n}', t.reviews.figures[0].value.toLocaleString(LOCALES[lang]))}
              </p>
              <h1 className="qhero__h">
                <span className="ln"><span>{t.hero.line1}</span></span>
                <span className="ln"><span>{t.hero.line2a}<em>{t.hero.line2b}
                  <svg className="qhero__squiggle" viewBox="0 0 200 22" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M4 14 C 30 4, 52 20, 78 11 S 126 3, 150 12 S 186 16, 196 8" pathLength={1} />
                  </svg>
                </em></span></span>
              </h1>
              <p className="qhero__lead">{t.hero.lead}</p>
              <div className="qhero__cta">
                <a href="#test" className="btn btn--sun">{t.ui.cta} <Arrow /></a>
                <a href="#langues" className="qhero__alt">{t.hero.alt} <Arrow /></a>
              </div>
              <p className="qhero__note">{t.hero.note}</p>
            </div>
            <div className="qhero__stage">
              <HeroAssemble />
            </div>
          </div>
          <p className="qhero__scroll" aria-hidden="true"><span />{t.ui.scroll}</p>
        </section>
      </div>

      <LevelBands />

      {/* ------------------------------------------------------ confiance */}
      <section className="logos" aria-label={t.partnersTitle}>
        <div className="wrap">
          <p className="logos__h">{t.partnersTitle}</p>
          <ul className="partners">
            {t.partners.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- langues */}
      <section className="sec home-svc" id="langues">
        <div className="wrap">
          <Reveal className="head home-svc__head">
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--saffron)' }}>{t.courses.eyebrow}</span>
            <h2 className="t-h2">{t.courses.title}</h2>
          </Reveal>
          <ServicePanels />
          <p className="home-svc__diag">
            {t.courses.unsure}{' '}
            <a href="#test" className="link">{t.ui.cta} <Arrow /></a>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- méthode */}
      <section className="sec home-method" id="methode">
        <div className="wrap">
          <div className="home-method__head">
            <Reveal className="head">
              <span className="eyebrow" style={{ ['--dot' as string]: 'var(--sky)' }}>{t.method.eyebrow}</span>
              <h2 className="t-h2">{t.method.title}</h2>
              <p className="t-lead">{t.method.lead}</p>
            </Reveal>
            <Seal className="home-method__seal" />
          </div>
          <MethodPath />
        </div>
      </section>

      {/* ------------------------------------------------------------ test */}
      <section className="diag" id="test">
        <div className="wrap diag__in">
          <Reveal className="diag__text">
            <h2 className="diag__h">{t.test.title}</h2>
            <p className="t-lead">{t.test.lead}</p>
          </Reveal>
          <Reveal delay={80} className="diag__card">
            <div className="diag__bar" aria-hidden="true"><span /></div>
            <p className="diag__step">{t.test.step}</p>
            <p className="diag__q">{t.test.question}</p>
            <div className="diag__chips">
              {t.test.choices.map((c) => <a key={c} href="#contact" className="chip">{c}</a>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- avis */}
      <section className="sec home-proof" id="avis">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--pink)' }}>{t.reviews.eyebrow}</span>
            <h2 className="t-h2">{t.reviews.title}</h2>
          </Reveal>
          <Reveal><Figures /></Reveal>
          <ul className="quotes">
            {t.reviews.list.map((r, i) => (
              <Reveal as="li" key={r.name} delay={i * 80} className={`quote quote--${r.tone}`}>
                <blockquote>{lang === 'fr' ? `« ${r.quote} »` : lang === 'ar' ? `«${r.quote}»` : `“${r.quote}”`}</blockquote>
                <p className="quote__who"><strong>{r.name}</strong>{r.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------------- fin */}
      <section className="sec home-close" id="contact">
        <div className="wrap">
          <Reveal className="close">
            <div className="close__who" aria-hidden="true">{t.close.who}</div>
            <div className="close__text">
              <h2 className="t-h2">{t.close.title}</h2>
              <p className="t-lead">{t.close.lead}</p>
            </div>
            <div className="close__cta">
              <a href={`mailto:${t.company.email}`} className="btn btn--primary">{t.close.cta} <Arrow /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
