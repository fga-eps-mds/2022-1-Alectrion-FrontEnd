import { Typography } from '@mui/material'
import EquipmentEditForm from '../../components/equipment-edit-form'
import { Container } from '../user-register/styles'
import { DivStyled } from './styles'

const EquipmentEditScreen = () => {
  return (
    <DivStyled>
      <Container>
        <Typography variant="h3">Editar Equipamentos</Typography>
        <EquipmentEditForm />
      </Container>
    </DivStyled>
  )
}

export default EquipmentEditScreen
