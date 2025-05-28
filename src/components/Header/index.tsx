import { Apresentacao, HeaderBar, Titulo } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.svg'
import apresentação from '../../assets/images/apresentacao.svg'
import { Link } from 'react-router-dom'

export type Props = {
  type: 'home' | 'section'
}

const Header = ({ type }: Props) => {
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
          <p>0 produtos no carrinho</p>
        </div>
      </HeaderBar>
      <Apresentacao
        style={{ backgroundImage: `url(${apresentação})` }}
      ></Apresentacao>
    </>
  )
}

export default Header
