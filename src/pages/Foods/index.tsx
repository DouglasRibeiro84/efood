import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Comidas from '../../models/Comidas'

import pizza from '../..//assets/images/pizza.png'
import FoodList from '../../components/FoodsList'
import { lojas } from '../Homes'

const comidas: Comidas[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  }
]

const PageFoods = () => {
  const { id } = useParams<{ id: string }>()

  const loja = lojas.find((item) => item.id === Number(id))

  if (!loja) return <p>Loja não encontrada</p>

  return (
    <>
      <Header
        type="section"
        image={loja.image}
        title={loja.title}
        infos={loja.infos}
      />
      <FoodList foods={comidas} />
    </>
  )
}

export default PageFoods
