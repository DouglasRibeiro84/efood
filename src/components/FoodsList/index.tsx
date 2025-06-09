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
          <Foods food={food} />
        </li>
      ))}
    </List>
  </ContainerFoodList>
)

export default FoodList
