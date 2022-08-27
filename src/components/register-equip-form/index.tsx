import { CardContent, FormControl, MenuItem } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import { StyledCard, StyledForm, StyledSelect } from './styles'
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
          description: values.description
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
        <StyledForm onSubmit={formik.handleSubmit}>
          <FormControl fullWidth>
            <StyledSelect
              id="productType-select-label"
              data-testid="productType-select"
              label="Tipo de produto"
              type="text"
              name="productType"
              variant="outlined"
              error={
                formik.touched.productType && Boolean(formik.errors.productType)
              }
              onChange={formik.handleChange}
              value={formik.values.productType}>
              <MenuItem onClick={() => setState(1)} value="CPU">
                CPU
              </MenuItem>
              <MenuItem onClick={() => setState(2)} value="Monitor">
                Monitor
              </MenuItem>
              <MenuItem onClick={() => setState(3)} value="Nobreak">
                Nobreak
              </MenuItem>
              <MenuItem value="Scanner">Scanner</MenuItem>
              <MenuItem value="Estabilizador">Estabilizador</MenuItem>
              <MenuItem value="Webcam">Webcam</MenuItem>
            </StyledSelect>
          </FormControl>
          {state === 1 && <h1>teste2</h1>}
        </StyledForm>
      </CardContent>
    </StyledCard>
  )
}
export default RegisterEquipForm
