'use client'

import Image from 'next/image'
import logo from '../assets/logo.svg'
import { Trash2, Stars } from 'lucide-react'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism-okaidia.css'
import { useState } from 'react'

import { useCompletion } from 'ai/react'

export default function Home() {
  const [schema, setSchema] = useState('')

  const { completion, handleSubmit, input, handleInputChange } = useCompletion({
    api: '/api/generate-sql',
    body: {
      schema,
    },
  })

  console.log(completion)
  const result = completion

  return (
    <div className="max-w-[430px] mx-auto pt-12 pb-4 px-4">
      <header className="flex items-center justify-between">
        <Image src={logo} alt="logo" />
        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>
      <form
        onSubmit={handleSubmit}
        className="py-8 w-full flex flex-col text-foam"
      >
        <label className="text-lg font-light" htmlFor="schema">
          Cole aqui o seu codigo SQL
        </label>

        <Editor
          textareaId="schema"
          value={schema}
          onValueChange={(code) => setSchema(code)}
          highlight={(code) => highlight(code, languages.sql, 'sql')}
          padding={14}
          style={{
            overflowY: 'auto',
          }}
          textareaClassName="outline-none"
          className="my-4 h-48 font-mono bg-bluebarry-600 border border-bluebarry-300 rounded-md px-4 py-3 focus-within:ring-1 focus-within:ring-lemon-600"
        />

        <label className="text-lg font-light" htmlFor="question">
          Faça uma pergunta sobre o codigo
        </label>
        <textarea
          className="my-4 bg-bluebarry-600 border border-bluebarry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lemon-600"
          id="question"
          name="question"
          value={input}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="text-pistachio flex items-center justify-center rounded-lg border border-pistachio gap-2 h-14"
        >
          <Stars className="h-6 w-6" />
          Perguntar a Inteligencia Artificial
        </button>
      </form>
      <div className="mt-6">
        <span className="text-lg font-light text-foam">Resposta:</span>

        <textarea
          readOnly
          className="my-4 w-full font-mono text-foam bg-bluebarry-600 border border-bluebarry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lemon-600"
          value={result}
        />
      </div>
    </div>
  )
}
