import { useLayoutEffect, useRef } from 'react'
import './HeroAssemble.css'

/* ------------------------------------------------------------------------
   Les pièces du logo. Même repère que Logo.tsx : anneau de centre (42, 44),
   rayon 29 ; coche M54 62 L71 79 L104 42. L'anneau est coupé en quatre
   quarts (un degré de recouvrement pour qu'aucun filet ne se voie une fois
   assemblé), la coche en ses deux traits.
   ------------------------------------------------------------------------ */
const CX = 42, CY = 44, R = 29
const pt = (deg: number) => {
  const a = (deg * Math.PI) / 180
  return `${(CX + R * Math.cos(a)).toFixed(2)} ${(CY + R * Math.sin(a)).toFixed(2)}`
}
const arc = (a0: number, a1: number) => `M${pt(a0 - 0.6)} A${R} ${R} 0 0 1 ${pt(a1 + 0.6)}`
const mid = (a0: number, a1: number) => {
  const a = (((a0 + a1) / 2) * Math.PI) / 180
  return [CX + R * Math.cos(a), CY + R * Math.sin(a)] as const
}

interface Piece {
  d: string
  kind: 'ring' | 'tick'
  c: readonly [number, number]      // centre de rotation
  from: [number, number, number]    // dispersion : dx, dy, rotation
  color: string                     // couleur une fois dispersée
}

const PIECES: Piece[] = [
  { d: arc(-135, -45), kind: 'ring', c: mid(-135, -45), from: [-42, -34, -55], color: '#FFC531' },
  { d: arc(-45, 45),   kind: 'ring', c: mid(-45, 45),   from: [62, -30, 70],   color: '#FF9EC4' },
  { d: arc(45, 135),   kind: 'ring', c: mid(45, 135),   from: [-6, 48, -35],   color: '#8CCBFF' },
  { d: arc(135, 225),  kind: 'ring', c: mid(135, 225),  from: [-66, 14, 45],   color: '#FFFFFF' },
  { d: 'M54 62 L71 79', kind: 'tick', c: [62.5, 70.5],  from: [30, 40, 115],   color: '#FF5B3A' },
  { d: 'M71 79 L104 42', kind: 'tick', c: [87.5, 60.5], from: [52, -18, -65],  color: '#FF5B3A' },
]
const DONE = { ring: '#FFFFFF', tick: '#FFC531' }

/* Formes libres du jeu de construction : elles entourent les pièces puis
   s'écartent quand le logo se forme. */
const CONFETTI = [
  { k: 'disc', x: 150, y: 16, s: 1, color: '#FFC531', depth: 1.6 },
  { k: 'arch', x: -46, y: 92, s: 1, color: '#FF9EC4', depth: 1.2 },
  { k: 'half', x: 160, y: 108, s: 1, color: '#8CCBFF', depth: 0.8 },
  { k: 'dot', x: -30, y: -22, s: 1, color: '#FF5B3A', depth: 2 },
  { k: 'ring', x: 122, y: -26, s: 1, color: '#FFFFFF', depth: 1.4 },
  { k: 'dot', x: 20, y: 122, s: 0.7, color: '#FFC531', depth: 1.8 },
] as const

