import Product from '../Product'
import { ContainerList, List } from './styles'

import Restaurante from '../../models/Restaurantes'

type Props = {
  restaurantes: Restaurante[]
}

const ProductList = ({ restaurantes }: Props) => (
  <ContainerList className="container">
    <List>
      {restaurantes.map((restaurante) => (
        <Product
          key={restaurante.id}
          title={restaurante.title}
          description={restaurante.description}
          nota={restaurante.nota}
          image={restaurante.image}
          infos={restaurante.infos}
        />
      ))}
    </List>
  </ContainerList>
)

export default ProductList
