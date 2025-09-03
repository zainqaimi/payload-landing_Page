import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const ContentBlock: Block = {
  slug: 'content',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
  ],
}
