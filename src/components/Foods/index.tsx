import Button from '../Button'
import {
  FoodCard,
  FoodDescription,
  InfosFood,
  Modal,
  ModalContent
} from './styles'

import fechar from '../../assets/images/close 1.svg'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
  porcao: string
  preco: number
}

const Foods = ({ title, description, image, porcao, preco }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)

  const getDescricao = (description: string) => {
    if (description.length > 176) {
      return description.slice(0, 173) + '...'
    }
    return description
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <FoodCard>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <FoodDescription>{getDescricao(description)}</FoodDescription>
          <Button
            onClick={() => {
              setModalAberta(true)
            }}
          >
            Mais detalhes
          </Button>
        </div>
      </FoodCard>
      <Modal className={modalAberta ? 'visivel' : ''}>
        <div className="overlay" onClick={() => setModalAberta(false)}></div>
        <ModalContent className="container">
          <img src={image} alt="" />
          <InfosFood>
            <header>
              <h4>{title}</h4>
              <img
                src={fechar}
                alt="Fechar"
                onClick={() => setModalAberta(false)}
              />
            </header>
            <div>
              <p>{description}</p>
              <span>Serve: de {porcao}</span>
            </div>
            <Button>{'Adicionar ao carrinho - ' + formataPreco(preco)} </Button>
          </InfosFood>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Foods
