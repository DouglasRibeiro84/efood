import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ContainerBtn = styled(Link)`
  background-color: ${cores.corFundo};
  color: ${cores.corPrincipal};
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  text-decoration: none;
  border: none;
  cursor: pointer;
`
