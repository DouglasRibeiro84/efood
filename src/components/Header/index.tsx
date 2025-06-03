import { Apresentacao, HeaderBar, Title, Titulo } from './styles'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.svg'
import { Link } from 'react-router-dom'

export type Props = {
  type: 'home' | 'section'
  title?: string
  image?: string
  infos?: string
}

const Header = ({ type, title, image, infos }: Props) => {
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
