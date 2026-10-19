import type { Workshop } from '../types'

export const workshops: Workshop[] = [
  {
    id: 'workshop-1',
    title: {
      en: 'Worship Leadership & Congregational Singing: Theological Foundations and Musical Practice',
      pt: 'Liderança de Louvor & Canto Congregacional: Fundamentos Teológicos e Prática Musical',
    },
    event: {
      en: 'Music and Worship Congress',
      pt: 'Congresso de Música e Adoração',
    },
    institution: {
      en: 'First Baptist Church of Bangu',
      pt: 'Primeira Igreja Batista em Bangu',
    },
    city: 'Rio de Janeiro',
    year: '2024',
    type: 'workshop',
  },
  {
    id: 'workshop-2',
    title: {
      en: 'Team Building and Pastoral Character in Worship Ministries',
      pt: 'Formação de Equipes e Caráter Pastoral em Ministérios de Louvor',
    },
    event: {
      en: 'Worship Leaders Regional Conference',
      pt: 'Conferência Regional de Líderes de Louvor',
    },
    institution: {
      en: 'Rio de Janeiro Baptist Convention',
      pt: 'Convenção Batista Carioca / Fluminense',
    },
    city: 'Rio de Janeiro',
    year: '2023',
    type: 'workshop',
  },
  {
    id: 'workshop-3',
    title: {
      en: 'Musical Arrangement, Dynamics, and Rehearsal Methodology for Church Bands',
      pt: 'Arranjo Musical, Dinâmica e Metodologia de Ensaio para Bandas de Igreja',
    },
    event: {
      en: 'Music Ministry Training Program',
      pt: 'Capacitação Contínua de Ministérios de Música',
    },
    institution: {
      en: 'First Baptist Church of Marechal Hermes',
      pt: 'Igreja Batista de Marechal Hermes',
    },
    city: 'Rio de Janeiro',
    year: '2023',
    type: 'training',
  },
  {
    id: 'workshop-4',
    title: {
      en: 'Liturgy and Order of Worship: Integrating Scripture, Prayer, and Song',
      pt: 'Liturgia e Ordem de Culto: Integrando as Escrituras, a Oração e o Canto',
    },
    event: {
      en: 'Church Leadership Seminar',
      pt: 'Seminário de Liderança de Culto',
    },
    institution: {
      en: 'Baptist Pastoral Association',
      pt: 'Associação de Líderes e Pastores Batistas',
    },
    city: 'Rio de Janeiro',
    year: '2022',
    type: 'lecture',
  },
]