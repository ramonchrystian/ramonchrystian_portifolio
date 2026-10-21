import type { GalleryItem } from '../types'

export const defaultGooglePhotosUrl = 'https://photos.google.com/'

export const staticGallery: GalleryItem[] = [
  {
    id: 'cantata-natal-orquestra',
    title: {
      en: 'Christmas Cantata: Live Choir & Orchestra',
      pt: 'Cantata de Natal: Coro & Orquestra ao Vivo',
    },
    caption: {
      en: 'General musical direction and staging uniting vocal soloists, choir, and orchestral arrangement.',
      pt: 'Direção musical geral e produção da celebração de Natal reunindo solistas, coro e orquestra ao vivo.',
    },
    image: '/retrato1.png',
    category: 'cantata',
    date: 'Dez 2023',
    order: 1,
  },
  {
    id: 'lideranca-adoracao-culto',
    title: {
      en: 'Congregational Worship & Pastoral Liturgy',
      pt: 'Liderança de Adoração & Canto Congregacional',
    },
    caption: {
      en: 'Guiding Sunday morning congregational singing with pastoral intentionality and theological depth.',
      pt: 'Condução do canto da igreja reunida com intencionalidade pastoral e solidez bíblica.',
    },
    image: '/retrato1.png',
    category: 'worship',
    date: '2024',
    order: 2,
  },
  {
    id: 'workshop-pratica-banda-ambc',
    title: {
      en: 'Band Practice & Rehearsal Dynamics Workshop',
      pt: 'Workshop de Prática de Banda e Dinâmica de Ensaio',
    },
    caption: {
      en: 'Equipping volunteer rhythm sections and church instrumentalists across regional conferences.',
      pt: 'Capacitação prática de instrumentistas voluntários e dinâmica de ensaio para equipes de louvor.',
    },
    image: '/retrato1.png',
    category: 'workshop',
    date: '2026',
    order: 3,
  },
  {
    id: 'regencia-preparacao-vocal',
    title: {
      en: 'Choral Conducting & Vocal Rehearsal',
      pt: 'Regência Coral & Preparação Vocal',
    },
    caption: {
      en: 'Methodical choir rehearsal focusing on sacred music repertoire, vocal projection, and musical excellence.',
      pt: 'Ensaio metódico de coro sacro com foco em técnica vocal, dicção e repertório litúrgico.',
    },
    image: '/retrato1.png',
    category: 'choir',
    date: '2022',
    order: 4,
  },
]
