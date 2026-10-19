import type { SoftwareProject } from '../types'

export const projects: SoftwareProject[] = [
  {
    id: 'mark',
    name: 'Mark',
    description: {
      en: 'SaaS platform for smart scheduling and business management with intelligent automation and seamless client communication.',
      pt: 'Plataforma SaaS de agendamento inteligente e gestão de negócios com automação inteligente e comunicação fluida com clientes.',
    },
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://mark.com.br',
    highlights: {
      en: [
        'Multi-tenant architecture with role-based access',
        'Real-time scheduling with calendar sync',
        'Automated reminders and follow-ups via WhatsApp',
        'Dashboard with actionable business insights',
      ],
      pt: [
        'Arquitetura multi-tenant com acesso baseado em funções',
        'Agendamento em tempo real com sincronização de calendário',
        'Lembretes e follow-ups automáticos via WhatsApp',
        'Painel com insights acionáveis para o negócio',
      ],
    },
  },
  {
    id: 'cotify',
    name: 'Cotify',
    description: {
      en: 'Progressive Web App for generating interactive quotes with WhatsApp and Stripe integration. Designed for service providers to streamline proposal workflows.',
      pt: 'Progressive Web App para geração de orçamentos interativos com integração ao WhatsApp e Stripe. Ideal para prestadores de serviços agilizarem propostas.',
    },
    tags: ['React', 'TypeScript', 'PWA', 'Tailwind CSS', 'Stripe', 'WhatsApp API'],
    url: 'https://cotify.app',
    highlights: {
      en: [
        '100% offline-capable PWA with service worker caching',
        'Interactive PDF quote generation',
        'WhatsApp sharing with real-time status tracking',
        'Stripe payment link integration',
      ],
      pt: [
        'PWA com capacidade 100% offline e cache via service worker',
        'Geração interativa de orçamentos em PDF',
        'Compartilhamento via WhatsApp com acompanhamento em tempo real',
        'Integração com links de pagamento Stripe',
      ],
    },
  },
  {
    id: 'management-systems',
    name: 'Gestão & Web',
    description: {
      en: 'Custom web applications, infrastructure migrations, and automation systems for small-to-medium businesses and ministries.',
      pt: 'Aplicações web customizadas, migrações de infraestrutura e sistemas de automação para pequenas e médias empresas e ministérios.',
    },
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Docker', 'AWS'],
    highlights: {
      en: [
        'Legacy system migrations to modern stacks',
        'Custom CRM and membership management for churches',
        'Automated reporting and data visualization dashboards',
        'Cloud infrastructure setup and CI/CD pipelines',
      ],
      pt: [
        'Migrações de sistemas legados para stacks modernos',
        'CRM personalizado e gestão de membros para igrejas',
        'Relatórios automatizados e dashboards de visualização de dados',
        'Configuração de infraestrutura em nuvem e pipelines CI/CD',
      ],
    },
  },
]