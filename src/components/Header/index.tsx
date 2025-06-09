import { useDispatch, useSelector } from 'react-redux'

import { Apresentacao, HeaderBar, Title, Titulo } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.svg'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  type: 'home' | 'section'
  title?: string
  image?: string
  infos?: string
}

const Header = ({ type, title, image, infos }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (type === 'home') {
    return (
      <HeaderBar type="home" style={{ backgroundImage: `url(${fundo})` }}>
        <img src={logo} alt="" />
        <Titulo>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </Titulo>
      </HeaderBar>
    )
  }
  return (
    <>
      <HeaderBar type="section" style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
          <Link to="/">
            <a href="">Restaurantes</a>
          </Link>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <p onClick={openCart}>{items.length} produtos no carrinho</p>
        </div>
      </HeaderBar>
      <Apresentacao style={{ backgroundImage: `url(${image})` }}>
        <div>
          <div className="container">
            <Title>
              <h4>{infos}</h4>
              <h3>{title}</h3>
            </Title>
          </div>
        </div>
      </Apresentacao>
    </>
  )
}

export default Header
