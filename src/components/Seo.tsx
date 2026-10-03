import { useEffect } from 'react'
import { brand } from '../brand'

function meta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Titre et description de la page (le prérendu les écrit aussi dans le HTML). */
export default function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    const full = `${title} | ${brand.name}`
    document.title = full
    meta('name', 'description', description)
    meta('property', 'og:title', full)
    meta('property', 'og:description', description)
  }, [title, description])
  return null
}
