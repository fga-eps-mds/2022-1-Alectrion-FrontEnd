import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import {
  Container,
  ContainerCard,
  StyledBuildIcon,
  StyledComputerIcon,
  StyledPersonIcon,
  StyledShortcut
} from '../../components/task-screen/styles'

export const Task = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <ContainerCard>
        <StyledShortcut
          color="#50FF4DB2"
          onClick={() => navigate('/equipaments')}
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
          onClick={() => navigate('/orderservice')}>
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
          onClick={() => navigate('/users')}>
          <StyledPersonIcon style={{ fontSize: 100 }} />
        </StyledShortcut>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Usuário
        </Typography>
      </ContainerCard>
    </Container>
  )
}
