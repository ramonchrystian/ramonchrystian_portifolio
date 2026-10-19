import type { Degree } from '../types'

export const formalDegrees: Degree[] = [
  {
    id: 'sacred-music',
    title: {
      en: 'Bachelor of Sacred Music',
      pt: 'Bacharel em Música Sacra',
    },
    institution: 'Seminário Teológico Batista do Sul do Brasil (STBSB)',
    periodLabel: {
      en: 'Concluded',
      pt: 'Concluído',
    },
    description: {
      en: 'Comprehensive academic formation in sacred music, hymnody, choral conducting, vocal technique, music theory, and theology applied to congregational worship.',
      pt: 'Formação acadêmica abrangente em música sacra, hinódia, regência coral, técnica vocal, teoria musical e teologia aplicada ao culto congregacional.',
    },
    icon: 'music',
    isPrimary: true,
  },
  {
    id: 'theology',
    title: {
      en: 'Bachelor of Theology — In Progress',
      pt: 'Bacharelado em Teologia — Em Andamento',
    },
    institution: 'Seminário Teológico Batista do Sul do Brasil (STBSB)',
    periodLabel: {
      en: 'In progress',
      pt: 'Em andamento',
    },
    description: {
      en: 'Theological studies with focus on biblical hermeneutics, systematic theology, church history, pastoral ministry, and biblical languages.',
      pt: 'Estudos teológicos com ênfase em hermenêutica bíblica, teologia sistemática, história da igreja, ministério pastoral e línguas bíblicas.',
    },
    icon: 'bookOpen',
    isPrimary: true,
  },
  {
    id: 'web-dev',
    title: {
      en: 'Higher Education in Web Development',
      pt: 'Superior de Tecnologia em Desenvolvimento Web',
    },
    institution: 'Universidade Pitágoras Unopar Anhanguera',
    periodLabel: {
      en: 'Concluded',
      pt: 'Concluído',
    },
    description: {
      en: 'Complementary higher education in web development, modern software architecture, database management, and digital product design.',
      pt: 'Formação superior complementar em desenvolvimento web, arquitetura de software moderna, gestão de bancos de dados e design de produtos digitais.',
    },
    icon: 'code',
    isPrimary: false,
  },
]

export const complementaryStudies: Degree[] = [
  {
    id: 'music-studies',
    title: {
      en: 'Advanced Studies in Electric Guitar & Contemporary Music',
      pt: 'Estudos Avançados em Guitarra Elétrica e Música Contemporânea',
    },
    institution: 'Conservatório Brasileiro de Música (CBM), Faculdade Santa Cecília & Starling Academy of Music',
    periodLabel: {
      en: 'Complementary studies',
      pt: 'Estudos complementares',
    },
    description: {
      en: 'Instrumental technique, harmony, improvisation, tone crafting, and audio recording methodologies for live and studio worship contexts.',
      pt: 'Técnica instrumental, harmonia, improvisação, construção de timbres e metodologias de gravação em estúdio e ao vivo para contextos de adoração.',
    },
    icon: 'guitar',
    isPrimary: false,
  },
]