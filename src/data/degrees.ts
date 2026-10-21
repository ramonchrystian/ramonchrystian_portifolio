import type { Degree, VerifiedCredential } from '../types'

export const formalDegrees: Degree[] = [
  {
    id: 'theology',
    title: {
      en: 'Bachelor of Theology — In Progress',
      pt: 'Bacharelado em Teologia — Em Andamento',
    },
    institution: 'Faculdade Batista do Rio de Janeiro (FABAT)',
    periodLabel: {
      en: 'In progress',
      pt: 'Em andamento',
    },
    description: {
      en: 'Academic theological studies focusing on biblical hermeneutics, systematic theology, church history, pastoral ministry, ethics, and biblical languages (Greek & Hebrew).',
      pt: 'Formação teológica acadêmica com ênfase em hermenêutica bíblica, teologia sistemática, história da igreja, ministério pastoral, ética cristã e línguas bíblicas (Grego e Hebraico).',
    },
    icon: 'bookOpen',
    isPrimary: true,
  },
  {
    id: 'sacred-music',
    title: {
      en: 'Bachelor of Sacred Music (Concluded — 2010)',
      pt: 'Bacharel em Música Sacra (Concluído — 2010)',
    },
    institution: 'Seminário Teológico Batista do Sul do Brasil (STBSB / FABAT)',
    periodLabel: {
      en: 'Concluded · GPA 9.06 / 10.0',
      pt: 'Concluído · Média 9,06 / 10,0',
    },
    description: {
      en: 'Comprehensive 8-semester seminary program combining sacred music, hymnody, choral & orchestral conducting, vocal technique, music theory, and pastoral theology applied to congregational worship. Cumulative General GPA: 9.06 / 10.0.',
      pt: 'Grau seminarístico batista histórico de 8 semestres integrando música sacra, hinódia, regência coral e orquestral, técnica vocal, teoria musical e teologia pastoral aplicada ao culto congregacional. Média Geral Acumulada de 9,06 / 10,0.',
    },
    icon: 'music',
    isPrimary: true,
  },
  {
    id: 'web-dev',
    title: {
      en: 'Higher Education in Web Development',
      pt: 'Superior de Tecnologia em Desenvolvimento Web',
    },
    institution: 'Universidade Norte do Paraná (UNOPAR)',
    periodLabel: {
      en: 'Concluded',
      pt: 'Concluído',
    },
    description: {
      en: 'Complementary higher education in modern web architecture, frontend and backend engineering, relational databases, and digital system design. Includes English Language I & II institutional certifications.',
      pt: 'Formação superior complementar em desenvolvimento de software, arquitetura web moderna, modelagem de banco de dados e design de interfaces. Inclui certificações em Língua Inglesa I e II conferidas pela instituição.',
    },
    icon: 'code',
    isPrimary: false,
  },
]

export const complementaryStudies: Degree[] = [
  {
    id: 'haggai-institute',
    title: {
      en: 'Haggai Institute Brazil — Advanced Christian Leadership',
      pt: 'Instituto Haggai Brasil — Liderança Cristã Avançada',
    },
    institution: 'Haggai Institute (Brasil)',
    periodLabel: {
      en: 'Graduated',
      pt: 'Graduado',
    },
    description: {
      en: 'Graduated from the advanced national leadership and evangelism development seminar, focusing on biblical stewardship, ministry integrity, and multiplying leaders.',
      pt: 'Graduado no programa nacional avançado de Liderança Cristã e Evangelismo, com foco em integridade ministerial, mordomia bíblica e multiplicação de líderes na igreja local.',
    },
    icon: 'bookOpen',
    isPrimary: false,
  },
  {
    id: 'wmt-training',
    title: {
      en: 'Worship Ministry Training (WMT)',
      pt: 'Worship Ministry Training (WMT)',
    },
    institution: 'Worship Ministry Training (USA)',
    periodLabel: {
      en: 'Specialized Program',
      pt: 'Aperfeiçoamento Prático',
    },
    description: {
      en: 'Practical development in worship service planning, volunteer discipleship systems, band coaching, and pastoral worship leadership methodology.',
      pt: 'Aperfeiçoamento prático intensivo em organização de escalas, discipulado de equipes voluntárias, condução de ensaios de banda e liderança pastoral do louvor.',
    },
    icon: 'music',
    isPrimary: false,
  },
  {
    id: 'music-studies',
    title: {
      en: 'Complementary Studies in Electric Guitar & Contemporary Music',
      pt: 'Estudos Livres em Guitarra Elétrica e Música Contemporânea',
    },
    institution: 'Conservatório Brasileiro de Música (CBM – RJ), Faculdade Santa Cecília (SP) & Starling Academy of Music (RJ)',
    periodLabel: {
      en: 'Complementary non-degree studies',
      pt: 'Estudos livres complementares',
    },
    description: {
      en: 'Targeted complementary studies in electric guitar performance, modern harmony, improvisation, tone shaping, and audio capture techniques for worship and studio environments.',
      pt: 'Estudos livres complementares de performance instrumental, harmonia funcional, improvisação, construção de timbres e técnicas de áudio e gravação para contextos de culto e estúdio.',
    },
    icon: 'guitar',
    isPrimary: false,
  },
]

