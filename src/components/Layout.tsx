import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import type Lenis from 'lenis'
import { company, courses } from '../data/site'
import { Arrow } from './Reveal'
import Logo, { LogoMark } from './Logo'
import './Layout.css'

// Quatre destinations, pas plus : les sections de la page. Chaque rubrique a
// sa couleur, reprise dans le menu mobile.
const nav = [
  { to: '#langues', label: 'Langues', dot: 'var(--saffron)' },
  { to: '#methode', label: 'Méthode', dot: 'var(--sky)' },
  { to: '#avis', label: 'Avis', dot: 'var(--pink)' },
  { to: '#contact', label: 'Contact', dot: 'var(--coral)' },
]

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Layout() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const lenis = useRef<Lenis | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Sur l'accueil, l'en-tête se pose, transparent, sur le hero bleu ; il
  // devient blanc dès qu'on défile. Ailleurs il est blanc d'emblée.
  const over = pathname === '/' && !stuck && !open

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Défilement doux (Lenis) cadencé par GSAP ; au doigt, Lenis laisse le
  // défilement natif du téléphone. Coupé avec « réduire les animations ».
  useEffect(() => {
    if (reduced()) return
    let stop = () => {}
    let cancelled = false
    ;(async () => {
      const [{ default: LenisCtor }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'), import('gsap'), import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      const l = new LenisCtor({ lerp: 0.1, anchors: true })
      l.on('scroll', ScrollTrigger.update)
      const tick = (t: number) => l.raf(t * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      lenis.current = l
      stop = () => { gsap.ticker.remove(tick); l.destroy(); lenis.current = null }
    })()
    return () => { cancelled = true; stop() }
  }, [])

  // Menu ouvert : la page ne défile plus, Échap le ferme, le focus y entre.
  useEffect(() => {
    if (!open) return
    lenis.current?.stop()
    document.documentElement.classList.add('menu-open')
    menuRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      lenis.current?.start()
      document.documentElement.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <>
      <a className="skip" href="#main">Aller au contenu</a>

      <header className={`hdr${stuck ? ' hdr--stuck' : ''}${over ? ' hdr--over' : ''}${open ? ' hdr--open' : ''}`}>
        <div className="hdr__in wrap">
          <Link to="/" className="hdr__brand" aria-label={`${company.name}, accueil`} onClick={() => setOpen(false)}>
            <Logo tone={over || open ? 'reverse' : 'color'} size={46} draw />
          </Link>

          <nav className="hdr__nav" aria-label="Navigation principale">
            {nav.map((n) => (
              <a key={n.to} href={n.to} style={{ ['--dot' as string]: n.dot }} className="hdr__link">
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#test" className={`btn ${over ? 'btn--sun' : 'btn--primary'} hdr__cta`}>
            Tester mon niveau <Arrow />
          </a>

          <button className="hdr__burger" aria-expanded={open} aria-controls="menu"
                  aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                  onClick={() => setOpen((v) => !v)}>
            <span /><span />
          </button>
        </div>
      </header>

      {/* Menu mobile : plein écran, de très grands liens, une couleur chacun. */}
      <div id="menu" ref={menuRef} className={`menu${open ? ' is-open' : ''}`} inert={!open}>
        <nav className="menu__nav wrap" aria-label="Menu">
          {nav.map((n, i) => (
            <a key={n.to} href={n.to} onClick={() => setOpen(false)}
               style={{ ['--dot' as string]: n.dot, ['--i' as string]: i }} className="menu__link">
              <span>{n.label}</span>
            </a>
          ))}
          <a href="#test" onClick={() => setOpen(false)} className="btn btn--sun menu__cta" style={{ ['--i' as string]: 4 }}>
            Tester mon niveau <Arrow />
          </a>
          <div className="menu__contact" style={{ ['--i' as string]: 5 }}>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.hours}</span>
          </div>
        </nav>
      </div>

      <main id="main"><Outlet /></main>

      <footer className="ftr">
        <div className="wrap ftr__top">
          <p className="ftr__line">
            Une langue,<br /><span>ça se parle.</span>
          </p>
          <a href="#test" className="btn btn--sun">Tester mon niveau <Arrow /></a>
        </div>

        <div className="wrap ftr__in">
          <div className="ftr__brand">
            <Logo tone="white" size={44} />
            <p>
              École de langues en petits groupes : anglais, français, espagnol,
              allemand, arabe et darija. Marrakech, Maroc.
            </p>
          </div>

          <div className="ftr__col">
            <h2>Langues</h2>
            {courses.map((c) => <a key={c.id} href="#langues">{c.title}</a>)}
          </div>

          <div className="ftr__col">
            <h2>L’école</h2>
            <a href="#methode">Notre méthode</a>
            <a href="#avis">Avis d’élèves</a>
            <a href="#test">Test de niveau</a>
            <a href="#contact">Nous écrire</a>
          </div>

          <div className="ftr__col">
            <h2>Contact</h2>
            <address>{company.address.map((l) => <span key={l}>{l}</span>)}</address>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.hours}</span>
          </div>
        </div>

        <div className="wrap ftr__bar">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span className="ftr__demo">Marque fictive · site vitrine de démonstration</span>
        </div>

        {/* Le nom en très grand, coupé par le bas de page : la signature. */}
        <div className="ftr__giant" aria-hidden="true">
          <LogoMark tone="white" size={420} className="ftr__giant-mark" />
          <span>kalima</span>
        </div>
      </footer>
    </>
  )
}
