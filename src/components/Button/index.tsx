import { ReactNode } from 'react'
import { ContainerBtn } from './styles'

export type Props = {
  children: ReactNode
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button = ({
  children,
  to,
  onClick,
  type = 'button',
  disabled
}: Props) => (
  <ContainerBtn
    as="button"
    type={type}
    to={to as string}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </ContainerBtn>
)

export default Button
