import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import img from './assets/AlectrionLogo2.png'
import { AuthContext } from '../../contexts/auth'
import { toast } from 'react-toastify'

const NavBar = () => {
  const navigate = useNavigate()
  const { Logout } = React.useContext(AuthContext)

  React.useEffect(() => {
    let time: any

    window.onload = resetTimer
    document.onmousemove = resetTimer
    document.onkeydown = resetTimer

    if (time > 1000) {
      toast.warn(
        'Você será desconectado por inatividade em 5 minutos, clique aqui para parar!',
        {
          position: 'top-right',
          autoClose: 5000000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        }
      )
    }

    function doSomething() {
      Logout()
      window.location.reload()
    }

    function resetTimer() {
      clearTimeout(time)
      time = setTimeout(doSomething, 5000)
      console.log('resetou')
    }
  })

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1F3541' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            onClick={() => navigate('/')}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
              <MenuItem key={''} onClick={handleCloseNavMenu}>
                <Button
                  key={''}
                  href="/equipaments"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}>
                  Equipamentos
                </Button>
              </MenuItem>
              <MenuItem key={''} onClick={handleCloseNavMenu}>
                <Button
                  key={''}
                  href="/orderservice"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}>
                  Ordem de Serviço
                </Button>
              </MenuItem>
              <MenuItem key={''} onClick={handleCloseNavMenu}>
                <Button
                  key={''}
                  href="/users"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}>
                  Usuários
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}>
            <Box
              component="img"
              sx={{
                height: 60,
                width: 155,
                mb: 1,
                mt: 0.5
              }}
              alt=""
              src={img}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end'
            }}>
            <Button
              onClick={() => navigate('/equipaments')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Equipamentos
            </Button>
            <Button
              key={''}
              onClick={() => navigate('/orderservice')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Ordem de Serviço
            </Button>
            <Button
              key={''}
              onClick={() => navigate('/users')}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Usuários
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Sair">
              <IconButton
                onClick={Logout}
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
