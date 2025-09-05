import { Block } from 'payload'

export const NewsLetterFormBlock: Block = {
  slug: 'newsletterform',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: false,
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
  ],
}
