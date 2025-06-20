import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import FoodList from '../../components/FoodsList'

import { useGetFoodsQuery } from '../../services/api'
import Cart from '../../components/AsideBar'
import Loader from '../../components/Loader'

const PageFoods = () => {
  type FoodParams = {
    id: string
  }

  const { id } = useParams() as FoodParams

  const { data: loja, isLoading: loadingFoods } = useGetFoodsQuery(id)

  if (!loja) return <Loader />

  return (
    <>
      <Header
        type="section"
        image={loja.capa}
        title={loja.titulo}
        infos={loja.tipo}
      />
      <FoodList foods={loja.cardapio} isLoading={loadingFoods} />
      <Cart />
    </>
  )
}

export default PageFoods