function Confetti({ k, color }: { k: string; color: string }) {
  switch (k) {
    case 'disc': return <circle r="10" fill={color} />
    case 'arch': return <path d="M-11 14 V0 A11 11 0 0 1 11 0 V14 Z" fill={color} />
    case 'half': return <path d="M-12 0 A12 12 0 0 1 12 0 Z" fill={color} />
    case 'ring': return <circle r="6" fill="none" stroke={color} strokeWidth="3.5" />
    default: return <circle r="4" fill={color} />
  }
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * Le hero : les pièces du logo, dispersées et de toutes les couleurs,
 * s'assemblent en bulle de dialogue cochée dès l'arrivée. Parler, c'est quand
 * tout s'emboîte.
 *
 * Rendu serveur : pièces dispersées (c'est déjà une image). Avec « réduire
 * les animations », le logo s'affiche directement assemblé.
 */
export default function HeroAssemble() {
  const stage = useRef<SVGSVGElement>(null)

  useLayoutEffect(() => {
    const svg = stage.current
    if (!svg) return
    const pieces = [...svg.querySelectorAll<SVGGElement>('[data-piece]')]
    const confetti = [...svg.querySelectorAll<SVGGElement>('[data-confetti]')]

    // Applique l'état d'assemblage p (0 = dispersé, 1 = logo).
    const lerpColor = (a: string, b: string, t: number) => {
      const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16))
      const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16))
      return `rgb(${pa.map((v, i) => Math.round(v + (pb[i] - v) * t)).join(',')})`
    }
    const apply = (p: number) => {
      pieces.forEach((g) => {
        const i = Number(g.dataset.piece)
        const piece = PIECES[i]
        // Départs échelonnés : chaque pièce arrive à son tour.
        const e = easeOut(clamp01((p - i * 0.07) / 0.58))
        const [dx, dy, r] = piece.from
        const k = 1 - e
        g.setAttribute('transform', `translate(${(dx * k).toFixed(2)} ${(dy * k).toFixed(2)}) rotate(${(r * k).toFixed(1)} ${piece.c[0].toFixed(1)} ${piece.c[1].toFixed(1)})`)
        g.querySelector('.hp__stroke')?.setAttribute('stroke', lerpColor(piece.color, DONE[piece.kind], clamp01((e - 0.55) / 0.45)))
      })
      confetti.forEach((g, i) => {
        const c = CONFETTI[i]
        const e = easeOut(clamp01((p - 0.05) / 0.6))
        const ox = (c.x - 58) * e * 0.9, oy = (c.y - 46) * e * 0.9
        g.setAttribute('transform', `translate(${(c.x + ox).toFixed(1)} ${(c.y + oy).toFixed(1)}) scale(${(c.s * (1 - e)).toFixed(3)})`)
      })
      svg.style.setProperty('--bob', String(1 - clamp01(p * 1.6)))
      svg.classList.toggle('is-done', p > 0.97)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { apply(1); return }

    let ctx: { revert: () => void } | undefined
    let cancelled = false
    let offPointer = () => {}
    let offIo = () => {}
    ;(async () => {
      const { gsap } = await import('gsap')
      if (cancelled) return

      // L'assemblage se joue tout seul, sans défiler : dès l'arrivée sur
      // grand écran, dès que la scène paraît sur téléphone.
      const state = { p: 0 }
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        ctx = gsap.context(() => {
          gsap.to(state, { p: 1, duration: 2.6, delay: 0.4, ease: 'power1.inOut', onUpdate: () => apply(state.p) })
        }, svg)
      }, { threshold: 0.6 })
      io.observe(svg)
      offIo = () => io.disconnect()

      // Souris : chaque couche glisse selon sa profondeur (parallaxe).
      if (window.matchMedia('(pointer: fine)').matches) {
        const layers = [...svg.querySelectorAll<SVGGElement>('[data-depth]')].map((el) => ({
          el, d: Number(el.dataset.depth),
          x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3' }),
          y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3' }),
        }))
        const move = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5, ny = e.clientY / window.innerHeight - 0.5
          layers.forEach((l) => { l.x(nx * 10 * l.d); l.y(ny * 8 * l.d) })
        }
        window.addEventListener('pointermove', move, { passive: true })
        offPointer = () => window.removeEventListener('pointermove', move)
      }
    })()

    return () => { cancelled = true; offIo(); offPointer(); ctx?.revert() }
  }, [])

  return (
    <svg ref={stage} className="hp" viewBox="-70 -46 256 180" role="img"
         aria-label="Les pièces du logo Kalima, dispersées, qui s'assemblent en une bulle de dialogue dont la queue est une coche">
      {CONFETTI.map((c, i) => (
        <g key={`c${i}`} data-depth={c.depth}>
          <g className="hp__bob" style={{ ['--bd' as string]: `${i * -0.7}s` }}>
            <g data-confetti transform={`translate(${c.x} ${c.y}) scale(${c.s})`}>
              <Confetti k={c.k} color={c.color} />
            </g>
          </g>
        </g>
      ))}
      {/* Trois passes : l'anneau, puis les filets couleur du fond sous la
          coche (ils la détachent de l'anneau au croisement, comme sur le
          logo), puis les traits de la coche. Dessiner filet et trait pièce
          par pièce creuserait une encoche au coin de la coche. */}
      {(['ring', 'gap', 'tick'] as const).map((pass) =>
        PIECES.map((p, i) => {
          if (pass === 'ring' ? p.kind !== 'ring' : p.kind !== 'tick') return null
          return (
            <g key={`${pass}${i}`} data-depth={0.5 + (i % 3) * 0.3}>
              <g className="hp__bob" style={{ ['--bd' as string]: `${i * -0.9}s` }}>
                <g data-piece={i} transform={`translate(${p.from[0]} ${p.from[1]}) rotate(${p.from[2]} ${p.c[0].toFixed(1)} ${p.c[1].toFixed(1)})`}>
                  {pass === 'gap'
                    ? <path d={p.d} stroke="var(--cobalt)" strokeWidth="23" strokeLinecap="round" fill="none" />
                    : <path className="hp__stroke" d={p.d} stroke={p.color} strokeWidth={p.kind === 'ring' ? 17 : 15}
                            strokeLinecap={p.kind === 'ring' ? 'butt' : 'round'} fill="none" />}
                </g>
              </g>
            </g>
          )
        }),
      )}
    </svg>
  )
}
