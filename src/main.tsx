import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Polices auto-hébergées : Bricolage Grotesque pour les titres (axe de
// taille optique), Geist pour le texte.
import '@fontsource-variable/bricolage-grotesque/opsz.css'
import '@fontsource-variable/geist'
import 'lenis/dist/lenis.css'
import './styles/tokens.css'
import App from './App'

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
const root = document.getElementById('root')!
// Page prérendue pour cette adresse : React reprend le HTML existant au lieu
// de le reconstruire (sinon le hero est réinséré et ses animations
// rejouent). Sinon (développement, page 404) : rendu complet.
const path = (p: string) => p.replace(/\/+$/, '') || '/'
if (root.dataset.route && path(root.dataset.route) === path(location.pathname)) hydrateRoot(root, app)
else createRoot(root).render(app)
