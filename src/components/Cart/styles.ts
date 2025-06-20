import { styled } from 'styled-components'

import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.svg'

export const PriceTotal = styled.div`
  color: ${cores.corSecundaria};
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.corSecundaria};
  color: ${cores.corPrincipal};
  padding: 8px;
  padding-bottom: 12px;
  margin-top: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 100%;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

  div {
    margin-left: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Empty = styled.p`
  padding: 0 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  color: ${cores.corSecundaria};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
