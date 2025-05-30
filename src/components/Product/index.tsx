import Tag from '../Tag'

import estrela from '../../assets/images/estrela.svg'
import { Card, CardContainer, CardHeader, Descricao, Infos } from './styles'

type Props = {
  id: number
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
}

const Product = ({ title, description, infos, image, nota, id }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag type="tag" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <CardContainer>
      <CardHeader>
        <h3>{title}</h3>
        <div>
          <p>{nota}</p>
          <img src={estrela} alt="" />
        </div>
      </CardHeader>
      <Descricao>{description}</Descricao>
      <Tag type="link" to={`/foods/${id}`}>
        Saiba mais
      </Tag>
    </CardContainer>
  </Card>
)

export default Product
