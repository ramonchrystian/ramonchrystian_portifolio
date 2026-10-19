import type { Publication } from '../types'

/**
 * Publications, journal articles, and academic conference contributions.
 * Structured to allow adding documented items over time without altering layout.
 * Items will only render in the UI when populated with verified details.
 */
export const publications: Publication[] = [
  // Ready for verified academic publications, theological reviews, and conference papers.
  // Example structure:
  // {
  //   id: 'sample-pub',
  //   title: { en: 'Title in English', pt: 'Título em Português' },
  //   venue: { en: 'Theological Journal / Conference', pt: 'Revista Teológica / Congresso' },
  //   date: '2025',
  //   description: { en: 'Abstract or description', pt: 'Resumo da publicação' },
  //   type: 'article', // 'article' | 'talk' | 'congress' | 'editorial'
  //   url: 'https://...',
  // },
]