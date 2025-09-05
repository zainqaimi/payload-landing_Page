'use client'
import { Page } from '@/payload-types'

type NewsletterBlockProps = Extract<Page['layout'][0], { blockType: 'newsletterform' }>

export default function NewsletterFormBlock({ block }: { block: NewsletterBlockProps }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!block.form || typeof block.form !== 'object') return
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  return (
    <>
      {typeof block?.form === 'object' && block?.form.title === 'newsletterform-1' && (
        <div className="w-1/2 justify-center m-auto p-10 my-14 border border-gray-500 rounded-md shadow-lg">
          <div className="text-4xl font-bold text-gray-600 text-center underline-offset-0">
            {block.heading}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {block.form.fields?.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (field: any) =>
                field?.name && (
                  <div key={field.name} className="flex flex-col">
                    <label htmlFor={field.name} className="mb-1 font-medium text-gray-700">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.blockType}
                      placeholder={field.label}
                      required={field.required}
                      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ),
            )}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {block.form.submitButtonLabel || 'SignUp'}
            </button>
          </form>
        </div>
      )}
    </>
  )
}
