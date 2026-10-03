/**
 * Le logo Kalima : une bulle de dialogue dont la queue est une coche.
 * Parler (la bulle) et réussir (✓) dans un même signe.
 *
 * Construction (repère 112 × 100, cadré au plus près) : anneau de rayon 29,
 * épaisseur 17 ; coche épaisseur 15, bouts ronds. Un filet de la couleur du
 * fond (--gap) détache la coche de l'anneau à leur croisement.
 */
export type LogoTone = 'color' | 'reverse' | 'ink' | 'white'

const TONES: Record<LogoTone, { ring: string; tick: string; gap: string }> = {
  color:   { ring: 'var(--cobalt)', tick: 'var(--coral)',   gap: 'var(--logo-gap, #fff)' },
  reverse: { ring: '#fff',          tick: 'var(--saffron)', gap: 'var(--logo-gap, var(--cobalt))' },
  ink:     { ring: 'var(--ink)',    tick: 'var(--ink)',     gap: 'var(--logo-gap, #fff)' },
  white:   { ring: '#fff',          tick: '#fff',           gap: 'var(--logo-gap, var(--ink))' },
}

export const TICK = 'M54 62 L71 79 L104 42'

export function LogoMark({ tone = 'color', size = 40, className = '', draw = false }: {
  tone?: LogoTone; size?: number; className?: string; draw?: boolean
}) {
  const t = TONES[tone]
  return (
    <svg className={`kmark${draw ? ' kmark--draw' : ''} ${className}`} width={size} height={size * 81 / 108}
         viewBox="4 6 108 81" fill="none" aria-hidden="true">
      <circle className="kmark__ring" cx="42" cy="44" r="29" stroke={t.ring} strokeWidth="17" />
      <path className="kmark__gap" d={TICK} pathLength={100} stroke={t.gap} strokeWidth="23" strokeLinecap="round" strokeLinejoin="round" />
      <path className="kmark__tick" d={TICK} pathLength={100} stroke={t.tick} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Marque + nom : « kalima », « école de langues » dessous. */
export default function Logo({ tone = 'color', size = 44, className = '', draw = false }: {
  tone?: LogoTone; size?: number; className?: string; draw?: boolean
}) {
  const text = tone === 'reverse' || tone === 'white' ? '#fff' : 'var(--ink)'
  return (
    <span className={`klogo ${className}`} style={{ color: text }}>
      <LogoMark tone={tone} size={size} draw={draw} />
      <span className="klogo__word" aria-hidden="true">
        kalima<small>école de langues</small>
      </span>
    </span>
  )
}
