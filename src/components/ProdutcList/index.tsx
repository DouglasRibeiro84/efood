import { Restaurante } from '../../pages/Homes'
import Product from '../Product'
import { ContainerList, List } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const ProductList = ({ restaurantes }: Props) => {
  return (
    <ContainerList className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Product
              id={restaurante.id}
              title={restaurante.titulo}
              description={restaurante.descricao}
              nota={restaurante.avaliacao}
              image={restaurante.capa}
              infos={restaurante.tipo}
              destacado={restaurante.destacado}
            />
          </li>
        ))}
      </List>
    </ContainerList>
  )
}

export default ProductList
