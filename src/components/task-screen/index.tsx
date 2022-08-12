import { useNavigate } from 'react-router-dom'
import {
  Container,
  ContainerCard,
  StyledComputerIcon,
  StyledPersonIcon,
  StyledShortcut,
  StyledBuildIcon
} from './styles'
import { Typography } from '@mui/material'

export const TaskCards = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <ContainerCard>
        <StyledShortcut
          color="#50FF4DB2"
          onClick={() => navigate('/user-register')}
          className="Equipment">
          <StyledComputerIcon style={{ fontSize: 100 }} />
        </StyledShortcut>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Equipamento
        </Typography>
      </ContainerCard>
      <ContainerCard>
        <StyledShortcut
          color="#EFCA45"
          className="Service Order"
          onClick={() => navigate('/user-register')}>
          <StyledBuildIcon style={{ fontSize: 100 }} />
        </StyledShortcut>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Ordem de serviço
        </Typography>
      </ContainerCard>
      <ContainerCard>
        <StyledShortcut
          color="#71ABDA"
          className="User"
          onClick={() => navigate('/user-register')}>
          <StyledPersonIcon style={{ fontSize: 100 }} />
        </StyledShortcut>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Usuário
        </Typography>
      </ContainerCard>
    </Container>
  )
}
