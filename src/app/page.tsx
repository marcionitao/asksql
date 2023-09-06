import Image from 'next/image'
import logo from '../assets/logo.svg'
import { Trash2, Stars } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto pt-12 pb-4">
      <header className="flex items-center justify-between">
        <Image src={logo} alt="logo" />
        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>
      <form>
        <label htmlFor="schema">Cole aqui o seus SQL</label>
        <textarea id="schema" name="schema" />

        <label htmlFor="question">Faça uma pergunta sobre o codigo</label>
        <textarea id="question" name="question" />

        <button type="submit" className="text-pistachio">
          <Stars className="h-6 w-6" />
          Perguntar a Inteligencia Artificial
        </button>
      </form>
      <div>
        <span>Resposta</span>
        <textarea />
      </div>
    </div>
  )
}
