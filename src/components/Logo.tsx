/**
 * Le logo Kalima : un K en trois traits (la hampe, puis deux jambages qui
 * s'ouvrent comme une bouche qui parle) et un point, comme une virgule ou une
 * bulle qui s'échappe.
 *
 * Construction (repère 112 × 100, cadré au plus près) : hampe d'épaisseur 17,
 * jambages d'épaisseur 15, point de diamètre 18, tous à bouts ronds.
 */
export type LogoTone = 'color' | 'reverse' | 'ink' | 'white'

const TONES: Record<LogoTone, { stem: string; arm: string; dot: string }> = {
  color:   { stem: 'var(--cobalt)', arm: 'var(--coral)',   dot: 'var(--saffron)' },
  reverse: { stem: '#fff',          arm: 'var(--saffron)', dot: 'var(--coral)' },
  ink:     { stem: 'var(--ink)',    arm: 'var(--ink)',     dot: 'var(--ink)' },
  white:   { stem: '#fff',          arm: '#fff',           dot: '#fff' },
}

export const STEM = 'M26 18 V74'
export const ARMS = 'M30 48 L70 16 M44 42 L76 76'
export const DOT = 'M99 21 h.01'

export function LogoMark({ tone = 'color', size = 40, className = '', draw = false }: {
  tone?: LogoTone; size?: number; className?: string; draw?: boolean
}) {
  const t = TONES[tone]
  return (
    <svg className={`kmark${draw ? ' kmark--draw' : ''} ${className}`} width={size} height={size * 81 / 108}
         viewBox="4 6 108 81" fill="none" aria-hidden="true">
      <path className="kmark__ring" d={STEM} stroke={t.stem} strokeWidth="17" strokeLinecap="round" />
      <path className="kmark__tick" d={ARMS} pathLength={100} stroke={t.arm} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
      <path className="kmark__dot" d={DOT} stroke={t.dot} strokeWidth="18" strokeLinecap="round" />
    </svg>
  )
}

/** Marque + nom : « kalima », « école de langues » dessous. */
export default function Logo({ tone = 'color', size = 44, className = '', draw = false, sub, word = 'kalima' }: {
  tone?: LogoTone; size?: number; className?: string; draw?: boolean; sub: string; word?: string
}) {
  const text = tone === 'reverse' || tone === 'white' ? '#fff' : 'var(--ink)'
  return (
    <span className={`klogo ${className}`} style={{ color: text }}>
      <LogoMark tone={tone} size={size} draw={draw} />
      <span className="klogo__word" aria-hidden="true">
        {word}<small>{sub}</small>
      </span>
    </span>
  )
}
