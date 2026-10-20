import { defineType } from 'sanity'

export const localeText = defineType({
  name: 'localeText',
  title: 'Texto Bilíngue (Longo)',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'pt',
      title: 'Português (PT)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'en',
      title: 'English (EN)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
  ],
})
