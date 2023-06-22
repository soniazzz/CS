import { Wrapper } from './Wrapper'
import { Title } from './Title'
import { Container } from '@mui/material'
import Footer from '../Footer.jsx'

export function Biastest({ user_id }) {
  return (
    <div>
      <Title title='Bias Test'>
        <Container component='main' maxWidth='md'>
          <Wrapper user_id={user_id} />
        </Container>
      </Title>
      <Footer></Footer>
    </div>
  )
}
