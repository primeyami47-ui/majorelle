import { Link } from 'react-router'
import { homeOf, LANG_NAMES, LANGS, useLang, type Lang } from '../i18n'

const LANG_SHORT: Record<Lang, string> = { fr: 'FR', en: 'EN', ar: 'ع' }

/** Le sélecteur de langue : trois liens courts, la langue courante marquée. */
export default function LangSwitch({ label, className = '', onPick }: { label: string; className?: string; onPick?: () => void }) {
  const lang = useLang()
  return (
    <nav className={`langs ${className}`} aria-label={label}>
      {LANGS.map((l) => (
        <Link key={l} to={homeOf(l)} lang={l} hrefLang={l} title={LANG_NAMES[l]}
              aria-current={l === lang ? 'true' : undefined} className="langs__a" onClick={onPick}>
          {LANG_SHORT[l]}
        </Link>
      ))}
    </nav>
  )
}
