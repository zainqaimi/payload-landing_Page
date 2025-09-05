import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import HeroBlock from './components/HeroBlock'
import { Page } from '@/payload-types'
import ContentBlock from './components/ContentBlock'
import NewsLetterFormBLock from './components/NewsLetterFormBlock'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'landing-page' },
    },
  })
  if (!page) {
    return <div> page not found </div>
  }
  const renderBlocks = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />
      case 'content':
        return <ContentBlock block={block} key={block.id} />
      case 'newsletterform':
        return <NewsLetterFormBLock block={block} key={block.id} />
      default:
        return null
    }
  }
  return (
    <>
      <div> {page.title} </div>
      <div className="page">{page.layout?.map((block) => renderBlocks(block))}</div>
    </>
  )
}
