import { Typography } from '@mui/material'
import { Container } from '../user-register/styles'
import GeraTermo from '../../components/gerar-termo'

const RegisterTerms = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Cadastro de Termos
        </Typography>
        <GeraTermo />
      </Container>
    </>
  )
}
export default RegisterTerms
