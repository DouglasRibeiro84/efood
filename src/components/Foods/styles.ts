import styled from 'styled-components'
import { cores } from '../../styles'

export const FoodCard = styled.div`
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  padding: 8px;

  h3 {
    font-size: 16px;
    margin-top: 8px;
  }
`
export const FoodDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`
