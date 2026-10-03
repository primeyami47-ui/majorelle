/* Trois langues : le français à la racine, l'anglais sous /en, l'arabe
   (de droite à gauche) sous /ar. La langue se lit dans l'adresse : chaque
   version est une vraie page, prérendue, que l'on peut partager. */
import { useLocation } from 'react-router'

export const LANGS = ['fr', 'en', 'ar'] as const
export type Lang = (typeof LANGS)[number]

export const LANG_NAMES: Record<Lang, string> = { fr: 'Français', en: 'English', ar: 'العربية' }
/* Chiffres latins avec espace fine pour les milliers, y compris en arabe :
   « 1 240 » se lit sans ambiguïté (le point arabe marocain est un séparateur
   décimal ailleurs). */
export const LOCALES: Record<Lang, string> = { fr: 'fr-FR', en: 'en-GB', ar: 'fr-FR' }

export const dirOf = (l: Lang) => (l === 'ar' ? 'rtl' : 'ltr')
export const homeOf = (l: Lang) => (l === 'fr' ? '/' : `/${l}`)

export function langFromPath(path: string): Lang {
  const seg = path.split('/').filter(Boolean)[0]
  return seg === 'en' || seg === 'ar' ? seg : 'fr'
}

export function useLang(): Lang {
  return langFromPath(useLocation().pathname)
}
