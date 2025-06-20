import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ContainerBtn } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const Container = styled.div`
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
