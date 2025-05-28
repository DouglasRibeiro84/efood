import { ContainerBtn } from './styles'

export type Props = {
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, to, onClick }: Props) => (
  <ContainerBtn to={to as string} onClick={onClick}>
    {children}
  </ContainerBtn>
)

export default Button
