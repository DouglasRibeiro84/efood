import Tag from '../Tag'

import estrela from '../../assets/images/estrela.svg'
import { Card, CardContainer, CardHeader, Descricao, Infos } from './styles'

type Props = {
  id: number
  title: string
  description: string
  infos: string | string[]
  image: string
  nota: number
  destacado?: boolean
}

const Product = ({
  title,
  description,
  infos,
  image,
  nota,
  id,
  destacado
}: Props) => {
  const infosArray = Array.isArray(infos)
    ? infos
    : typeof infos === 'string' && infos.length > 0
    ? infos.split(',').map((item) => item.trim())
    : []

  const getDescricao = (description: string) => {
    if (description.length > 279) {
      return description.slice(0, 275) + '...'
    }
    return description
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infosArray.length > 0 ? (
          infosArray.map((info) => (
            <Tag key={info} type="tag">
              {info}
            </Tag>
          ))
        ) : (
          <Tag type="tag">Sem informações</Tag>
        )}
        {destacado && <Tag type="tag">Destaque</Tag>}
      </Infos>
      <CardContainer>
        <CardHeader>
          <h3>{title}</h3>
          <div>
            <p>{nota}</p>
            <img src={estrela} alt="" />
          </div>
        </CardHeader>
        <Descricao>{getDescricao(description)}</Descricao>
        <Tag type="link" to={`/foods/${id}`}>
          Saiba mais
        </Tag>
      </CardContainer>
    </Card>
  )
}

export default Product
