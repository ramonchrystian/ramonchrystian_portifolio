import { defineField, defineType } from 'sanity'

export const academicDegree = defineType({
  name: 'academicDegree',
  title: 'Formação & Cursos Adicionais',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome do Curso / Titulação',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Instituição de Ensino / Escola',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Tipo de Formação',
      type: 'string',
      options: {
        list: [
          { title: 'Grau Superior / Graduação Formal', value: 'formal' },
          { title: 'Curso Adicional / Aperfeiçoamento (Aluno)', value: 'complementary' },
        ],
        layout: 'radio',
      },
      initialValue: 'formal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'periodLabel',
      title: 'Situação / Período (ex: Concluído, Em andamento)',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição / Ementa do Curso',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Ícone Representativo',
      type: 'string',
      options: {
        list: [
          { title: 'Música / Partitura (music)', value: 'music' },
          { title: 'Teologia / Livro (bookOpen)', value: 'bookOpen' },
          { title: 'Guitarra / Instrumento / Artes (guitar)', value: 'guitar' },
          { title: 'Tecnologia / Código (code)', value: 'code' },
        ],
      },
      initialValue: 'music',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPrimary',
      title: 'Destaque Prioritário?',
      type: 'boolean',
      initialValue: true,
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
      subtitle: 'institution',
      description: 'category',
    },
  },
})
