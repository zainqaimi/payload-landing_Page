import { ContentBlock } from '@/blocks/ContentBlock'
import { HeroBlock } from '@/blocks/HeroBlock'
import { NewsLetterFormBlock } from '@/blocks/NewsLetterFormBlock'
import { CollectionConfig } from 'payload'

const pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [HeroBlock, ContentBlock, NewsLetterFormBlock],
    },
  ],
}

export default pages
