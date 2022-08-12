import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import img from './assets/AlectrionLogo2.png'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1F3541' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' }
            }}>
            <Box
              component="img"
              sx={{
                height: 60,
                width: 155,
                mt: 0.5,
                mb: 1
              }}
              alt=""
              src={img}
            />
          </Button>
          <Button
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1
            }}>
            <Box
              component="img"
              sx={{
                height: 60,
                width: 155,
                mt: 0.5,
                mb: 1
              }}
              alt=""
              src={img}
            />
          </Button>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end'
            }}>
            <Button
              data-testId="buttonequipaments"
              onClick={() => navigate('/equipaments')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Equipamentos
            </Button>
            <Button
              onClick={() => navigate('/orderservice')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Ordem de Serviço
            </Button>
            <Button
              onClick={() => navigate('/users')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Usuários
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Sair">
              <IconButton
                onClick={() => navigate('/logout')}
                sx={{ p: 0, mr: 3, ml: 5, color: 'white' }}>
                <ExitToAppIcon></ExitToAppIcon>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Usuário">
              <IconButton onClick={() => navigate('/user')} sx={{ p: 0 }}>
                <Avatar alt="" src="" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
