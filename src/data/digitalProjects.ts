import type { DigitalProjectCaseStudy } from '../types'

export const digitalMinistryProjects: DigitalProjectCaseStudy[] = [
  {
    id: 'letra-sonora',
    name: 'Letra Sonora',
    isFeatured: true,
    tagline: {
      en: 'Authorial platform connecting sacred music, hymnody, pastoral liturgy, and educational resources for worship ministries.',
      pt: 'Plataforma autoral que conecta música sacra, hinódia, liturgia pastoral e recursos formativos para ministérios de louvor.',
    },
    badge: {
      en: 'Flagship Authorial Project',
      pt: 'Projeto Autoral em Destaque',
    },
    context: {
      en: 'Local church worship leaders often struggle to access well-curated resources that unite theological depth, historical hymnody, and practical rehearsal guidance in the Portuguese-speaking world.',
      pt: 'Líderes de louvor e músicos na igreja local frequentemente carecem de recursos formativos que integrem profundidade teológica, hinódia histórica e direcionamento prático de ensaio e liturgia em língua portuguesa.',
    },
    objective: {
      en: 'Build a durable digital ecosystem that produces editorial reflections, curated hymnological studies, worship planning materials, and pastoral training for ministry teams.',
      pt: 'Construir um ecossistema digital duradouro de produção editorial, estudos hinológicos, materiais de apoio ao planejamento litúrgico e formação pastoral de equipes de louvor.',
    },
    contribution: {
      en: 'Created and authored the initiative from inception: editorial writing, theological curation, website design, technical infrastructure, and regular bilingual content distribution.',
      pt: 'Concepção e autoria integral do projeto: redação editorial, curadoria teológica, design de interface, implementação da infraestrutura técnica e distribuição periódica de conteúdo formativo.',
    },
    statusOrOutcome: {
      en: 'Active platform with regular readership among pastors, worship leaders, and musicians seeking thoughtful, Christ-centered ministry resources.',
      pt: 'Plataforma ativa com publicação contínua e alcance crescente entre pastores, líderes de louvor e músicos comprometidos com a reflexão bíblica.',
    },
    tags: ['Theological Education', 'Worship Leadership', 'Editorial', 'Hymnody', 'Web Platform'],
    url: 'https://letrasonora.com.br',
  },
  {
    id: 'adore-app',
    name: 'Adore App',
    isFeatured: false,
    tagline: {
      en: 'Digital tool initiative dedicated to local-church worship ministry planning and volunteer team management.',
      pt: 'Iniciativa de ferramenta digital voltada ao planejamento litúrgico e à gestão de equipes de adoração na igreja local.',
    },
    badge: {
      en: 'Initiative in Development',
      pt: 'Iniciativa em Desenvolvimento',
    },
    context: {
      en: 'Managing volunteer worship teams, weekly service setlists, song keys, and task assignments in local congregations frequently relies on scattered chats and inefficient spreadsheets.',
      pt: 'A coordenação de voluntários, elaboração de setlists, definição de tonalidades e distribuição de tarefas em igrejas locais frequentemente sofrem com a dispersão de mensagens e planilhas desconexas.',
    },
    objective: {
      en: 'Design an intuitive web and mobile workflow application tailored specifically to the weekly rhythm of church music directors and volunteer musicians.',
      pt: 'Projetar uma aplicação web e móvel adaptada especificamente à rotina semanal de diretores musicais de igreja e voluntários de ministérios de louvor.',
    },
    contribution: {
      en: 'Product architecture, user experience design based on over a decade of personal worship leadership, and frontend prototype implementation for setlist and team coordination modules.',
      pt: 'Arquitetura do produto, especificação de fluxos e experiência do usuário fundamentada em mais de uma década de liderança prática, e desenvolvimento dos protótipos de módulos de setlist e escala.',
    },
    statusOrOutcome: {
      en: 'Under active conceptualization and iterative prototyping, with core service-planning and repertoire-management modules currently being refined.',
      pt: 'Em estágio de desenvolvimento e prototipagem iterativa, com foco no refinamento dos módulos essenciais de planejamento de culto e catálogo de repertório.',
    },
    tags: ['React', 'TypeScript', 'Ministry Operations', 'Product Design', 'Prototype'],
  },
  {
    id: 'catedral-rio',
    name: 'Catedral Presbiteriana do Rio de Janeiro',
    isFeatured: false,
    tagline: {
      en: 'Institutional web development for a historic religious community in downtown Rio de Janeiro.',
      pt: 'Desenvolvimento web institucional para uma comunidade cristã histórica no centro do Rio de Janeiro.',
    },
    badge: {
      en: 'Institutional Project',
      pt: 'Projeto Institucional',
    },
    context: {
      en: 'The Presbyterian Cathedral of Rio needed a modern, accessible web portal to communicate gathering schedules, ministry initiatives, and pastoral announcements to both its historic congregation and visitors.',
      pt: 'A Catedral Presbiteriana do Rio necessitava de um portal web acessível e moderno para comunicar horários de cultos, atividades ministeriais e comunicados pastorais para membros e visitantes.',
    },
    objective: {
      en: 'Deliver an elegant, stable, and responsive institutional website that honors the community’s heritage while ensuring frictionless access on mobile devices.',
      pt: 'Entregar um site institucional estável, elegante e responsivo, que respeitasse a tradição histórica da igreja garantindo acesso rápido e fluido em dispositivos móveis.',
    },
    contribution: {
      en: 'Participated in the web development process, front-end layout implementation, responsive styling, and integration of institutional information architecture.',
      pt: 'Atuação no desenvolvimento web, implementação de interfaces responsivas, estruturação da arquitetura de informações e suporte à integração dos canais de comunicação da comunidade.',
    },
    statusOrOutcome: {
      en: 'Successfully published institutional portal serving the ongoing weekly communication and visitor engagement of the congregation.',
      pt: 'Portal institucional no ar, servindo à comunicação contínua e ao acolhimento de visitantes e membros da congregação.',
    },
    tags: ['Web Development', 'Responsive Design', 'Church Communication', 'Institutional'],
    url: 'https://catedralrio.org',
  },
  {
    id: 'pibmb-ai',
    name: 'Internal AI Workflow Initiative — PIBMB',
    isFeatured: false,
    tagline: {
      en: 'Institutional initiative researching and adapting artificial intelligence tooling to assist church administration and ministry workflows.',
      pt: 'Iniciativa institucional de pesquisa e adaptação de ferramentas de inteligência artificial para apoio a fluxos de trabalho e processos ministeriais.',
    },
    badge: {
      en: 'Ministry Innovation Case',
      pt: 'Estudo de Caso em Inovação Ministerial',
    },
    context: {
      en: 'Church ministries face repetitive organizational tasks — drafting internal announcements, organizing educational documentation, and structuring schedule logistics — that divert pastoral time from relational care.',
      pt: 'Ministérios eclesiais enfrentam tarefas rotineiras — redação preliminar de comunicados internos, organização de materiais de ensino e estruturação de escalas — que demandam tempo que poderia ser dedicado ao cuidado pastoral.',
    },
    objective: {
      en: 'Investigate, test, and safely integrate private generative AI workflows into daily church operational tasks without compromising confidentiality, data privacy, or theological alignment.',
      pt: 'Investigar, testar e adaptar fluxos assistidos por IA nas tarefas operacionais da igreja, garantindo estrita confidencialidade, privacidade de dados e discernimento teológico.',
    },
    contribution: {
      en: 'Exploration of practical AI prompt patterns, evaluation of workflow automation tools, and creation of structured internal guidelines for ethical and constructive technology use in ministry.',
      pt: 'Investigação conceitual de fluxos de produtividade com IA, avaliação de ferramentas seguras e estruturação de diretrizes éticas para uso responsável da tecnologia a serviço da rotina da igreja.',
    },
    statusOrOutcome: {
      en: 'Demonstrated concrete practical viability in streamlining administrative prep work while fully respecting church member privacy and institutional integrity.',
      pt: 'Viabilidade demonstrada na otimização de rotinas preparatórias e documentais, mantendo absoluto sigilo e integridade sobre dados institucionais.',
    },
    tags: ['AI Workflows', 'Ethics & Ministry', 'Workflow Automation', 'Church Operations'],
  },
]