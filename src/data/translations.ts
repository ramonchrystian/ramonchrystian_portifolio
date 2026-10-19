import type { Lang } from '../types'

export type TranslationKey =
  | 'nav.profile'
  | 'nav.ministry'
  | 'nav.teaching'
  | 'nav.academic'
  | 'nav.digital'
  | 'nav.contact'
  | 'hero.badge'
  | 'hero.headline'
  | 'hero.subheadline'
  | 'hero.cta.primary'
  | 'hero.cta.secondary'
  | 'hero.cta.digital'
  | 'hero.downloadCv'
  | 'hero.cvNotice'
  | 'profile.badge'
  | 'profile.title'
  | 'profile.subtitle'
  | 'profile.bio1'
  | 'profile.bio2'
  | 'profile.bio3'
  | 'academic.badge'
  | 'academic.title'
  | 'academic.subtitle'
  | 'academic.formalTitle'
  | 'academic.complementaryTitle'
  | 'ministry.badge'
  | 'ministry.title'
  | 'ministry.subtitle'
  | 'ministry.pillarsTitle'
  | 'ministry.experience.title'
  | 'ministry.experience.subtitle'
  | 'ministry.videosTitle'
  | 'ministry.videosSubtitle'
  | 'teaching.badge'
  | 'teaching.title'
  | 'teaching.subtitle'
  | 'teaching.workshops.title'
  | 'teaching.workshops.subtitle'
  | 'teaching.articles.title'
  | 'teaching.articles.subtitle'
  | 'teaching.publications.title'
  | 'teaching.publications.empty'
  | 'digital.badge'
  | 'digital.title'
  | 'digital.subtitle'
  | 'digital.description'
  | 'digital.caseStudy.context'
  | 'digital.caseStudy.objective'
  | 'digital.caseStudy.contribution'
  | 'digital.caseStudy.outcome'
  | 'digital.caseStudy.viewProject'
  | 'contact.badge'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.form.name'
  | 'contact.form.email'
  | 'contact.form.subject'
  | 'contact.form.message'
  | 'contact.form.send'
  | 'contact.form.success'
  | 'contact.direct'
  | 'contact.linkedinNote'
  | 'footer.copyright'
  | 'footer.location'
  | 'footer.designedFor'
  | 'theme.light'
  | 'theme.dark'

