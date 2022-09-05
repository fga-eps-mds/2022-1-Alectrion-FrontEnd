import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import {
  Container,
  ContainerCard,
  StyledBuildIcon,
  StyledComputerIcon,
  StyledPersonIcon,
  StyledShortcut
} from './styles'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

interface RoleType {
  [role: string]: any
}

const { user } = useContext(AuthContext)
const { role }: RoleType = user!

export const Task = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <ContainerCard data-testid="cardEquipament">
        <StyledShortcut
          data-testid="buttonEquipaments"
          color="#50FF4DB2"
          onClick={() => navigate('/equipaments')}
          className="Equipment">
          <StyledComputerIcon style={{ fontSize: 100 }} />
        </StyledShortcut>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Equipamento
        </Typography>
      </ContainerCard>
      <ContainerCard data-testid="cardOrderService">
        <StyledShortcut
          data-testid="buttonOrderService"
          color="#EFCA45"
          className="Service Order"
          onClick={() => navigate('/orderservice')}>
          <StyledBuildIcon style={{ fontSize: 100 }} />
        </StyledShortcut>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Ordem de serviço
        </Typography>
      </ContainerCard>
      {role === 'administrador' && (
        <ContainerCard data-testid="cardUsers">
          <StyledShortcut
            data-testid="buttonUsers"
            color="#71ABDA"
            className="User"
            onClick={() => navigate('/users')}>
            <StyledPersonIcon style={{ fontSize: 100 }} />
          </StyledShortcut>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Usuário
          </Typography>
        </ContainerCard>
      )}
      {/* <ContainerCard data-testid="cardUsers">
        <StyledShortcut
          data-testid="buttonUsers"
          color="#71ABDA"
          className="User"
          onClick={() => navigate('/users')}>
          <StyledPersonIcon style={{ fontSize: 100 }} />
        </StyledShortcut>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Usuário
        </Typography>
      </ContainerCard> */}
    </Container>
  )
}
