import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

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

  p {
    cursor: pointer;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;

    @media (max-width: ${breakpoints.desktop}) {
      flex-direction: column;

      img {
        margin: 16px 0;
      }
    }
  }
`
export const Titulo = styled.h1`
  text-align: center;
  margin-top: 138px;
  font-size: 32px;
`
export const Apresentacao = styled.div`
  height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;
  font-size: 32px;
  padding-top: 24px;
  padding-bottom: 32px;

  h4 {
    font-weight: 100;
  }
`
