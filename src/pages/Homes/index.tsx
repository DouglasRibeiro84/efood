import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ProductList from '../../components/ProdutcList'

export type CardapioItem = {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  destacado: boolean
  avaliacao: number
  cardapio: CardapioItem[]
}

const Home = () => {
  const [lojas, setLojas] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLojas(res))
  }, [])

  return (
    <>
      <Header type="home" />
      <ProductList restaurantes={lojas} />
    </>
  )
}

export default Home
