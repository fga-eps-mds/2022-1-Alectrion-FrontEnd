import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Button } from '../../components/button'
import OderServiceTable from '../../components/order-services-table'
import { Container, StyledCard, StyledTextField, ButtonGroup } from './styles'
import { theme } from '../../styles/theme'
import api from '../../api/config'
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

interface OrderService {
  id: string
  date: string
  description: string
  authorId: string
  sender: string
  senderFunctionalNumber: string
  receiverName: string
  equipment: {
    type: string
    tippingNumber: string
    status: string
  }
}
interface filterType {
  tippingNumber?: string
  receiverName?: string
  equipment?: string
  serialNumber?: string
  type?: string
  status?: string
}
export const OrderServices = () => {
  const navigate = useNavigate()
  const [orderServices, setOrderServices] = useState<OrderService[]>([])
  const [tippingNumber, setTippingNumber] = useState('')
  const [filters, setFilters] = useState<filterType>({})

  useEffect(() => {
    const getUser = async () => {
      try {
        let filterParams = '' as string | undefined
        Object.keys(filters).forEach((item) => {
          const params = filters[item as keyof filterType]
          filterParams = params && filterParams?.concat(`${item}=${params}`)
        })

        const { data }: AxiosResponse<OrderService[]> = await api.get(
          `/equipment/listOrderSerice?${filterParams}`
        )
        setOrderServices(data)
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
    getUser()
  }, [filters])
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
          name="tippingNumber"
          label="Numero do tombamento"
          variant="outlined"
          onChange={(e) => {
            setTippingNumber(e.target.value)
          }}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              toast.success('Filtro aplicado')
              setFilters({ ...filters, tippingNumber })
            }
          }}
        />
        <ButtonGroup>
          <Button
            textColor="#000"
            styledColor={theme.palette.grey[500]}
            width="180px"
            height="40px"
            borderRadius="10px"
            disabled
            endIcon={<FilterListIcon />}>
            Filtros
          </Button>
          <Button
            width="240px"
            height="62px"
            textColor="#FFFFFF"
            styledColor="#16878C"
            onClick={() => navigate('/create-order-service')}
            borderRadius="10px">
            Cadastrar OS
          </Button>
        </ButtonGroup>
      </StyledCard>
      <OderServiceTable orderServices={orderServices} />
    </Container>
  )
}
