import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  color: ${cores.corPrincipal};
  border: 1px solid ${cores.corPrincipal};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardContainer = styled.div`
  padding: 8px;
  padding-top: 2px;
`

export const CardHeader = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin-right: 8px;
  }
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
