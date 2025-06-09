import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ContainerBtn } from '../Button/styles'

export const FoodCard = styled.div`
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 16px;
    margin-top: 8px;
  }

  > img {
    width: 100%;
    height: 168px;
    display: block;
    object-fit: cover;
  }
`
export const FoodDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
    flex-direction: row;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000000cc;
    z-index: 0;
  }
`
export const ModalContent = styled(FoodCard)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    padding: 16px;
    padding-top: 30px;
  }

  > img {
    width: 280px;
    height: 280px;
  }

  header {
    img {
      position: absolute;
      top: 8px;
      right: 8px;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    > img {
      width: 100%;
      height: 280px;
    }
  }
`
export const InfosFood = styled.div`
  margin-left: 24px;

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-top: 16px;
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 24px;
  }

  ${ContainerBtn} {
    display: inline-block;
    width: auto;
    padding: 4px 8px;
    margin-top: 16px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0;

    h4 {
      margin-top: 8px;
    }
  }
`
