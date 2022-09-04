import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Button } from '../../components/button'
import OderServiceTable from '../../components/order-services-table'
import { Container, StyledCard, StyledTextField, ButtonGroup } from './styles'
import { theme } from '../../styles/theme'

export const OrderServices = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Ordem de serviço
      </Typography>
      <StyledCard>
        <StyledTextField
          size="small"
          id="filter"
          type="text"
          name="username"
          variant="outlined"
          onChange={() => {}}
          value={'teste'}
        />
        <ButtonGroup>
          <Button
            textColor="#000"
            styledColor={theme.palette.grey[500]}
            width="180px"
            height="40px"
            borderRadius="10px"
            endIcon={<FilterListIcon />}>
            Filtros
          </Button>
          <Button
            width="240px"
            height="62px"
            textColor="#FFFFFF"
            styledColor="#16878C"
            onClick={() => navigate('/order-service-register')}
            borderRadius="10px">
            Cadastrar OS
          </Button>
        </ButtonGroup>
      </StyledCard>
      <OderServiceTable />
    </Container>
  )
}
