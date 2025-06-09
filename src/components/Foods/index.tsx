import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button'
import {
  FoodCard,
  FoodDescription,
  InfosFood,
  Modal,
  ModalContent
} from './styles'

import fechar from '../../assets/images/close 1.svg'

import { add, open } from '../../store/reducers/cart'

import { CardapioItem } from '../../pages/Homes'

type Props = {
  food: CardapioItem
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Foods = ({ food }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)

  const getDescricao = (description: string) => {
    if (description.length > 176) {
      return description.slice(0, 173) + '...'
    }
    return description
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
  }

  return (
    <>
      <FoodCard>
        <img src={food.foto} alt={food.nome} />
        <div>
          <h3>{food.nome}</h3>
          <FoodDescription>{getDescricao(food.descricao)}</FoodDescription>
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
          <img src={food.foto} alt="" />
          <InfosFood>
            <header>
              <h4>{food.nome}</h4>
              <img
                src={fechar}
                alt="Fechar"
                onClick={() => setModalAberta(false)}
              />
            </header>
            <div>
              <p>{food.descricao}</p>
              <span>Serve: de {food.porcao}</span>
            </div>
            <Button
              onClick={() => {
                addToCart()
                setModalAberta(false)
              }}
            >
              {'Adicionar ao carrinho - ' + formataPreco(food.preco)}
            </Button>
          </InfosFood>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Foods
