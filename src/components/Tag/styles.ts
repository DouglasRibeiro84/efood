import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  padding: 6px 4px;
  display: inline-block;
  width: auto;
`
export const TagLink = styled(Link)`
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
  max-width: fit-content;
`
