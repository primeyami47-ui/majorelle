/* Contenu de la vitrine « Majorelle » : Kalima, école de langues fictive
   à Marrakech. Tout ce que les pages affichent vient d'ici ; les composants
   restent purement visuels. Noms, chiffres et avis sont inventés. */

export const company = {
  name: 'Kalima',
  tagline: 'École de langues',
  email: 'bonjour@kalima.example',
  address: ['Quartier Guéliz', 'Marrakech — Maroc'],
  hours: 'Du lundi au samedi, 8 h – 21 h',
} as const

/* ----------------------------------------------------------- langues ---- */

export interface Course {
  id: string
  n: string
  title: string
  /** Libellé court des panneaux repliés. */
  short: string
  /** « Bonjour » dans la langue : l'image du panneau. */
  hello: string
  rtl?: boolean
  pitch: string
}

export const courses: Course[] = [
  { id: 'en', n: '01', title: 'Anglais', short: 'English', hello: 'Hello!',
    pitch: 'Du premier « hello » à l’entretien d’embauche, en passant par le TOEFL et l’IELTS.' },
  { id: 'fr', n: '02', title: 'Français', short: 'Français', hello: 'Bonjour !',
    pitch: 'Écrire sans fautes, parler sans hésiter : le français des études et du travail.' },
  { id: 'es', n: '03', title: 'Espagnol', short: 'Español', hello: '¡Hola!',
    pitch: 'La langue de vos prochaines vacances, et de vos clients d’Andalousie à Bogotá.' },
  { id: 'de', n: '04', title: 'Allemand', short: 'Deutsch', hello: 'Hallo!',
    pitch: 'Préparer le Goethe-Zertifikat et un projet d’études ou de travail en Allemagne.' },
  { id: 'ar', n: '05', title: 'Arabe et darija', short: 'Arabe', hello: 'مرحبا', rtl: true,
    pitch: 'L’arabe classique pour lire, la darija pour vivre Marrakech comme un voisin.' },
]

/** Niveaux et examens : ils défilent sur les bandes colorées. */
export const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'TOEFL', 'IELTS', 'DELF', 'DELE', 'Goethe']

/* ------------------------------------------------------------ méthode ---- */

export const phases = [
  { n: '01', label: 'Test de niveau', deliverable: 'Votre niveau exact, de A1 à C2',
    title: 'On écoute d’abord' },
  { n: '02', label: 'Petit groupe', deliverable: 'Six élèves au plus, même niveau, même objectif',
    title: 'On parle dès la première séance' },
  { n: '03', label: 'Pratique réelle', deliverable: 'Clubs de conversation, sorties au souk, ateliers',
    title: 'On sort de la salle de classe' },
  { n: '04', label: 'Certificat', deliverable: 'TOEFL, DELF, DELE ou Goethe, préparé et passé',
    title: 'On valide ce que vous savez' },
]

/* ----------------------------------------------------------- preuves ---- */

/** Entreprises (inventées) qui forment leurs équipes chez Kalima. */
export const partners = ['Nakhla Hôtels', 'Atlas Byte', 'Dar Ocre', 'Souk Digital', 'Médina Air', 'Oasis Lab', 'Riad Zitoun']

export const figures = [
  { value: 1240, label: 'élèves depuis l’ouverture' },
  { value: 6, label: 'élèves au plus par groupe' },
  { value: 94, unit: '%', label: 'de réussite aux examens' },
  { value: 18, label: 'professeurs, natifs ou bilingues' },
]

export const testimonials = [
  { quote: 'Trois mois de cours du soir, et j’ai passé mon entretien à Madrid en espagnol. Sans traduire dans ma tête.',
    name: 'Salma', role: 'Ingénieure · espagnol B2', tone: 'coral' },
  { quote: 'Le club de conversation du jeudi est devenu mon moment préféré de la semaine. On rit beaucoup, on progresse vite.',
    name: 'Thomas', role: 'Expatrié · darija A2', tone: 'saffron' },
  { quote: 'Mon fils redoutait l’anglais. Aujourd’hui il regarde ses séries en version originale et vise l’IELTS.',
    name: 'Nadia', role: 'Maman d’un élève de 15 ans', tone: 'sky' },
] as const

/* ------------------------------------------------------- test express ---- */

export const quiz = {
  title: 'Quelle langue voulez-vous parler ?',
  choices: ['Anglais', 'Français', 'Espagnol', 'Allemand', 'Arabe', 'Je ne sais pas encore'],
}

/* ---------------------------------------------------------------- seo ---- */

export const seo = {
  home: {
    title: 'École de langues à Marrakech',
    description:
      'Anglais, français, espagnol, allemand et arabe en petits groupes de six, de A1 à C2. Test de niveau offert, préparation au TOEFL, DELF, DELE et Goethe.',
  },
  notFound: {
    title: 'Page introuvable',
    description: "Cette page n'existe pas ou a été déplacée.",
  },
} as const
