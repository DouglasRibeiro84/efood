import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import FoodList from '../../components/FoodsList'

import { Restaurante } from '../Homes'

const PageFoods = () => {
  const { id } = useParams<{ id: string }>()
  const [loja, setLoja] = useState<Restaurante | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoja(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <p>Carregando...</p>
  if (!loja) return <p>Loja não encontrada</p>

  return (
    <>
      <Header
        type="section"
        image={loja.capa}
        title={loja.titulo}
        infos={loja.tipo}
      />
      <FoodList foods={loja.cardapio} />
    </>
  )
}

export default PageFoods
