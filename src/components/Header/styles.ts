import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const HeaderBar = styled.header<Props>`
  color: ${cores.corPrincipal};
  display: flex;
  flex-direction: ${(props) => (props.type === 'home' ? 'column' : 'row')};
  align-items: center;
  padding-top: 64px;
  font-weight: bold;
  padding-bottom: ${(props) => (props.type === 'home' ? '40px' : '66px')};

  a {
    text-decoration: none;
    color: ${cores.corPrincipal};
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
  }
`
export const Titulo = styled.h1`
  text-align: center;
  margin-top: 138px;
`
export const Apresentacao = styled.div`
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
`
