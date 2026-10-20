import { defineField, defineType } from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Vídeo / Produção Musical',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Vídeo / Cantata',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição / Contexto Litúrgico',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeId',
      title: 'ID do Vídeo no YouTube (ex: A016YqotIWc)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startTime',
      title: 'Tempo de Início em Segundos (opcional)',
      type: 'number',
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Categorias',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pillar',
      title: 'Eixo / Pilar',
      type: 'string',
      options: {
        list: [
          { title: 'Direção Musical & Produção', value: 'direction' },
          { title: 'Liderança de Adoração', value: 'worship' },
          { title: 'Arranjos & Instrumental', value: 'arrangements' },
        ],
      },
      initialValue: 'direction',
    }),
  ],
  preview: {
    select: {
      title: 'title.pt',
      subtitle: 'youtubeId',
    },
  },
})
