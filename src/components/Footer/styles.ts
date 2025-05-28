import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  color: ${cores.corPrincipal};
  background-color: ${cores.corSecundaria};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  text-align: center;
  font-size: 10px;
  height: 298px;
`

export const Redes = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;

  img {
    margin: 0 4px;
  }
`
export const Copy = styled.p
