import { ContainerFoodList, List } from './styles'

import Foods from '../Foods'
import { CardapioItem } from '../../pages/Homes'

type Props = {
  foods: CardapioItem[]
}

const FoodList = ({ foods }: Props) => (
  <ContainerFoodList className="container">
    <List>
      {foods.map((food) => (
        <li key={food.id}>
          <Foods
            key={food.id}
            title={food.nome}
            description={food.descricao}
            image={food.foto}
            porcao={food.porcao}
            preco={food.preco}
          />
        </li>
      ))}
    </List>
  </ContainerFoodList>
)

export default FoodList
