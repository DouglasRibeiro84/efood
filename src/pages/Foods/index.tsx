import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import FoodList from '../../components/FoodsList'

import { useGetFoodsQuery } from '../../services/api'
import Cart from '../../components/cart'

const PageFoods = () => {
  const { id } = useParams<{ id: string }>()

  const { data: loja } = useGetFoodsQuery(id!)

  if (!loja) return <h3>Carregando ...</h3>

  return (
    <>
      <Header
        type="section"
        image={loja.capa}
        title={loja.titulo}
        infos={loja.tipo}
      />
      <FoodList foods={loja.cardapio} />
      <Cart />
    </>
  )
}

export default PageFoods
