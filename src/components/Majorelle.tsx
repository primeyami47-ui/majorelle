import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { courses, levels, phases } from '../data/site'
import { toneOf } from '../data/tones'
import { Arrow } from './Reveal'
import { LogoMark } from './Logo'
import './Majorelle.css'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* Un pictogramme par langue, fait des formes du jeu de construction. */
function Glyph({ id }: { id: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (id) {
    case 'en': return <svg viewBox="0 0 48 48" className="glyph"><circle cx="20" cy="22" r="12" {...p} /><path d="M24 30 L30 36 L43 20" {...p} /></svg>
    case 'fr': return <svg viewBox="0 0 48 48" className="glyph"><path d="M8 40 V22 A16 16 0 0 1 40 22 V40" {...p} /><path d="M18 40 V28 A6 6 0 0 1 30 28 V40" {...p} /></svg>
    case 'es': return <svg viewBox="0 0 48 48" className="glyph"><circle cx="24" cy="12" r="6" {...p} /><circle cx="11" cy="36" r="6" {...p} /><circle cx="37" cy="36" r="6" {...p} /><path d="M20 17 L14 30 M28 17 L34 30" {...p} /></svg>
    case 'de': return <svg viewBox="0 0 48 48" className="glyph"><rect x="7" y="7" width="14" height="14" rx="3" {...p} /><rect x="27" y="7" width="14" height="14" rx="3" {...p} /><rect x="7" y="27" width="14" height="14" rx="3" {...p} /><circle cx="34" cy="34" r="7" {...p} /></svg>
    default: return <svg viewBox="0 0 48 48" className="glyph"><path d="M6 40 H42" {...p} /><path d="M12 40 V28 M22 40 V16 M32 40 V22" {...p} /><circle cx="38" cy="11" r="5" {...p} /></svg>
  }
}

/* ----------------------------------------------------------- langues ---- */

/**
 * Cinq panneaux, une langue et une couleur chacun. Sur ordinateur, celui
 * qu'on survole (ou qu'on atteint au clavier) s'élargit et dit bonjour ; sur
 * téléphone, c'est un carrousel natif qu'on fait glisser du pouce.
 */
export function ServicePanels() {
  const [on, setOn] = useState(0)
  const track = useRef<HTMLUListElement>(null)
  const [seen, setSeen] = useState(0)

  // Téléphone : le compteur suit la carte visible.
  const onScroll = () => {
    const el = track.current
    if (!el) return
    const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 1
    setSeen(Math.min(courses.length - 1, Math.round(el.scrollLeft / (w + 12))))
  }

  return (
    <div className="pans-wrap">
      <ul className="pans" ref={track} onScroll={onScroll}>
        {courses.map((e, i) => {
          const t = toneOf(e.id)
          return (
            <li key={e.id} className={`pan${on === i ? ' is-on' : ''}`}
                style={{ '--bg': t.bg, '--fg': t.fg, '--duo-a': t.a, '--duo-b': t.b } as CSSProperties}
                onMouseEnter={() => setOn(i)}>
              <a href="#contact" className="pan__in" onFocus={() => setOn(i)}>
                <span className="pan__top">
                  <span className="pan__n t-num">{e.n}</span>
                  <Glyph id={e.id} />
                </span>
                <span className="pan__vert" aria-hidden="true">{e.short}</span>
                <span className="pan__body">
                  <span className="pan__img pan__hello" aria-hidden="true">
                    <span dir={e.rtl ? 'rtl' : undefined}>{e.hello}</span>
                  </span>
                  <span className="pan__title">{e.title}</span>
                  <span className="pan__short">{e.pitch}</span>
                  <span className="pan__go">Réserver un cours d’essai <Arrow /></span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="pans__hint" aria-hidden="true">
        <span className="t-num">{String(seen + 1).padStart(2, '0')} / 0{courses.length}</span>
        <span>Glissez pour voir les cinq langues</span>
        <Arrow />
      </p>
    </div>
  )
}

/* -------------------------------------------------------------- méthode -- */

const STATIONS = [
  { x: 150, y: 78, c: 'var(--saffron)' },
  { x: 450, y: 152, c: 'var(--sky)' },
  { x: 750, y: 78, c: 'var(--pink)' },
  { x: 1050, y: 152, c: 'var(--coral)' },
]
const PATH = 'M-10 120 C 60 120, 90 78, 150 78 S 380 152, 450 152 S 680 78, 750 78 S 980 152, 1050 152 S 1180 116, 1210 110'

/**
 * Les quatre étapes sur un chemin qui se trace dès qu'il paraît ; chaque
 * étape s'allume quand le trait l'atteint. Sur téléphone, le chemin devient une
 * ligne verticale qui se remplit.
 */
export function MethodPath() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (reduced()) { el.classList.add('is-static'); return }
    let ctx: { revert: () => void } | undefined
    let cancelled = false
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      el.classList.add('is-live')
      ctx = gsap.context(() => {
        const steps = gsap.utils.toArray<HTMLElement>('.mp__step')
        // Chaque étape s'allume quand le trait atteint sa pastille.
        const at = STATIONS.map((s) => (s.x + 10) / 1220)
        const light = (p: number) => steps.forEach((s, i) => s.classList.toggle('is-on', p >= at[i]))
        // Téléphone : la ligne est verticale, l'étape s'allume quand le
        // remplissage atteint sa pastille.
        const lightRail = (p: number) => steps.forEach((s, i) => s.classList.toggle('is-on', p >= i / steps.length + 0.02))
        const wide = () => window.matchMedia('(min-width: 761px)').matches
        // Le tracé se joue tout seul dès que le parcours entre à l'écran, et
        // se rembobine si l'on remonte au-dessus, pour rejouer ensuite.
        const ease = gsap.parseEase('power1.inOut')
        const tl = gsap.timeline({
          paused: true,
          onUpdate: () => (wide() ? light : lightRail)(ease(tl.progress())),
        })
        // autoRound: false — le chemin mesure 1 (pathLength) ; arrondi au
        // pixel, le trait sauterait de 1 à 0 au lieu de se tracer.
        tl.fromTo('.mp__line', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.8, ease, autoRound: false }, 0)
        tl.fromTo('.mp__rail i', { scaleY: 0 }, { scaleY: 1, duration: 1.8, ease }, 0)
        ScrollTrigger.create({
          trigger: el, start: wide() ? 'top 75%' : 'top 70%',
          onEnter: () => tl.timeScale(1).play(),
          onLeaveBack: () => tl.timeScale(2).reverse(),
        })
      }, el)
    })()
    return () => { cancelled = true; ctx?.revert() }
  }, [])

  return (
    <div ref={root} className="mp">
      <svg className="mp__svg" viewBox="0 0 1200 230" preserveAspectRatio="none" aria-hidden="true">
        <path d={PATH} className="mp__ghost" pathLength={1} />
        <path d={PATH} className="mp__line" pathLength={1} />
      </svg>
      <div className="mp__rail" aria-hidden="true"><i /></div>
      <ol className="mp__steps">
        {phases.map((p, i) => (
          <li key={p.n} className="mp__step" style={{ '--c': STATIONS[i].c, '--yy': STATIONS[i].y } as CSSProperties}>
            <span className="mp__dot t-num" aria-hidden="true"><span className="mp__num">{p.n}</span></span>
            <span className="mp__label">{p.label}</span>
            <h3 className="mp__title">{p.title}</h3>
            <p className="mp__deliv">{p.deliverable}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ----------------------------------------------------- bandes de niveaux */

/** Deux bandes croisées qui défilent en sens contraires : niveaux et examens. */
export function LevelBands() {
  const codes = levels
  const row = (hidden?: boolean) => (
    <span className="band__row" aria-hidden={hidden || undefined}>
      {codes.map((c) => <span key={c} className="band__item">{c}<LogoMark tone="ink" size={30} className="band__mark" /></span>)}
    </span>
  )
  return (
    <div className="bands">
      <p className="sr">Niveaux et examens préparés : {codes.join(', ')}.</p>
      <div className="band band--a" aria-hidden="true"><div className="band__track">{row()}{row(true)}</div></div>
      <div className="band band--b" aria-hidden="true"><div className="band__track">{row(true)}{row(true)}</div></div>
    </div>
  )
}

/* ---------------------------------------------------------------- sceau -- */

/** Un sceau qui tourne lentement autour de la bulle : « parlez, osez ». */
export function Seal({ className = '' }: { className?: string }) {
  return (
    <div className={`seal ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="seal__ring">
        <defs><path id="seal-c" d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0" /></defs>
        <text><textPath href="#seal-c" textLength="462">PARLEZ · ÉCOUTEZ · OSEZ · PARLEZ · ÉCOUTEZ · OSEZ ·</textPath></text>
      </svg>
      <LogoMark tone="color" size={82} className="seal__mark" />
    </div>
  )
}
