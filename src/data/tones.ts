/* Identité « Majorelle » : chaque langue a sa couleur. */
const TONES: Record<string, { bg: string; fg: string; a: string; b: string }> = {
  en: { bg: 'var(--cobalt)',  fg: '#fff',       a: 'var(--sky)',     b: 'var(--cobalt-d)' },
  fr: { bg: 'var(--saffron)', fg: 'var(--ink)', a: 'var(--saffron)', b: 'var(--ink)' },
  es: { bg: 'var(--coral)',   fg: 'var(--ink)', a: '#FFB9A6',        b: 'var(--ink)' },
  de: { bg: 'var(--sky)',     fg: 'var(--ink)', a: 'var(--sky)',     b: 'var(--cobalt-d)' },
  ar: { bg: 'var(--pink)',    fg: 'var(--ink)', a: 'var(--pink)',    b: '#35205A' },
}
export const toneOf = (id: string) => TONES[id] ?? TONES.en
