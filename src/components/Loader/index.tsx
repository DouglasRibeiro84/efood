import { ClipLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClipLoader color={cores.corPrincipal} />
  </Container>
)

export default Loader
