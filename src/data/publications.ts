import type { Book, EditorialPeriodical, Publication } from '../types'

/**
 * ============================================================================
 * LIVROS PUBLICADOS / PUBLISHED BOOKS
 * Edite facilmente os títulos, links da Amazon e detalhes dos livros abaixo.
 * ============================================================================
 */
export const publishedBooks: Book[] = [
  {
    id: 'ministerio-de-musica-tensoes',
    title: {
      pt: 'Ministério de Música: Tensões na Liderança e a Renovação Pessoal',
      en: 'Music Ministry: Leadership Tensions and Personal Renewal',
    },
    subtitle: {
      pt: 'Caminhos bíblicos para pastores, ministros e líderes de louvor',
      en: 'Biblical pathways for pastors, worship ministers, and team leaders',
    },
    description: {
      pt: 'Obra voltada para pastores, ministros de música e líderes de louvor, abordando as tensões emocionais, relacionais e espirituais da liderança musical na igreja local e caminhos bíblicos para a renovação e longevidade no ministério.',
      en: 'A practical and pastoral work addressing the relational, emotional, and spiritual tensions of local church worship leadership, offering biblical pathways for personal renewal and ministerial longevity.',
    },
    year: '2023',
    publisher: {
      pt: 'Publicação Independente / Amazon KDP',
      en: 'Independent Publication / Amazon KDP',
    },
    url: 'https://www.amazon.com.br/dp/B0CKM6D2Z8', // Link Amazon
    isFeatured: true,
  },
  {
    id: 'livro-2-planejamento-liturgico',
    title: {
      pt: 'O Culto Congregacional: Teologia, Liturgia e Prática Pastoral',
      en: 'Congregational Worship: Theology, Liturgy, and Pastoral Practice',
    },
    subtitle: {
      pt: 'Fundamentos bíblicos e guia prático para a igreja local',
      en: 'Biblical foundations and practical guide for the local church',
    },
    description: {
      pt: 'Guia teológico e litúrgico focado no planejamento consciente do culto cristão, integrando a herança dos hinos históricos, salmos contemporâneos e a centralidade das Escrituras na adoração.',
      en: 'A theological and liturgical guide focused on intentional worship planning, integrating historic hymnody, contemporary Psalms, and the centrality of Scripture in congregational adoration.',
    },
    year: '2024',
    publisher: {
      pt: 'Editora / Plataforma Editorial Letra Sonora',
      en: 'Letra Sonora Editorial Platform',
    },
    url: 'https://letrasonora.com.br/livros',
    isFeatured: false,
  },
]

/**
 * ============================================================================
 * ATUAÇÃO EDITORIAL & PERIÓDICOS / EDITORIAL COLUMNS & PERIODICALS
 * ============================================================================
 */
export const editorialPeriodicals: EditorialPeriodical[] = [
  {
    id: 'juerp-louvor',
    name: {
      pt: 'Revistas Louvor e Diálogo e Ação',
      en: 'Louvor and Diálogo e Ação Magazines',
    },
    organization: {
      pt: 'Editora JUERP — Convenção Batista Brasileira (CBB)',
      en: 'JUERP Publishing — Brazilian Baptist Convention (CBB)',
    },
    role: {
      pt: 'Articulista Colaborador',
      en: 'Contributing Writer & Essayist',
    },
    description: {
      pt: 'Artigos formativos sobre hinódia, prática coral, capacitação de equipes de louvor e reflexão teológica para igrejas batistas em todo o Brasil.',
      en: 'Formational essays on hymnody, choral ministry, worship team development, and theological reflections for Baptist churches nationwide.',
    },
  },
  {
    id: 'prazer-da-palavra',
    name: {
      pt: 'Portal Prazer da Palavra',
      en: 'Prazer da Palavra Theological Portal',
    },
    organization: {
      pt: 'Portal Teológico e Devocional',
      en: 'Theological & Devotional Web Portal',
    },
    role: {
      pt: 'Colunista de Música Sacra & Adoração',
      en: 'Sacred Music & Worship Columnist',
    },
    description: {
      pt: 'Colunas regulares articulando adoração cristã, hermenêutica bíblica e espiritualidade pastoral.',
      en: 'Regular columns articulating Christian worship, biblical hermeneutics, and pastoral spirituality.',
    },
  },
  {
    id: 'tijuca-em-foco',
    name: {
      pt: 'Jornal Tijuca em Foco (RJ)',
      en: 'Tijuca em Foco Newspaper (RJ)',
    },
    organization: {
      pt: 'Imprensa Regional — Rio de Janeiro',
      en: 'Regional Press — Rio de Janeiro',
    },
    role: {
      pt: 'Ex-Colunista',
      en: 'Former Columnist',
    },
    description: {
      pt: 'Artigos sobre cultura musical, arte sacra e história eclesiástica carioca na região da Tijuca.',
      en: 'Articles on musical culture, sacred art, and local church history in the traditional Tijuca neighborhood.',
    },
  },
]

/**
 * ============================================================================
 * PUBLICAÇÕES ACADÊMICAS & ANAIS DE CONGRESSOS
 * ============================================================================
 */
export const publications: Publication[] = []