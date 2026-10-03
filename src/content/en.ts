import type { Content } from './fr'

const en: Content = {
  company: {
    name: 'Kalima',
    tagline: 'language school',
    email: 'hello@kalima.example',
    address: ['Guéliz district', 'Marrakech — Morocco'],
    hours: 'Monday to Saturday, 8 am – 9 pm',
  },

  ui: {
    skip: 'Skip to content',
    home: 'home',
    navLabel: 'Main navigation',
    menuLabel: 'Menu',
    menuOpen: 'Open the menu',
    menuClose: 'Close the menu',
    langLabel: 'Language',
    scroll: 'Scroll',
    cta: 'Test my level',
    heroArt: 'The pieces of the Kalima logo, scattered, coming together as a speech bubble whose tail is a tick',
  },

  nav: [
    { to: '#langues', label: 'Languages' },
    { to: '#methode', label: 'Method' },
    { to: '#avis', label: 'Reviews' },
    { to: '#contact', label: 'Contact' },
  ],

  hero: {
    proof: '{n} students since we opened',
    line1: 'A language',
    line2a: 'is for ',
    line2b: 'speaking.',
    lead: 'English, French, Spanish, German, Arabic: at Kalima you speak from the very first lesson, in small groups of six, from level A1 all the way to C2.',
    alt: 'See the languages',
    note: 'Free test · 10 minutes · no commitment',
  },

  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'TOEFL', 'IELTS', 'DELF', 'DELE', 'Goethe'],
  levelsSr: 'Levels and exams we prepare for:',

  partnersTitle: 'They train their teams with us',
  partners: ['Nakhla Hotels', 'Atlas Byte', 'Dar Ocre', 'Souk Digital', 'Médina Air', 'Oasis Lab', 'Riad Zitoun'],

  courses: {
    eyebrow: 'Our languages',
    title: 'Five languages, five colours, one school.',
    book: 'Book a trial lesson',
    swipe: 'Swipe to see all five languages',
    unsure: 'Not sure where to start?',
    list: [
      { id: 'en', n: '01', title: 'English', short: 'English', hello: 'Hello!', rtl: false,
        pitch: 'From your first “hello” to the job interview, by way of the TOEFL and IELTS.' },
      { id: 'fr', n: '02', title: 'French', short: 'Français', hello: 'Bonjour !', rtl: false,
        pitch: 'Write without mistakes, speak without hesitating: French for study and for work.' },
      { id: 'es', n: '03', title: 'Spanish', short: 'Español', hello: '¡Hola!', rtl: false,
        pitch: 'The language of your next holiday, and of your clients from Andalusia to Bogotá.' },
      { id: 'de', n: '04', title: 'German', short: 'Deutsch', hello: 'Hallo!', rtl: false,
        pitch: 'Prepare the Goethe-Zertifikat and a plan to study or work in Germany.' },
      { id: 'ar', n: '05', title: 'Arabic & Darija', short: 'Arabic', hello: 'مرحبا', rtl: true,
        pitch: 'Classical Arabic to read, Darija to live in Marrakech like a neighbour.' },
    ],
  },

  method: {
    eyebrow: 'Our method',
    title: 'Four steps. You speak from the first one.',
    lead: 'The same method for every language: we listen, you speak, we go out, we certify.',
    seal: 'SPEAK · LISTEN · DARE · SPEAK · LISTEN · DARE ·',
    phases: [
      { n: '01', label: 'Level test', title: 'We listen first', deliverable: 'Your exact level, from A1 to C2' },
      { n: '02', label: 'Small group', title: 'You speak from the first lesson', deliverable: 'Six students at most, same level, same goal' },
      { n: '03', label: 'Real practice', title: 'We leave the classroom', deliverable: 'Conversation clubs, souk outings, workshops' },
      { n: '04', label: 'Certificate', title: 'We certify what you know', deliverable: 'TOEFL, DELF, DELE or Goethe, prepared and passed' },
    ],
  },

  test: {
    title: 'Your level?',
    lead: 'Ten minutes with a teacher, at the school or by video call, and you know exactly where to start. Free, no commitment.',
    step: 'Question 1 of 4',
    question: 'Which language do you want to speak?',
    choices: ['English', 'French', 'Spanish', 'German', 'Arabic', 'Not sure yet'],
  },

  reviews: {
    eyebrow: 'Student reviews',
    title: 'They say it better than we do.',
    figures: [
      { value: 1240, unit: '', label: 'students since we opened' },
      { value: 6, unit: '', label: 'students per group, at most' },
      { value: 94, unit: '%', label: 'exam pass rate' },
      { value: 18, unit: '', label: 'native or bilingual teachers' },
    ],
    list: [
      { quote: 'Three months of evening classes, and I did my interview in Madrid in Spanish. Without translating in my head.',
        name: 'Salma', role: 'Engineer · Spanish B2', tone: 'coral' },
      { quote: 'The Thursday conversation club became my favourite moment of the week. We laugh a lot and learn fast.',
        name: 'Thomas', role: 'Expat · Darija A2', tone: 'saffron' },
      { quote: 'My son dreaded English. Now he watches his series in the original version and is aiming for the IELTS.',
        name: 'Nadia', role: 'Mother of a 15-year-old student', tone: 'sky' },
    ],
  },

  close: {
    who: 'Hi',
    title: 'Your first lesson is free.',
    lead: 'Write to us: a teacher replies within 24 hours and books your level test.',
    cta: 'Send a message',
  },

  footer: {
    line1: 'A language',
    line2: 'is for speaking.',
    about: 'Language school in small groups: English, French, Spanish, German, Arabic and Darija. Marrakech, Morocco.',
    colCourses: 'Languages',
    colSchool: 'The school',
    school: [
      { to: '#methode', label: 'Our method' },
      { to: '#avis', label: 'Student reviews' },
      { to: '#test', label: 'Level test' },
      { to: '#contact', label: 'Write to us' },
    ],
    colContact: 'Contact',
    demo: 'Fictional brand · demo showcase site',
  },

  notFound: {
    eyebrow: 'Error 404',
    title: 'This page speaks none of our languages.',
    lead: 'It doesn’t exist, or it has moved.',
    cta: 'Back to the home page',
  },

  error: {
    title: 'Something went wrong',
    lead: 'Reload the page. If the problem persists, write to us at',
    reload: 'Reload the page',
  },

  seo: {
    home: {
      title: 'Language school in Marrakech',
      description: 'English, French, Spanish, German and Arabic in small groups of six, from A1 to C2. Free level test, preparation for the TOEFL, DELF, DELE and Goethe.',
    },
    notFound: { title: 'Page not found', description: 'This page doesn’t exist or has moved.' },
  },
}

export default en
