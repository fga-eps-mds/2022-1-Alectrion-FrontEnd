// import { useFormik } from 'formik'
// import CardContent from '@mui/material/CardContent'
// import {
//   StyledCard,
//   StyledForm,
//   StyledSelect,
//   StyledTextField,
//   StyledInputLabel
// } from './styles'
// import * as yup from 'yup'
// import { Button } from '../button'
// import { FormControl, MenuItem } from '@mui/material'
// import { theme } from '../../styles/theme'
// import api from '../../api/config'
// import { toast } from 'react-toastify'
import { CardContent } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {
  StyledEquipmentCard,
  StyledUserCard,
  StyledServiceOrderCard
} from './styles'

const navigate = useNavigate()
export const equipmentShortcut = () => {
  return (
    <StyledEquipmentCard>
      <CardContent onClick={() => navigate('/users')}>
        {' '}
        Equipamento{' '}
      </CardContent>
    </StyledEquipmentCard>
  )
}

export const serviceOrderShortcut = () => {
  return (
    <StyledServiceOrderCard>
      <CardContent> Ordem de serviço</CardContent>
    </StyledServiceOrderCard>
  )
}

export const userShortcut = () => {
  return (
    <StyledUserCard>
      <CardContent> Usuário</CardContent>
    </StyledUserCard>
  )
}
