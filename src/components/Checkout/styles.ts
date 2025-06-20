import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ContainerBtn } from '../Button/styles'

export const Form = styled.div`
  color: ${cores.corSecundaria};
  width: 100%;

  ${ContainerBtn} {
    margin-bottom: 8px;
  }

  > div:nth-child(6) {
    margin-bottom: 24px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  small {
    display: inline-block;
    display: block;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
    margin-bottom: 8px;
    background-color: rgba(84, 55, 248, 0.47);
    padding: 8px;
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  label {
    margin: 8px 0;
    line-height: 16px;
  }

  input {
    font-size: 14px;
    font-weight: bold;
    padding-left: 8px;
    color: #4b4b4b;
    border: none;
    height: 32px;
    background-color: ${cores.corSecundaria};
    outline: none;

    &.error {
      outline: 2px solid rgba(84, 55, 248, 0.47);
    }
  }

  input:focus {
    outline: 4px double ${cores.corSecundaria};
  }
`
export const Cep = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  > ${Input}:first-child {
    width: 156px;
  }

  > ${Input}:last-child {
    width: 156px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    > ${Input}:first-child, > ${Input}:last-child {
      width: 100%;
    }
  }
`

export const NumberCard = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: space-between;

  > ${Input}:first-child {
    width: 228px;
  }

  > ${Input}:last-child {
    width: 88px;
  }
`
export const Expires = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 24px;

  > ${Input}:first-child {
    width: 156px;
  }

  > ${Input}:last-child {
    width: 156px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    > ${Input}:first-child, > ${Input}:last-child {
      width: 100%;
    }
  }
`
export const Card = styled.div`
  padding-top: 32px;
  color: ${cores.corSecundaria};

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    font-weight: normal;
  }

  ${ContainerBtn} {
    margin-top: 24px;
  }
`
