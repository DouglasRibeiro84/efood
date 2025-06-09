import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ContainerBtn } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.corPrincipal};
  z-index: 1;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ContainerBtn} {
    background-color: ${cores.corSecundaria};
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 300px;
  }
`
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
