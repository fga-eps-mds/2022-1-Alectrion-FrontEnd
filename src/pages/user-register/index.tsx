import RegisterUserForm from '../../components/register-user-form'
import { Typography } from '@mui/material'
import { Container } from '../user-register/styles'

const UserRegister = () => {
  return (
    <>
      <Container>
        <Typography variant="h3">Cadastro Usuário</Typography>
        <RegisterUserForm />
      </Container>
    </>
  )
}
export default UserRegister
