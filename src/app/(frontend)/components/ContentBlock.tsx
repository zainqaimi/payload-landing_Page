import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
type ContnetBlockProps = Extract<Page['layout'][0], { blockType: 'content' }>

export default function ContentBlock({ block }: { block: ContnetBlockProps }) {
  return (
    <>
      <div>{block.heading}</div>
      <RichText data={block.content} />
    </>
  )
}
