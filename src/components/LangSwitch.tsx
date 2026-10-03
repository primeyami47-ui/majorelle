import { LANG_NAMES, LANGS, useLang, type Lang } from '../i18n'

const LANG_SHORT: Record<Lang, string> = { fr: 'FR', en: 'EN', ar: 'ع' }

/** Le sélecteur de langue : trois liens courts, la langue courante marquée.
    Ce sont de vrais liens (pas de navigation interne) : chaque langue est
    une page prérendue, avec sa police et son sens de lecture dès le premier
    affichage, sans réassemblage ni scintillement. */
export default function LangSwitch({ label, className = '' }: { label: string; className?: string; onPick?: () => void }) {
  const lang = useLang()
  const hash = typeof location === 'undefined' ? '' : location.hash
  return (
    <nav className={`langs ${className}`} aria-label={label}>
      {LANGS.map((l) => (
        <a key={l} href={`${import.meta.env.BASE_URL}${l === 'fr' ? '' : l + '/'}${hash}`} lang={l} hrefLang={l} title={LANG_NAMES[l]}
           aria-current={l === lang ? 'true' : undefined} className="langs__a">
          {LANG_SHORT[l]}
        </a>
      ))}
    </nav>
  )
}
