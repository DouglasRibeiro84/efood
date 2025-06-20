import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import CartContainer from '../Cart'
import Checkout from '../Checkout'

import { Container, Overlay, SideBar } from './styles'

const AsideBar = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {!showCheckout && (
          <CartContainer onContinue={() => setShowCheckout(true)} />
        )}
        {showCheckout && <Checkout onBack={() => setShowCheckout(false)} />}
      </SideBar>
    </Container>
  )
}

export default AsideBar