export const verifiedCredentials: VerifiedCredential[] = [
  // Google Credentials
  {
    id: 'google-ai-spec',
    issuer: 'Google',
    title: 'Google AI Essentials Specialization',
    credentialId: 'KC7STB9ON0AX',
    date: '2025',
    category: 'ai',
    url: 'https://www.coursera.org/account/accomplishments/specialization/KC7STB9ON0AX',
  },
  {
    id: 'google-prompting',
    issuer: 'Google',
    title: 'Discover the Art of Prompting',
    credentialId: 'D33FF5AWOAZT',
    date: '2025',
    category: 'ai',
    url: 'https://www.coursera.org/account/accomplishments/verify/D33FF5AWOAZT',
  },
  {
    id: 'google-ai-responsible',
    issuer: 'Google',
    title: 'Use AI Responsibly',
    credentialId: 'G5JQV71LAGJT',
    date: '2025',
    category: 'ai',
    url: 'https://www.coursera.org/account/accomplishments/verify/G5JQV71LAGJT',
  },
  {
    id: 'google-ai-productivity',
    issuer: 'Google',
    title: 'Maximize Productivity With AI Tools',
    credentialId: 'MOGBKXUFEW9D',
    date: '2025',
    category: 'ai',
    url: 'https://www.coursera.org/account/accomplishments/verify/MOGBKXUFEW9D',
  },
  {
    id: 'google-ai-curve',
    issuer: 'Google',
    title: 'Stay Ahead of the AI Curve',
    credentialId: '8XK5EUGAGIWF',
    date: '2025',
    category: 'ai',
    url: 'https://www.coursera.org/account/accomplishments/verify/8XK5EUGAGIWF',
  },
  {
    id: 'google-ai-intro',
    issuer: 'Google',
    title: 'Introduction to AI',
    credentialId: '5KXOVX39DH94',
    date: '2025',
    category: 'ai',
    url: 'https://www.coursera.org/account/accomplishments/verify/5KXOVX39DH94',
  },
  {
    id: 'google-pm',
    issuer: 'Google',
    title: 'Foundations of Project Management (Scrum & Agile)',
    credentialId: 'BHF8OBG2WQJ3',
    date: '2025',
    category: 'pm',
    url: 'https://www.coursera.org/account/accomplishments/verify/BHF8OBG2WQJ3',
  },
  {
    id: 'google-digital-marketing',
    issuer: 'Google',
    title: 'Foundations of Digital Marketing and E-commerce',
    credentialId: 'YUMHEXVZYUJ7',
    date: '2025',
    category: 'pm',
    url: 'https://www.coursera.org/account/accomplishments/verify/YUMHEXVZYUJ7',
  },

  // Meta Credentials
  {
    id: 'meta-react',
    issuer: 'Meta',
    title: 'React Basics — Meta Front-End Developer',
    credentialId: 'TWZDZNV2XV4W',
    date: '2024',
    category: 'frontend',
    url: 'https://www.coursera.org/account/accomplishments/verify/TWZDZNV2XV4W',
  },
  {
    id: 'meta-javascript',
    issuer: 'Meta',
    title: 'Programming with JavaScript',
    credentialId: 'LNVY7EE8V7KR',
    date: '2023',
    category: 'frontend',
    url: 'https://www.coursera.org/account/accomplishments/verify/LNVY7EE8V7KR',
  },
  {
    id: 'meta-html-css',
    issuer: 'Meta',
    title: 'HTML and CSS in Depth',
    credentialId: 'M9HKY4K9VKEG',
    date: '2023',
    category: 'frontend',
    url: 'https://www.coursera.org/account/accomplishments/verify/M9HKY4K9VKEG',
  },
  {
    id: 'meta-git',
    issuer: 'Meta',
    title: 'Version Control / Git & GitHub',
    credentialId: '93DAS7M8K8TW',
    date: '2023',
    category: 'frontend',
    url: 'https://www.coursera.org/account/accomplishments/verify/93DAS7M8K8TW',
  },
  {
    id: 'meta-frontend-intro',
    issuer: 'Meta',
    title: 'Introduction to Front-End Development',
    credentialId: '4GKASJ6P9E2M',
    date: '2022',
    category: 'frontend',
    url: 'https://www.coursera.org/account/accomplishments/verify/4GKASJ6P9E2M',
  },

  // University of Michigan & LearnQuest Credentials
  {
    id: 'umich-css3',
    issuer: 'University of Michigan',
    title: 'Introduction to CSS3 (Final Grade: 97.17%)',
    credentialId: 'ZGPC9GTF9QCQ',
    date: '2021',
    grade: '97.17%',
    category: 'frontend',
    url: 'https://www.coursera.org/account/accomplishments/verify/ZGPC9GTF9QCQ',
  },
  {
    id: 'umich-html5',
    issuer: 'University of Michigan',
    title: 'Introduction to HTML5',
    credentialId: '9FSSCSA3Q5KJ',
    date: '2021',
    category: 'frontend',
    url: 'https://www.coursera.org/account/accomplishments/verify/9FSSCSA3Q5KJ',
  },
  {
    id: 'learnquest-cloud',
    issuer: 'LearnQuest',
    title: 'Cloud Computing Basics — Cloud 101',
    credentialId: 'BEAQJ47XG35S',
    date: '2022',
    category: 'cloud',
    url: 'https://www.coursera.org/account/accomplishments/verify/BEAQJ47XG35S',
  },
]