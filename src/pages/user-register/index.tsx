import CreateUserScreen from '../../components/register-user-form'
import { Typography, Toolbar, AppBar } from '@mui/material'
import { Container } from '../user-register/styles'
import { styled } from '@mui/system'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark
}))

const UserRegister = () => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alectrion
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Container>
        <Typography variant="h3">Cadastro Usuário</Typography>
        <CreateUserScreen />
      </Container>
    </>
  )
}
export default UserRegister
