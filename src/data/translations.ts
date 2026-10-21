import type { Lang } from '../types'

export type TranslationKey =
  | 'nav.profile'
  | 'nav.ministry'
  | 'nav.teaching'
  | 'nav.academic'
  | 'nav.digital'
  | 'nav.contact'
  | 'nav.partner'
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
  | 'academic.credentials.title'
  | 'academic.credentials.subtitle'
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
  | 'teaching.books.badge'
  | 'teaching.books.title'
  | 'teaching.books.subtitle'
  | 'teaching.editorial.title'
  | 'teaching.editorial.desc'
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
  | 'partnership.badge'
  | 'partnership.title'
  | 'partnership.subtitle'
  | 'partnership.journey.title'
  | 'partnership.journey.desc'
  | 'partnership.vision.title'
  | 'partnership.vision.desc'
  | 'partnership.nextStep.title'
  | 'partnership.nextStep.desc'
  | 'partnership.fronts.title'
  | 'partnership.front1.title'
  | 'partnership.front1.desc'
  | 'partnership.front2.title'
  | 'partnership.front2.desc'
  | 'partnership.front3.title'
  | 'partnership.front3.desc'
  | 'partnership.cta.partner'
  | 'partnership.cta.workshop'
  | 'truett.badge'
  | 'truett.title'
  | 'truett.subtitle'
  | 'truett.body'
  | 'truett.cta'
  | 'truett.pillar1.title'
  | 'truett.pillar1.desc'
  | 'truett.pillar2.title'
  | 'truett.pillar2.desc'
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
  'nav.partner': {
    en: 'Partner with Us',
    pt: 'Quero ser um Parceiro',
  },

  'hero.badge': {
    en: 'Ordained Minister of Music · B.S.M. in Sacred Music (FABAT/STBSB) & B.Th. Candidate in Theology (FABAT)',
    pt: 'Ministro de Música · Bacharel em Música Sacra (FABAT/STBSB) e Bacharelando em Teologia (FABAT)',
  },
  'hero.headline': {
    en: 'Serving the Church Through Worship, Teaching, and Digital Innovation.',
    pt: 'Servindo à Igreja por meio da Adoração, do Ensino e da Inovação Digital.',
  },
  'hero.subheadline': {
    en: 'Ordained Minister of Music, Bachelor of Sacred Music (FABAT/STBSB) and Bachelor of Theology candidate (FABAT), dedicated for nearly two decades (since 2007) to biblical worship leadership, team discipleship, teaching, and thoughtful digital tools that serve the local church.',
    pt: 'Ministro de Música, Bacharel em Música Sacra (FABAT/STBSB) e Bacharelando em Teologia (FABAT), dedicado há quase duas décadas (desde 2007) à condução bíblica do louvor congregacional, discipulado de equipes, ensino e ferramentas digitais a serviço da igreja local.',
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
    en: 'My vocational journey is rooted in the intersection of sacred music, theological formation, and sustained service to the local church. Holding a Bachelor’s degree in Sacred Music from FABAT/STBSB (with a cumulative GPA of 9.06 / 10.0) and currently concluding the Bachelor of Theology at FABAT, I have dedicated nearly two decades (since 2007) to pastoral worship leadership, choral and orchestral conducting, and volunteer discipleship across Baptist congregations in Rio de Janeiro.',
    pt: 'Minha trajetória vocacional está enraizada na convergência entre a música sacra, a formação teológica e o serviço contínuo à igreja local. Bacharel em Música Sacra pela FABAT/STBSB (com média geral acumulada de 9,06 / 10,0) e atualmente concluindo o Bacharelado em Teologia na FABAT, dedico quase duas décadas (desde 2007) à condução pastoral do louvor, regência coral e orquestral, e discipulado de equipes voluntárias em congregações batistas do Rio de Janeiro.',
  },
  'profile.bio2': {
    en: 'Rather than treating worship leadership as mere performance or musical aesthetics, my ministry centers on the pastoral character of congregational song — equipping the gathered body of Christ to sing the gospel with theological depth, liturgical intentionality, and musical excellence. This convictions-first approach informs weekly service orders, choir and band rehearsals, and pastoral collaboration.',
    pt: 'Em vez de encarar a música como mera performance de palco ou entretenimento litúrgico, meu ministério se concentra no caráter pastoral do canto congregacional — capacitando a igreja reunida a proclamar o evangelho com solidez bíblica, intencionalidade litúrgica e excelência artística. Essa postura fundamenta o planejamento de cultos, a regência de ensaios e a colaboração estreita com a liderança pastoral.',
  },
  'profile.bio3': {
    en: 'Complementing local-church service, I teach workshops for worship leaders, write educational books and essays on hymnody, and build digital platforms like Letra Sonora (founded in 2008). He has been married since 2011 to Sabrina Lima (physical therapist), and they are the proud parents of two sons, Daniel Lucas and Davi Lucas.',
    pt: 'Complementando o ministério local, ministro workshops em diversas associações estaduais, escrevo livros e ensaios sobre hinódia e desenvolvo plataformas digitais como o Letra Sonora (nascido em 2008). É casado desde 2011 com Sabrina Lima (fisioterapeuta) e pai de Daniel Lucas e Davi Lucas.',
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
    en: 'Formal theological and musical degrees, complemented by continuous education in technology, leadership, and performance.',
    pt: 'Graduações formais em música sacra e teologia, complementadas por estudos em tecnologia, liderança cristã e performance musical.',
  },
  'academic.formalTitle': {
    en: 'Higher Education Degrees',
    pt: 'Graus Acadêmicos Superiores',
  },
  'academic.complementaryTitle': {
    en: 'Ministerial Leadership & Complementary Musical Studies',
    pt: 'Liderança Ministerial & Estudos Musicais Complementares',
  },
  'academic.credentials.title': {
    en: 'Verified International Technical Credentials',
    pt: 'Credenciais Técnicas Internacionais Verificadas',
  },
  'academic.credentials.subtitle': {
    en: 'Official certifications from Google, Meta, and the University of Michigan (Coursera & LearnQuest).',
    pt: 'Certificações oficiais conferidas pelo Google, Meta e Universidade de Michigan (Coursera & LearnQuest).',
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
    en: 'Nearly two decades (since 2007) of pastoral service in local congregations — planning services, directing choirs and bands, arranging scores, and mentoring volunteer teams.',
    pt: 'Quase duas décadas (desde 2007) de serviço pastoral na igreja local — planejando cultos, regendo coros e orquestras, elaborando partituras e formando voluntários.',
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
    en: 'Teaching, Publications & Editorial Outreach',
    pt: 'Ensino, Livros Publicados & Atuação Editorial',
  },
  'teaching.subtitle': {
    en: 'Training worship leaders, seminary students, and church musicians across Brazil through seminary teaching, published books, and practical workshops.',
    pt: 'Capacitando ministros, seminaristas e líderes de louvor pelo Brasil por meio de docência em seminários, livros publicados e workshops práticos.',
  },
  'teaching.books.badge': {
    en: 'Published Books & Editorial Contributions',
    pt: 'Livros Publicados & Atuação Editorial',
  },
  'teaching.books.title': {
    en: 'Published Books & Pastoral Literature',
    pt: 'Livros Publicados & Literatura Pastoral',
  },
  'teaching.books.subtitle': {
    en: 'Practical, theological works addressing local-church leadership tensions, biblical renewal, and pastoral longevity.',
    pt: 'Obras voltadas a pastores, líderes e ministros de louvor, abordando saúde emocional, tensões da liderança e renovação bíblica.',
  },
  'teaching.editorial.title': {
    en: 'Editorial Columns & Periodicals',
    pt: 'Atuação Editorial & Periódicos',
  },
  'teaching.editorial.desc': {
    en: 'Contributing writer for Louvor and Diálogo e Ação magazines (Editora JUERP — Brazilian Baptist Convention), columnist for the Prazer da Palavra theological portal, and former columnist for the Tijuca em Foco newspaper (RJ).',
    pt: 'Articulista colaborador das revistas Louvor e Diálogo e Ação (Editora JUERP — Convenção Batista Brasileira), colunista do portal Prazer da Palavra e ex-colunista do jornal Tijuca em Foco (RJ).',
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
    en: 'Letra Sonora — Editorial Essays on Liturgy & Hymnody',
    pt: 'Letra Sonora — Ensaios Editoriais sobre Liturgia & Hinódia',
  },
  'teaching.articles.subtitle': {
    en: 'Reflections published through Letra Sonora (founded 2008) on congregational singing, sacred rest, and liturgical excellence.',
    pt: 'Artigos e ensaios publicados pelo Letra Sonora (nascido em 2008) sobre canto congregacional, descanso sagrado e solidez litúrgica.',
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
    en: 'Digital Projects, Worship Tools & Audio Engineering',
    pt: 'Projetos Digitais, Worship Tools & Engenharia de Áudio',
  },
  'digital.subtitle': {
    en: 'Real digital initiatives, ministry applications, localized worship tools, and church acoustic engineering serving local communities.',
    pt: 'Projetos web reais, plataformas formativas, tradução de ferramentas globais de adoração e engenharia de áudio a serviço da Igreja.',
  },
  'digital.description': {
    en: 'Complementing my pastoral calling, software engineering and audio technologies provide tangible solutions to local church administration, liturgical planning, and Sunday gathering excellence.',
    pt: 'Como dimensão complementar à vocação pastoral, a engenharia de software e a tecnologia de áudio proporcionam soluções tangíveis para a liturgia, a formação continuada e a excelência acústica do culto.',
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

  'partnership.badge': {
    en: 'Vocational Horizon & Ministry Partnership',
    pt: 'Horizonte Vocacional & Parceria Ministerial',
  },
  'partnership.title': {
    en: 'Truett Seminary (Baylor University) & Family Sending Mission',
    pt: 'Truett Seminary (Baylor University) & Envio Familiar',
  },
  'partnership.subtitle': {
    en: 'Preparation for the Master of Divinity (MDiv) at George W. Truett Theological Seminary (Baylor University, Waco, Texas) — Fall 2027.',
    pt: 'Preparação para o Master of Divinity (MDiv) no George W. Truett Theological Seminary (Baylor University, Waco, Texas) — Fall 2027.',
  },
  'partnership.journey.title': {
    en: 'The Ministerial Journey',
    pt: 'A Caminhada',
  },
  'partnership.journey.desc': {
    en: 'Nearly 20 years serving local Baptist congregations in full-time ministry — conducting choirs and orchestras, directing music schools, mentoring volunteer musicians, and authoring pastoral works for worship leaders.',
    pt: 'Quase duas décadas servindo igrejas batistas locais em tempo integral, regendo coros e orquestras, dirigindo escolas de música, formando equipes e escrevendo para líderes.',
  },
  'partnership.vision.title': {
    en: 'The Theological Vision',
    pt: 'A Visão',
  },
  'partnership.vision.desc': {
    en: 'Deepening the vital integration between biblical theology, the revitalization of congregational worship, and the relational and pastoral health of church musicians and leaders.',
    pt: 'Aprofundar a integração entre teologia bíblica, revitalização do culto congregacional e a saúde pastoral de músicos e líderes.',
  },
  'partnership.nextStep.title': {
    en: 'The Next Step (Fall 2027)',
    pt: 'O Próximo Passo (Fall 2027)',
  },
  'partnership.nextStep.desc': {
    en: 'Preparation for the Master of Divinity (MDiv) at George W. Truett Theological Seminary (Baylor University, Waco, Texas), in family mission together with wife Sabrina Lima (physical therapist) and sons Daniel Lucas and Davi Lucas.',
    pt: 'Preparação para o Master of Divinity (MDiv) no George W. Truett Theological Seminary (Baylor University, Waco, Texas), em missão familiar junto com a esposa Sabrina e os filhos Daniel e Davi.',
  },
  'partnership.fronts.title': {
    en: 'Three Pillars of Ministry Partnership (Initial Arrival in the USA)',
    pt: 'Três Frentes de Parceria Ministerial (Chegada nos EUA)',
  },
  'partnership.front1.title': {
    en: '1. Prayer & Intercession',
    pt: '1. Oração & Intercessão',
  },
  'partnership.front1.desc': {
    en: 'Spiritual covering, theological discernment, and guidance throughout the preparatory pathway, admissions process, and family transition.',
    pt: 'Cobertura espiritual por toda a jornada preparatória e transição familiar.',
  },
  'partnership.front2.title': {
    en: '2. Initial Transition & Arrival Fund',
    pt: '2. Fundo Inicial de Transição e Chegada nos EUA',
  },
  'partnership.front2.desc': {
    en: 'While actively pursuing academic merit scholarships at Truett Seminary, friends, churches, and partners are invited to cooperate specifically with the initial logistical arrival costs (international credential evaluation via SpanTran/TEC, consular and SEVIS fees, family airfare, and initial setup in Waco).',
    pt: 'Enquanto a família pleiteia bolsas acadêmicas de mérito junto ao seminário, amigos, irmãos e parceiros são convidados a cooperar especificamente com os custos logísticos iniciais de partida e chegada (validação internacional de diplomas via SpanTran/TEC, taxas consulares e SEVIS da família, passagens aéreas e instalação inicial em Waco).',
  },
  'partnership.front3.title': {
    en: '3. Church Workshops & Practical Training',
    pt: '3. Workshops e Treinamentos em Igrejas',
  },
  'partnership.front3.desc': {
    en: 'Invitations for Ramon to teach practical training sessions (Congregational Worship, Band Rehearsal Dynamics, Church Audio/Multimedia, or Leadership) in your local congregation, blessing your teams while cooperating with the family sending fund.',
    pt: 'Convites para que Ramon ministre oficinas práticas (Louvor Congregacional, Prática de Banda, Áudio/Multimídia para Igrejas ou Liderança) em igrejas locais, abençoando as equipes locais e cooperando com o envio da família.',
  },
  'partnership.cta.partner': {
    en: 'Become a Ministry Partner in this Mission',
    pt: 'Quero Ser um Parceiro neste Envio',
  },
  'partnership.cta.workshop': {
    en: 'Invite for a Church Workshop',
    pt: 'Convidar para Workshop na Minha Igreja',
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

  'truett.badge': {
    en: 'Vocational Horizon & MDiv Program',
    pt: 'Horizonte Vocacional & Programa MDiv',
  },
  'truett.title': {
    en: 'Support My Theological Studies at Truett Seminary',
    pt: 'Apoio aos Estudos Teológicos no Truett Seminary',
  },
  'truett.subtitle': {
    en: 'Preparation for the Master of Divinity (MDiv) at George W. Truett Theological Seminary (Baylor University, Texas).',
    pt: 'Preparação para o Master of Divinity (MDiv) no George W. Truett Theological Seminary (Baylor University, Texas).',
  },
  'truett.body': {
    en: 'To deepen my pastoral, musical, and biblical foundations in sustained service to the Church of Christ, I am preparing for the Master of Divinity (MDiv) program at George W. Truett Theological Seminary (Baylor University, Texas). Churches, pastors, and brothers and sisters led to walk alongside this ministerial path through prayer or scholarship support are warmly invited to connect.',
    pt: 'Com o propósito de aprofundar minha vocação pastoral e musical para o serviço de longo prazo à Igreja de Cristo, estou em preparação para o programa de Master of Divinity (MDiv) no George W. Truett Theological Seminary (Baylor University, Texas). Igrejas, pastores e irmãos que desejarem apoiar este projeto ministerial através de oração ou parceria financeira/bolsa de estudos são calorosamente convidados a caminhar conosco.',
  },
  'truett.cta': {
    en: 'Partner in My Theological Formation',
    pt: 'Apoiar Meus Estudos Teológicos',
  },
  'truett.pillar1.title': {
    en: 'Prayer & Intercession',
    pt: 'Oração & Intercessão',
  },
  'truett.pillar1.desc': {
    en: 'Spiritual covering and guidance throughout the preparation, admissions, and seminary journey.',
    pt: 'Cobertura espiritual e discernimento durante todo o período preparatório e jornada no seminário.',
  },
  'truett.pillar2.title': {
    en: 'Scholarship & Financial Support',
    pt: 'Apoio Financeiro & Bolsas de Estudo',
  },
  'truett.pillar2.desc': {
    en: 'Contributions directed toward tuition, seminary fees, and necessary theological research literature.',
    pt: 'Contribuições para custos de matrícula, anuidade e aquisição de bibliografia teológica essencial.',
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
    en: 'Sacred Music, Ministry Education & Digital Innovation',
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
