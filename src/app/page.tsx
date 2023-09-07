import Image from 'next/image'
import logo from '../assets/logo.svg'
import { Trash2, Stars } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto pt-12 pb-4 px-4">
      <header className="flex items-center justify-between">
        <Image src={logo} alt="logo" />
        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>
      <form className="py-8 w-full flex flex-col text-foam">
        <label className="text-lg font-light" htmlFor="schema">
          Cole aqui o seus SQL
        </label>
        <textarea
          className="my-4 bg-bluebarry-600 border border-bluebarry-300 rounded-md px-4 py-3 outline-none focus: ring-2 focus: ring-lemon-600"
          id="schema"
          name="schema"
        />

        <label className="text-lg font-light" htmlFor="question">
          Faça uma pergunta sobre o codigo
        </label>
        <textarea
          className="my-4 bg-bluebarry-600 border border-bluebarry-300 rounded-md px-4 py-3 outline-none focus: ring-2 focus: ring-lemon-600"
          id="question"
          name="question"
        />

        <button
          type="submit"
          className="text-pistachio flex items-center justify-center rounded-lg border border-pistachio gap-2 h-14"
        >
          <Stars className="h-6 w-6" />
          Perguntar a Inteligencia Artificial
        </button>
      </form>
      <div>
        <span>Resposta:</span>
        <textarea />
      </div>
    </div>
  )
}
