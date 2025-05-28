import Button from '../Button'
import { FoodCard, FoodDescription } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Foods = ({ title, description, image }: Props) => (
  <FoodCard>
    <img src={image} alt={title} />
    <div>
      <h3>{title}</h3>
      <FoodDescription>{description}</FoodDescription>
      <Button>Adicionar ao carrinho</Button>
    </div>
  </FoodCard>
)

export default Foods
