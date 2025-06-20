import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ProductList from '../../components/ProdutcList'
import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: lojas, isLoading: loadingRestaurants } =
    useGetRestaurantsQuery()

  if (!lojas) {
    return <Loader />
  }

  return (
    <>
      <Header type="home" />
      <ProductList restaurantes={lojas} isLoading={loadingRestaurants} />
    </>
  )
}

export default Home
