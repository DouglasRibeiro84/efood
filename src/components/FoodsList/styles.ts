import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerFoodList = styled.section`
  padding-top: 56px;
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
