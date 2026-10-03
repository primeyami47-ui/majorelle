import { useEffect, useRef, useState } from 'react'
import { figures } from '../data/site'
import './Figures.css'

/**
 * Compte jusqu'à la valeur à l'entrée dans l'écran.
 *
 * Le HTML pré-rendu porte déjà la valeur finale : sans JavaScript, ou pour
 * un robot, le chiffre est juste. Le compteur ne part de zéro que si le bloc
 * n'est pas encore visible, pour ne jamais faire reculer un chiffre déjà lu.
 */
function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(to)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setN(0)
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1100)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to])

  return <span ref={ref}>{n.toLocaleString('fr-FR')}</span>
}

export default function Figures() {
  return (
    <dl className="figs">
      {figures.map((f) => (
        <div key={f.label} className="figs__item">
          <dt className="figs__label">{f.label}</dt>
          <dd className="figs__value t-num">
            <Count to={f.value} />{f.unit}
          </dd>
        </div>
      ))}
    </dl>
  )
}
