import { defineField, defineType } from 'sanity'

export const workshop = defineType({
  name: 'workshop',
  title: 'Workshop / Palestra / Formação',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Workshop / Palestra',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'event',
      title: 'Nome do Evento / Encontro',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Igreja / Instituição',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Cidade / Estado (ex: Rio de Janeiro, Petrópolis, RJ)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Mês e Ano (exibição ex: Nov 2026)',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateSort',
      title: 'Data Real (para ordenação cronológica)',
      type: 'date',
    }),
    defineField({
      name: 'type',
      title: 'Modalidade',
      type: 'string',
      options: {
        list: [
          { title: 'Workshop Prático', value: 'workshop' },
          { title: 'Palestra / Conferência', value: 'lecture' },
          { title: 'Treinamento / Sideman', value: 'training' },
        ],
        layout: 'radio',
      },
      initialValue: 'workshop',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.pt',
      subtitle: 'institution.pt',
      description: 'city',
    },
  },
})
