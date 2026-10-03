import { useLang, type Lang } from '../i18n'
import fr from './fr'
import en from './en'
import ar from './ar'

export type { Content } from './fr'
export const content = { fr, en, ar }

/** Le contenu de la page, dans la langue de l'adresse. */
export function useContent() {
  return content[useLang() as Lang]
}
