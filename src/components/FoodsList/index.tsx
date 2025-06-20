import { ContainerFoodList, List } from './styles'

import Foods from '../Foods'
import { CardapioItem } from '../../pages/Homes'
import Loader from '../Loader'

type Props = {
  foods: CardapioItem[]
  isLoading: boolean
}

const FoodList = ({ foods, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
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
}

export default FoodList
