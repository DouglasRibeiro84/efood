import { FooterContainer, Redes } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="" />
    <Redes>
      <img src={instagram} alt="" />
      <img src={facebook} alt="" />
      <img src={twitter} alt="" />
    </Redes>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
