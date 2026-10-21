import { defineField, defineType } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Galeria de Fotos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Foto',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Arquivo da Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Legenda / Contexto',
      type: 'localeText',
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Culto & Adoração', value: 'worship' },
          { title: 'Cantatas & Especiais', value: 'cantata' },
          { title: 'Coro & Orquestra', value: 'choir' },
          { title: 'Workshops & Ensino', value: 'workshop' },
          { title: 'Retratos & Ensaios', value: 'portrait' },
        ],
      },
      initialValue: 'worship',
    }),
    defineField({
      name: 'date',
      title: 'Ano / Mês do Registro (ex: 2024, Dez 2023)',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição (1, 2, 3...)',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Ordem Numérica',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title.pt',
      subtitle: 'category',
      media: 'image',
    },
  },
})
