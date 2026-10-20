import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ramon Chrystian — Painel Editorial',

  projectId: 'ankkhvgz',
  dataset: 'production',

  plugins: [
    structureTool({
      title: 'Conteúdo do Site',
    }),
    visionTool({
      title: 'GROQ Playground',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
