'use client'

import { Page, Media } from '@/payload-types'
import Image from 'next/image'
import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

type HeroBlockProps = Extract<Page['layout'][0], { blockType: 'hero' }>

export default function HeroBlock({ block }: { block: HeroBlockProps }) {
  return (
    <section className="hero">
      <h1 className="text-4xl font-bold mb-4">{block.heading}</h1>
      {/* <div className="prose max-w-none mb-6"><RichText data={block.subheading} /></div> */}
      {block.image && typeof block.image === 'object' && (
        <div className="mb-6">
          <Image
            src={(block.image as Media).url || ''}
            alt={(block.image as Media).alt || block.heading}
            width={800}
            height={400}
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
      {block.cta_button && (
        <a
          href={block.cta_button.url}
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          {block.cta_button.label}
        </a>
      )}
    </section>
  )
}
