import { Container } from './styles'
import EquipmentEditForm from '../../components/equipment-edit-form'
import { Typography } from '@mui/material'

const EquipmentEditScreen = () => {
  return (
    <Container>
      <Typography variant="h3">Editar equipamentos</Typography>
      <EquipmentEditForm />
    </Container>
  )
}

export default EquipmentEditScreen
