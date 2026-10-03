import Seo from '../components/Seo'
import Reveal, { Arrow } from '../components/Reveal'
import Figures from '../components/Figures'
import HeroAssemble from '../components/HeroAssemble'
import { LevelBands, MethodPath, Seal, ServicePanels } from '../components/Majorelle'
import { Tick } from '../components/Icons'
import { company, figures, partners, quiz, seo, testimonials } from '../data/site'
import './Home.css'

export default function Home() {
  return (
    <>
      <Seo {...seo.home} />

      {/* ---------------------------------------------------------- hero
          Le bleu Majorelle, une phrase, et les pièces du logo qui
          s'assemblent toutes seules en bulle de dialogue. */}
      <div className="qhero-wrap">
        <section className="qhero">
          <div className="wrap qhero__in">
            <div className="qhero__text">
              <p className="qhero__proof">
                <Tick size={16} draw delay={600} />
                {figures[0].value.toLocaleString('fr-FR')} élèves depuis l’ouverture
              </p>
              <h1 className="qhero__h">
                <span className="ln"><span>Une langue,</span></span>
                <span className="ln"><span>ça se <em>parle.
                  <svg className="qhero__squiggle" viewBox="0 0 200 22" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M4 14 C 30 4, 52 20, 78 11 S 126 3, 150 12 S 186 16, 196 8" pathLength={1} />
                  </svg>
                </em></span></span>
              </h1>
              <p className="qhero__lead">
                Anglais, français, espagnol, allemand, arabe&nbsp;: chez {company.name},
                vous parlez dès la première séance, en petits groupes de six,
                du niveau A1 jusqu’au C2.
              </p>
              <div className="qhero__cta">
                <a href="#test" className="btn btn--sun">Tester mon niveau <Arrow /></a>
                <a href="#langues" className="qhero__alt">Voir les langues <Arrow /></a>
              </div>
              <p className="qhero__note">Test offert · 10 minutes · sans engagement</p>
            </div>
            <div className="qhero__stage">
              <HeroAssemble />
            </div>
          </div>
          <p className="qhero__scroll" aria-hidden="true"><span />Défilez</p>
        </section>
      </div>

      <LevelBands />

      {/* ------------------------------------------------------ confiance */}
      <section className="logos" aria-label="Ils forment leurs équipes chez nous">
        <div className="wrap">
          <p className="logos__h">Ils forment leurs équipes chez nous</p>
          <ul className="partners">
            {partners.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- langues */}
      <section className="sec home-svc" id="langues">
        <div className="wrap">
          <Reveal className="head home-svc__head">
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--saffron)' }}>Nos langues</span>
            <h2 className="t-h2">Cinq langues, cinq couleurs, une&nbsp;seule école.</h2>
          </Reveal>
          <ServicePanels />
          <p className="home-svc__diag">
            Vous ne savez pas par où commencer&nbsp;?{' '}
            <a href="#test" className="link">Tester mon niveau <Arrow /></a>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- méthode */}
      <section className="sec home-method" id="methode">
        <div className="wrap">
          <div className="home-method__head">
            <Reveal className="head">
              <span className="eyebrow" style={{ ['--dot' as string]: 'var(--sky)' }}>Notre méthode</span>
              <h2 className="t-h2">Quatre étapes. Vous parlez dès la&nbsp;première.</h2>
              <p className="t-lead">La même méthode pour toutes les langues&nbsp;: on écoute, on parle, on sort, on valide.</p>
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
            <h2 className="diag__h">Votre niveau&nbsp;?</h2>
            <p className="t-lead">Dix minutes avec un professeur, à l’école ou en visio, et vous savez exactement par où commencer. Offert, sans engagement.</p>
          </Reveal>
          <Reveal delay={80} className="diag__card">
            <div className="diag__bar" aria-hidden="true"><span /></div>
            <p className="diag__step">Question 1 sur 4</p>
            <p className="diag__q">{quiz.title}</p>
            <div className="diag__chips">
              {quiz.choices.map((c) => <a key={c} href="#contact" className="chip">{c}</a>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- avis */}
      <section className="sec home-proof" id="avis">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--pink)' }}>Avis d’élèves</span>
            <h2 className="t-h2">Ils le disent mieux que&nbsp;nous.</h2>
          </Reveal>
          <Reveal><Figures /></Reveal>
          <ul className="quotes">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 80} className={`quote quote--${t.tone}`}>
                <blockquote>« {t.quote} »</blockquote>
                <p className="quote__who"><strong>{t.name}</strong>{t.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------------- fin */}
      <section className="sec home-close" id="contact">
        <div className="wrap">
          <Reveal className="close">
            <div className="close__who" aria-hidden="true">Hi</div>
            <div className="close__text">
              <h2 className="t-h2">Votre premier cours est offert.</h2>
              <p className="t-lead">
                Écrivez-nous&nbsp;: un professeur vous répond sous 24&nbsp;heures
                et fixe votre test de niveau.
              </p>
            </div>
            <div className="close__cta">
              <a href={`mailto:${company.email}`} className="btn btn--primary">Écrire un message <Arrow /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
