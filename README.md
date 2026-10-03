# Majorelle — Kalima, école de langues

**Site vitrine de démonstration.** Kalima est une marque fictive : l’école,
les noms, les chiffres et les avis sont inventés pour montrer le design.

**En ligne :** https://primeyami47-ui.github.io/majorelle/ —
[English](https://primeyami47-ui.github.io/majorelle/en/) ·
[العربية](https://primeyami47-ui.github.io/majorelle/ar/)

## Le design

« Majorelle » part du bleu de Marrakech et l’entoure de corail, de safran,
de ciel et de rose : une couleur par langue enseignée. L’idée directrice
est un jeu de construction joyeux, pensé d’abord pour le téléphone.

- **Le logo s’assemble tout seul.** Une bulle de dialogue dont la queue est
  une coche (parler, réussir). À l’arrivée, ses pièces dispersées et
  colorées viennent s’emboîter ; la souris les fait glisser en parallaxe.
- **Le titre monte ligne à ligne**, et une vague corail se dessine sous
  « parle. ».
- **Deux bandes croisées** font défiler les niveaux et les examens
  (A1 → C2, TOEFL, DELF, DELE, Goethe) en sens contraires.
- **Cinq panneaux de couleur**, un par langue : celui qu’on survole
  s’élargit et dit bonjour (*Hello!*, *¡Hola!*, *مرحبا*…). Sur téléphone,
  c’est un carrousel qu’on fait glisser du pouce.
- **La méthode en quatre étapes** sur un chemin qui se trace tout seul dès
  qu’il paraît : chaque pastille s’allume et son numéro monte quand le trait
  l’atteint. Sur téléphone, le chemin devient une ligne verticale.
- **Un sceau qui tourne**, des chiffres qui comptent à l’entrée dans
  l’écran, des avis posés de travers comme des post-it.
- Défilement doux (Lenis), menu mobile plein écran, et tout s’arrête
  proprement avec « réduire les animations ».

## Ce qui la distingue

- **« Dites-le »** : trois phrases dans la langue choisie (anglais, français,
  espagnol, allemand, arabe), avec leur sens et un bouton pour les
  **écouter** (synthèse vocale du navigateur, quand elle existe).
- **Un test de niveau en conversation** : un professeur virtuel pose quatre
  questions, vos réponses deviennent des bulles, et la dernière donne un
  niveau estimé de A1 à C1.
- **Des avis en bulles de dialogue** (le logo est une bulle) et des chiffres
  en pastilles.

## Trois langues

Français à la racine, anglais sous `/en/`, arabe sous `/ar/`. Chaque
version est une vraie page prérendue (balises `hreflang` entre elles), avec
un sélecteur de langue dans l’en-tête et dans le menu mobile. Tous les
textes vivent dans `src/content/{fr,en,ar}.ts`, sous une même forme typée.

L’arabe se lit **de droite à gauche** : `dir="rtl"` sur la page, propriétés
CSS logiques, flèches retournées, chemin de la méthode tracé de droite à
gauche, menu qui s’ouvre depuis la gauche. Police arabe : Readex Pro, sans
interlettrage (l’arabe est une écriture liée) et avec plus d’interligne.

## Technique

Vite + React 19 + TypeScript, GSAP pour les animations. La page est
**prérendue en HTML statique** puis reprise par React (hydratation) : le
contenu s’affiche sans attendre le JavaScript et les animations ne se
rejouent pas. Polices auto-hébergées : Bricolage Grotesque (titres) et
Geist (texte).

```bash
npm install
npm run dev      # http://localhost:5173/majorelle/
npm run build    # vérification des types, bundle et prérendu dans dist/
npm run lint
```

Chaque push sur `main` publie le site sur GitHub Pages
(`.github/workflows/pages.yml`).
