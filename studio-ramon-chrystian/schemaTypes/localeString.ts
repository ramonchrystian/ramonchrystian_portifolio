import { defineType } from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  title: 'Texto Bilíngue (Curto)',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'pt',
      title: 'Português (PT)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'en',
      title: 'English (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})
