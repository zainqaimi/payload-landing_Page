import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import HeroBlock from './components/HeroBlock'
import { Page } from '@/payload-types'
import ContentBlock from './components/ContentBlock'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
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
      default:
        return <p>Some thing went wrong...</p>
    }
  }
  return (
    <>
      <div> {page.title} </div>
      <div className="page">{page.layout?.map((block) => renderBlocks(block))}</div>
    </>
  )
}
