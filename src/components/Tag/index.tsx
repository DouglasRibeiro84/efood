import { TagContainer, TagLink } from './styles'

export type Props = {
  type: 'tag' | 'link'
  children: string
  to?: string
  onClick?: () => void
}

const Tag = ({ type, children, onClick, to }: Props) => {
  if (type === 'tag') {
    return (
      <TagContainer type="tag" onClick={onClick}>
        {children}
      </TagContainer>
    )
  }
  return (
    <TagLink type="link" to={to as string}>
      {children}
    </TagLink>
  )
}

export default Tag
