import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { formataPreco } from '../Foods'

import { CartItem, Empty, PriceTotal } from './styles'

type CartProps = {
  onContinue: () => void
}

const CartContainer = ({ onContinue }: CartProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const dispatch = useDispatch()
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <div>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item, index) => (
              <CartItem key={`${item.id}-${index}`}>
                <img src={item.foto} alt="" />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                </div>
                <button type="button" onClick={() => removeItem(item.id)} />
              </CartItem>
            ))}
          </ul>
          <PriceTotal>
            <p>Valor total</p>
            <p>{formataPreco(getTotalPrice())}</p>
          </PriceTotal>
          <Button onClick={onContinue}>Continuar com a entrega</Button>
        </>
      ) : (
        <Empty>
          O carrinho esta vazio, adicione pelo menos 1 produto para continuar
          com a compra
        </Empty>
      )}
    </div>
  )
}

export default CartContainer
