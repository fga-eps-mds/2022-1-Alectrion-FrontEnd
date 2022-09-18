import { Typography } from '@mui/material'
import { Container } from '../user-register/styles'
import RegisterEquipForm from '../../components/register-equip-form'

const EquipRegister = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Cadastro de Equipamentos
        </Typography>
        <RegisterEquipForm />
      </Container>
    </>
  )
}
export default EquipRegister
