import { ContainerFoodList, List } from './styles'

import Foods from '../Foods'
import Comidas from '../../models/Comidas'

type Props = {
  foods: Comidas[]
}

const FoodList = ({ foods }: Props) => (
  <ContainerFoodList className="container">
    <List>
      {foods.map((food) => (
        <Foods
          key={food.id}
          title={food.title}
          description={food.description}
          image={food.image}
        />
      ))}
    </List>
  </ContainerFoodList>
)

export default FoodList
