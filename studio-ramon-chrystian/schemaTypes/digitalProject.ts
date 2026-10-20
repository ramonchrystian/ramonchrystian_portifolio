import { defineField, defineType } from 'sanity'

export const digitalProject = defineType({
  name: 'digitalProject',
  title: 'Projeto Digital / Estudo de Caso',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do Projeto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Projeto em Destaque Principal (Flagship)?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'tagline',
      title: 'Subtítulo / Chamada Curta',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Selo / Badge (ex: Projeto Institucional)',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'context',
      title: 'Contexto & Desafio',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'objective',
      title: 'Objetivo',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contribution',
      title: 'Contribuição Pessoal',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statusOrOutcome',
      title: 'Estágio & Resultado',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Tecnologias',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'url',
      title: 'Link do Projeto (opcional)',
      type: 'url',
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de Capa / Mockup',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'badge.pt',
      media: 'coverImage',
    },
  },
})
