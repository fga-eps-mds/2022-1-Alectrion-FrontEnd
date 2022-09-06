import { Typography } from '@mui/material'
import RegisterOrderServiceForm from '../../components/register-order-service-form/inder'
import { Container } from '../user-register/styles'

const OrderRegister = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Cadastro de ordem de serviço
        </Typography>
        <RegisterOrderServiceForm />
      </Container>
    </>
  )
}
export default OrderRegister
