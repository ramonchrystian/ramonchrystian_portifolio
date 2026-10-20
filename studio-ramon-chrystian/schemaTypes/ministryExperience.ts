import { defineField, defineType } from 'sanity'

export const ministryExperience = defineType({
  name: 'ministryExperience',
  title: 'Trajetória Ministerial (Igrejas)',
  type: 'document',
  fields: [
    defineField({
      name: 'church',
      title: 'Igreja / Congregação e Localidade',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Cargo / Função Ministerial',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Período (ex: 2024 — Atual / 2021 — 2024)',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startYear',
      title: 'Ano de Início (para ordenação cronológica)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isCurrent',
      title: 'Ministério Atual?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsabilidades Práticas',
      type: 'array',
      of: [{ type: 'localeText' }],
    }),
    defineField({
      name: 'highlights',
      title: 'Destaques Ministeriais',
      type: 'array',
      of: [{ type: 'localeText' }],
    }),
  ],
  orderings: [
    {
      title: 'Mais Recentes Primeiro',
      name: 'startYearDesc',
      by: [{ field: 'startYear', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'church.pt',
      subtitle: 'role.pt',
      description: 'period.pt',
    },
  },
})