const translations: Record<TranslationKey, Record<Lang, string>> = {
  'nav.profile': {
    en: 'Ministry Profile',
    pt: 'Perfil Ministerial',
  },
  'nav.ministry': {
    en: 'Ministry & Worship',
    pt: 'Ministério & Adoração',
  },
  'nav.teaching': {
    en: 'Teaching & Formation',
    pt: 'Ensino & Formação',
  },
  'nav.academic': {
    en: 'Academic Formation',
    pt: 'Formação Acadêmica',
  },
  'nav.digital': {
    en: 'Digital Projects',
    pt: 'Projetos Digitais',
  },
  'nav.contact': {
    en: 'Contact',
    pt: 'Contato',
  },

  'hero.badge': {
    en: 'Sacred Music & Pastoral Ministry',
    pt: 'Música Sacra & Ministério Pastoral',
  },
  'hero.headline': {
    en: 'Serving the Church Through Worship, Teaching, and Digital Innovation.',
    pt: 'Servindo à Igreja por meio da Adoração, do Ensino e da Inovação Digital.',
  },
  'hero.subheadline': {
    en: 'Brazilian Baptist worship and music leader, Sacred Music graduate, and ministry educator with experience in local-church ministry, worship leadership, team development, teaching, and digital initiatives that serve the Church.',
    pt: 'Líder batista de música e adoração, bacharel em Música Sacra e educador ministerial, com experiência em ministério de igreja local, liderança musical, formação de equipes, ensino e desenvolvimento de iniciativas digitais a serviço da Igreja.',
  },
  'hero.cta.primary': {
    en: 'Explore My Ministry',
    pt: 'Conheça Minha Trajetória Ministerial',
  },
  'hero.cta.secondary': {
    en: 'Teaching & Publications',
    pt: 'Ensino e Publicações',
  },
  'hero.cta.digital': {
    en: 'Digital Projects for Ministry',
    pt: 'Projetos Digitais a Serviço do Ministério',
  },
  'hero.downloadCv': {
    en: 'Professional Resume (CV)',
    pt: 'Currículo Profissional (CV)',
  },
  'hero.cvNotice': {
    en: 'Documented CV available upon request for academic & ministerial committees.',
    pt: 'Currículo documentado disponível para comissões acadêmicas e ministeriais.',
  },

  'profile.badge': {
    en: 'Vocational Foundations',
    pt: 'Fundamentos Vocacionais',
  },
  'profile.title': {
    en: 'Ministerial Profile',
    pt: 'Perfil Ministerial',
  },
  'profile.subtitle': {
    en: 'An authentic convergence of sacred music, theological inquiry, and practical churchmanship.',
    pt: 'A convergência autêntica entre música sacra, formação teológica e serviço prático à igreja local.',
  },
  'profile.bio1': {
    en: 'My vocational journey is rooted in the intersection of sacred music, theological formation, and sustained service to the local church. Holding a Bachelor’s degree in Sacred Music from the South Brazil Baptist Theological Seminary (Seminário Teológico Batista do Sul do Brasil) and currently continuing theological studies, I have dedicated over a decade to worship leadership, musical direction, and volunteer discipleship across Baptist congregations in Rio de Janeiro.',
    pt: 'Minha trajetória vocacional está enraizada na convergência entre a música sacra, a formação teológica e o serviço contínuo à igreja local. Bacharel em Música Sacra pelo Seminário Teológico Batista do Sul do Brasil (STBSB) e atualmente dando continuidade à graduação em Teologia, dedico mais de uma década à liderança de adoração, direção musical e discipulado de equipes voluntárias em congregações batistas do Rio de Janeiro.',
  },
  'profile.bio2': {
    en: 'Rather than treating worship leadership as mere performance or musical aesthetics, my ministry centers on the pastoral character of congregational song — equipping the gathered body of Christ to sing the gospel with theological depth, liturgical intentionality, and musical excellence. This convictions-first approach informs weekly service orders, choir and band rehearsals, and pastoral collaboration.',
    pt: 'Em vez de encarar a música como mera performance de palco ou entretenimento litúrgico, meu ministério se concentra no caráter pastoral do canto congregacional — capacitando a igreja reunida a proclamar o evangelho com solidez bíblica, intencionalidade litúrgica e excelência artística. Essa postura fundamenta o planejamento de cultos, a regência de ensaios e a colaboração estreita com a liderança pastoral.',
  },
  'profile.bio3': {
    en: 'Complementing local-church service, I teach workshops, write educational essays on hymnody, and build digital resources like Letra Sonora. My aim is to bridge biblical truth, musical craftsmanship, and thoughtful technology to faithfully serve the contemporary Church.',
    pt: 'Complementando o ministério local, ministro workshops para músicos de igrejas, escrevo reflexões editoriais sobre hinódia e desenvolvo ferramentas digitais como o Letra Sonora. Meu propósito é articular verdade bíblica, sensibilidade musical e inovação responsável a serviço contínuo do Reino.',
  },

  'academic.badge': {
    en: 'Academic Formation',
    pt: 'Formação Acadêmica',
  },
  'academic.title': {
    en: 'Academic Background & Studies',
    pt: 'Formação Acadêmica & Estudos',
  },
  'academic.subtitle': {
    en: 'Formal theological and musical degrees, complemented by continuous education in technology and performance.',
    pt: 'Graduações formais em música sacra e teologia, complementadas por estudos em tecnologia e performance musical.',
  },
  'academic.formalTitle': {
    en: 'Higher Education Degrees',
    pt: 'Graus Acadêmicos Superiores',
  },
  'academic.complementaryTitle': {
    en: 'Complementary Studies & Specialized Training',
    pt: 'Estudos Complementares & Formação Especializada',
  },

  'ministry.badge': {
    en: 'Local Church Calling',
    pt: 'Vocação na Igreja Local',
  },
  'ministry.title': {
    en: 'Ministry & Worship',
    pt: 'Ministério & Adoração',
  },
  'ministry.subtitle': {
    en: 'Over a decade of pastoral service in local congregations — planning services, directing music, arranging scores, and mentoring volunteer teams.',
    pt: 'Mais de uma década de serviço pastoral na igreja local — planejando cultos, dirigindo equipes musicais, elaborando arranjos e formando voluntários.',
  },
  'ministry.pillarsTitle': {
    en: 'Pillars of Ministerial Practice',
    pt: 'Pilares da Prática Ministerial',
  },
  'ministry.experience.title': {
    en: 'Ministry Trajectory & Local Church Service',
    pt: 'Trajetória Ministerial & Serviço à Igreja Local',
  },
  'ministry.experience.subtitle': {
    en: 'Documented roles and responsibilities across Baptist congregations in Rio de Janeiro, Brazil.',
    pt: 'Cargos e responsabilidades documentados em comunidades batistas do Rio de Janeiro.',
  },
  'ministry.videosTitle': {
    en: 'Worship Leadership & Repertoire Recordings',
    pt: 'Gravações de Louvor & Repertório Litúrgico',
  },
  'ministry.videosSubtitle': {
    en: 'Documented congregational worship, instrumental arrangements, and vocal rehearsals.',
    pt: 'Registros documentais de louvor congregacional, arranjos instrumentais e ensaios vocais.',
  },

  'teaching.badge': {
    en: 'Education & Intellectual Production',
    pt: 'Ensino & Produção Intelectual',
  },
  'teaching.title': {
    en: 'Teaching, Workshops & Publications',
    pt: 'Ensino, Workshops & Publicações',
  },
  'teaching.subtitle': {
    en: 'Training worship leaders, musicians, and ministry teams in theological foundations, congregational singing, and practical rehearsal disciplines.',
    pt: 'Capacitando líderes de louvor, músicos e equipes ministeriais em fundamentos teológicos, canto congregacional e disciplina prática de ensaios.',
  },
  'teaching.workshops.title': {
    en: 'Selected Workshops & Ministerial Conferences',
    pt: 'Workshops & Conferências Ministeriais Selecionadas',
  },
  'teaching.workshops.subtitle': {
    en: 'Representative selection of teaching sessions delivered in local churches, conventions, and regional gatherings.',
    pt: 'Seleção representativa de aulas, palestras e treinamentos ministrados em igrejas e congressos.',
  },
  'teaching.articles.title': {
    en: 'Editorial Publications & Ministry Essays',
    pt: 'Publicações Editoriais & Ensaios Ministeriais',
  },
  'teaching.articles.subtitle': {
    en: 'Reflections published through Letra Sonora on liturgy, hymnody, and pastoral stewardship of music.',
    pt: 'Artigos e ensaios publicados pelo Letra Sonora sobre liturgia, hinódia e mordomia pastoral da música.',
  },
  'teaching.publications.title': {
    en: 'Academic Publications & Conference Papers',
    pt: 'Publicações Acadêmicas & Anais de Congressos',
  },
  'teaching.publications.empty': {
    en: 'Future academic papers, journal contributions, and thesis publications will be documented here.',
    pt: 'Futuras publicações em revistas teológicas e participações acadêmicas em congressos serão registradas aqui.',
  },

  'digital.badge': {
    en: 'Digital Innovation for Ministry',
    pt: 'Inovação Digital a Serviço do Ministério',
  },
  'digital.title': {
    en: 'Digital Projects for Ministry',
    pt: 'Projetos Digitais a Serviço do Ministério',
  },
  'digital.subtitle': {
    en: 'Technology applied with purpose — building content platforms, organization tools, and operational workflows that serve churches and Christian education.',
    pt: 'Tecnologia aplicada com propósito — construindo plataformas de conteúdo, ferramentas de organização e fluxos que servem à Igreja.',
  },
  'digital.description': {
    en: 'Complementing my ministerial calling, web development and digital tools enable me to solve concrete challenges in church life — from liturgical resource distribution to ministry administration.',
    pt: 'Como dimensão complementar à minha vocação ministerial, o desenvolvimento web me permite resolver desafios concretos da vida da igreja — da distribuição de recursos formativos à gestão de equipes.',
  },
  'digital.caseStudy.context': {
    en: 'Context & Challenge',
    pt: 'Contexto & Desafio',
  },
  'digital.caseStudy.objective': {
    en: 'Objective',
    pt: 'Objetivo',
  },
  'digital.caseStudy.contribution': {
    en: 'Personal Contribution',
    pt: 'Contribuição Pessoal',
  },
  'digital.caseStudy.outcome': {
    en: 'Status & Verifiable Outcome',
    pt: 'Estágio & Resultado Verificável',
  },
  'digital.caseStudy.viewProject': {
    en: 'Visit Project',
    pt: 'Acessar Projeto',
  },

  'contact.badge': {
    en: 'Dialogue & Collaboration',
    pt: 'Diálogo & Colaboração',
  },
  'contact.title': {
    en: 'Get in Touch',
    pt: 'Entre em Contato',
  },
  'contact.subtitle': {
    en: 'Welcoming invitations for worship ministry teaching, workshop invitations, academic collaboration, and ministry consultation.',
    pt: 'Aberto a convites para ministração de workshops, ensino congregacional, parcerias acadêmicas e diálogos ministeriais.',
  },
  'contact.form.name': {
    en: 'Your Name',
    pt: 'Seu Nome',
  },
  'contact.form.email': {
    en: 'Your Email',
    pt: 'Seu E-mail',
  },
  'contact.form.subject': {
    en: 'Subject',
    pt: 'Assunto',
  },
  'contact.form.message': {
    en: 'Your Message',
    pt: 'Sua Mensagem',
  },
  'contact.form.send': {
    en: 'Send Message',
    pt: 'Enviar Mensagem',
  },
  'contact.form.success': {
    en: 'Thank you for reaching out. Your message has been sent, and I will respond promptly.',
    pt: 'Obrigado pelo contato. Sua mensagem foi enviada e responderei em breve.',
  },
  'contact.direct': {
    en: 'Direct Channels & Verified Profiles:',
    pt: 'Canais Diretos & Perfis Verificados:',
  },
  'contact.linkedinNote': {
    en: 'Note: LinkedIn profile reflects complementary technical web development background.',
    pt: 'Nota: O perfil no LinkedIn reflete a atuação complementar em desenvolvimento web.',
  },

  'footer.copyright': {
    en: 'All rights reserved.',
    pt: 'Todos os direitos reservados.',
  },
  'footer.location': {
    en: 'Rio de Janeiro, Brazil',
    pt: 'Rio de Janeiro, Brasil',
  },
  'footer.designedFor': {
    en: 'Worship, Ministry Education & Digital Innovation',
    pt: 'Música Sacra, Educação Ministerial & Inovação Digital',
  },
  'theme.light': {
    en: 'Light Mode',
    pt: 'Modo Claro',
  },
  'theme.dark': {
    en: 'Dark Mode',
    pt: 'Modo Escuro',
  },
}

export default translations
