import { Container } from './styles'
import { Typography } from '@mui/material'
import EquipmentEditForm from '../../components/equipment-edit-form'

const EquipmentEditScreen = () => {
  return (
    <Container>
      <Typography variant="h3">Editar Equipamentos</Typography>
      <EquipmentEditForm />
    </Container>
  )
}

export default EquipmentEditScreen
