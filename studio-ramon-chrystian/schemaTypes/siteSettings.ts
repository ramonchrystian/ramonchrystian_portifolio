import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configurações do Site & Perfil',
  type: 'document',
  fields: [
    defineField({
      name: 'portrait',
      title: 'Foto / Retrato Oficial (Hero & Manutenção)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Headline Principal (Hero)',
      type: 'localeString',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Subheadline (Hero)',
      type: 'localeText',
    }),
    defineField({
      name: 'bioParagraphs',
      title: 'Parágrafos da Biografia (Seção Perfil)',
      type: 'array',
      of: [{ type: 'localeText' }],
    }),
    defineField({
      name: 'email',
      title: 'E-mail Principal de Contato',
      type: 'string',
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'Link do LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Link do Canal no YouTube',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Link do Instagram',
      type: 'url',
    }),
    defineField({
      name: 'curriculumPdf',
      title: 'Arquivo do Currículo Oficial (PDF)',
      type: 'file',
    }),
    defineField({
      name: 'googlePhotosAlbumUrl',
      title: 'Link do Álbum Completo no Google Fotos',
      type: 'url',
    }),
    defineField({
      name: 'isMaintenanceMode',
      title: 'Ativar Modo Manutenção para Visitantes?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'heroHeadline.pt',
      media: 'portrait',
    },
  },
})
