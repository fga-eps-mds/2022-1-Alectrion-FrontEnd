// import equipmentShortcut from '../../components/task-screen'
import { Typography, Toolbar, AppBar } from '@mui/material'
import { Container } from '../user-register/styles'
import { styled } from '@mui/system'
import RegisterUserForm from '../../components/register-user-form'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark
}))

const TaskScreen = () => {
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
        <RegisterUserForm />
      </Container>
    </>
  )
}
export default TaskScreen
