import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { CartContainer, CartItem, Overlay, PriceTotal, SideBar } from './styles'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Foods'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
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
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
