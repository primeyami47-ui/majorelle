/* Contenu de la vitrine « Majorelle » : Kalima, école de langues fictive à
   Marrakech. Tout ce que la page affiche vient d'ici ; en.ts et ar.ts
   reprennent exactement la même forme. Noms, chiffres et avis sont inventés. */

const fr = {
  company: {
    name: 'Kalima',
    tagline: 'école de langues',
    email: 'bonjour@kalima.example',
    address: ['Quartier Guéliz', 'Marrakech — Maroc'],
    hours: 'Du lundi au samedi, 8 h – 21 h',
  },

  ui: {
    skip: 'Aller au contenu',
    home: 'accueil',
    navLabel: 'Navigation principale',
    menuLabel: 'Menu',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    langLabel: 'Langue',
    scroll: 'Défilez',
    cta: 'Tester mon niveau',
    heroArt: 'Les pièces du logo Kalima, dispersées, qui s’assemblent en un K',
  },

  nav: [
    { to: '#langues', label: 'Langues' },
    { to: '#methode', label: 'Méthode' },
    { to: '#avis', label: 'Avis' },
    { to: '#contact', label: 'Contact' },
  ],

  hero: {
    proof: '{n} élèves depuis l’ouverture',
    line1: 'Une langue,',
    line2a: 'ça se ',
    line2b: 'parle.',
    lead: 'Anglais, français, espagnol, allemand, arabe : chez Kalima, vous parlez dès la première séance, en petits groupes de six, du niveau A1 jusqu’au C2.',
    alt: 'Voir les langues',
    note: 'Test offert · 10 minutes · sans engagement',
  },

  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'TOEFL', 'IELTS', 'DELF', 'DELE', 'Goethe'],
  levelsSr: 'Niveaux et examens préparés :',

  partnersTitle: 'Ils forment leurs équipes chez nous',
  partners: ['Nakhla Hôtels', 'Atlas Byte', 'Dar Ocre', 'Souk Digital', 'Médina Air', 'Oasis Lab', 'Riad Zitoun'],

  courses: {
    eyebrow: 'Nos langues',
    title: 'Cinq langues, cinq couleurs, une seule école.',
    book: 'Réserver un cours d’essai',
    swipe: 'Glissez pour voir les cinq langues',
    unsure: 'Vous ne savez pas par où commencer ?',
    list: [
      { id: 'en', n: '01', title: 'Anglais', short: 'English', hello: 'Hello!', rtl: false,
        pitch: 'Du premier « hello » à l’entretien d’embauche, en passant par le TOEFL et l’IELTS.' },
      { id: 'fr', n: '02', title: 'Français', short: 'Français', hello: 'Bonjour !', rtl: false,
        pitch: 'Écrire sans fautes, parler sans hésiter : le français des études et du travail.' },
      { id: 'es', n: '03', title: 'Espagnol', short: 'Español', hello: '¡Hola!', rtl: false,
        pitch: 'La langue de vos prochaines vacances, et de vos clients d’Andalousie à Bogotá.' },
      { id: 'de', n: '04', title: 'Allemand', short: 'Deutsch', hello: 'Hallo!', rtl: false,
        pitch: 'Préparer le Goethe-Zertifikat et un projet d’études ou de travail en Allemagne.' },
      { id: 'ar', n: '05', title: 'Arabe et darija', short: 'Arabe', hello: 'مرحبا', rtl: true,
        pitch: 'L’arabe classique pour lire, la darija pour vivre Marrakech comme un voisin.' },
    ],
  },

  method: {
    eyebrow: 'Notre méthode',
    title: 'Quatre étapes. Vous parlez dès la première.',
    lead: 'La même méthode pour toutes les langues : on écoute, on parle, on sort, on valide.',
    seal: 'PARLEZ · ÉCOUTEZ · OSEZ · PARLEZ · ÉCOUTEZ · OSEZ ·',
    phases: [
      { n: '01', label: 'Test de niveau', title: 'On écoute d’abord', deliverable: 'Votre niveau exact, de A1 à C2' },
      { n: '02', label: 'Petit groupe', title: 'On parle dès la première séance', deliverable: 'Six élèves au plus, même niveau, même objectif' },
      { n: '03', label: 'Pratique réelle', title: 'On sort de la salle de classe', deliverable: 'Clubs de conversation, sorties au souk, ateliers' },
      { n: '04', label: 'Certificat', title: 'On valide ce que vous savez', deliverable: 'TOEFL, DELF, DELE ou Goethe, préparé et passé' },
    ],
  },

  test: {
    title: 'Votre niveau ?',
    lead: 'Dix minutes avec un professeur, à l’école ou en visio, et vous savez exactement par où commencer. Offert, sans engagement.',
    step: 'Question 1 sur 4',
    question: 'Quelle langue voulez-vous parler ?',
    choices: ['Anglais', 'Français', 'Espagnol', 'Allemand', 'Arabe', 'Je ne sais pas encore'],
  },

  reviews: {
    eyebrow: 'Avis d’élèves',
    title: 'Ils le disent mieux que nous.',
    figures: [
      { value: 1240, unit: '', label: 'élèves depuis l’ouverture' },
      { value: 6, unit: '', label: 'élèves au plus par groupe' },
      { value: 94, unit: '%', label: 'de réussite aux examens' },
      { value: 18, unit: '', label: 'professeurs, natifs ou bilingues' },
    ],
    list: [
      { quote: 'Trois mois de cours du soir, et j’ai passé mon entretien à Madrid en espagnol. Sans traduire dans ma tête.',
        name: 'Salma', role: 'Ingénieure · espagnol B2', tone: 'coral' },
      { quote: 'Le club de conversation du jeudi est devenu mon moment préféré de la semaine. On rit beaucoup, on progresse vite.',
        name: 'Thomas', role: 'Expatrié · darija A2', tone: 'saffron' },
      { quote: 'Mon fils redoutait l’anglais. Aujourd’hui il regarde ses séries en version originale et vise l’IELTS.',
        name: 'Nadia', role: 'Maman d’un élève de 15 ans', tone: 'sky' },
    ],
  },

  close: {
    who: 'Hi',
    title: 'Votre premier cours est offert.',
    lead: 'Écrivez-nous : un professeur vous répond sous 24 heures et fixe votre test de niveau.',
    cta: 'Écrire un message',
  },

  footer: {
    line1: 'Une langue,',
    line2: 'ça se parle.',
    about: 'École de langues en petits groupes : anglais, français, espagnol, allemand, arabe et darija. Marrakech, Maroc.',
    colCourses: 'Langues',
    colSchool: 'L’école',
    school: [
      { to: '#methode', label: 'Notre méthode' },
      { to: '#avis', label: 'Avis d’élèves' },
      { to: '#test', label: 'Test de niveau' },
      { to: '#contact', label: 'Nous écrire' },
    ],
    colContact: 'Contact',
    demo: 'Marque fictive · site vitrine de démonstration',
  },

  notFound: {
    eyebrow: 'Erreur 404',
    title: 'Cette page ne parle aucune de nos langues.',
    lead: 'Elle n’existe pas, ou elle a déménagé.',
    cta: 'Retour à l’accueil',
  },

  error: {
    title: 'Une erreur est survenue',
    lead: 'Rechargez la page. Si le problème persiste, écrivez-nous à',
    reload: 'Recharger la page',
  },

  seo: {
    home: {
      title: 'École de langues à Marrakech',
      description: 'Anglais, français, espagnol, allemand et arabe en petits groupes de six, de A1 à C2. Test de niveau offert, préparation au TOEFL, DELF, DELE et Goethe.',
    },
    notFound: { title: 'Page introuvable', description: 'Cette page n’existe pas ou a été déplacée.' },
  },
}

export type Content = typeof fr
export default fr
