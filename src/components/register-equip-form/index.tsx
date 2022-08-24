import { CardContent } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import { StyledCard } from './styles'
import * as yup from 'yup'
import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../api/config'
import { useFormik } from 'formik'

const RegisterEquipForm = () => {
  //   const navigate = useNavigate()
  const validationSchema = yup.object().shape({
    productType: yup.string().required('Esse campo é obrigatório'),
    tippingNumber: yup.string().required('Esse campo é obrigatório'),
    brand: yup.string(),
    serialNumber: yup.string(),
    model: yup.string(),
    acquisitionType: yup.string(),
    acquisitionDate: yup.string(),
    fiscalNote: yup.string(),
    processorType: yup.string(),
    ramMemory: yup.string(),
    storageType: yup.string(),
    storageAmount: yup.string(),
    monitorType: yup.string(),
    monitorSize: yup.string(),
    equipmentYear: yup.string(),
    potency: yup.string(),
    description: yup.string()
  })
  const formik = useFormik({
    initialValues: {
      productType: 'Tipo de produto',
      tippingNumber: 'N° Tombamento',
      brand: '',
      serialNumber: '',
      model: '',
      acquisitionType: '',
      acquisitionDate: '',
      fiscalNote: '',
      processorType: '',
      ramMemory: '',
      storageType: '',
      storageAmount: '',
      monitorType: '',
      monitorSize: '',
      equipmentYear: '',
      potency: '',
      description: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await api.post('/equipment/create', {
          productType: values.productType,
          tippingNumber: values.tippingNumber,
          brand: values.brand,
          serialNumber: values.serialNumber,
          model: values.model,
          acquisitionType: values.acquisitionType,
          acquisitionDate: values.acquisitionDate,
          fiscalNote: values.fiscalNote,
          processorType: values.processorType,
          ramMemory: values.ramMemory,
          storageType: values.storageType,
          storageAmount: values.storageAmount,
          monitorType: values.monitorType,
          monitorSize: values.monitorSize,
          equipmentYear: values.equipmentYear,
          potency: values.potency,
          description: formik
        })
        toast.success('Equipamento cadastrado.')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
  })
  const [state, setState] = useState(0)
  return (
    <StyledCard>
      <CardContent>
        <button onClick={() => setState(1)}>teste</button>
        <h1>teste1</h1>
        {state === 1 && <h1>teste2</h1>}
      </CardContent>
    </StyledCard>
  )
}
export default RegisterEquipForm
