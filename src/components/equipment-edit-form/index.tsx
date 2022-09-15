import { FormControl, MenuItem } from '@mui/material'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import api from '../../api/config'
import { useFormik } from 'formik'
import {
  Container,
  StyledCard,
  StyledForm,
  FormContainer,
  StyledInputLabel,
  StyledSelect,
  StyledTextField
} from './styles'

const EquipmentEditForm = () => {
  // const navigate = useNavigate()
  const validationSchema = yup.object().shape({
    productType: yup.string().required('Esse campo é obrigatório'),
    tippingNumber: yup.string().required('Esse campo é obrigatório'),
    brand: yup.string().trim().required('Esse campo é obrigatório'),
    serialNumber: yup.string().trim().required('Esse campo é obrigatório'),
    model: yup.string().trim().required('Esse campo é obrigatório'),
    acquisitionType: yup.string().trim().required('Esse campo é obrigatório')
  })
  const formik = useFormik({
    initialValues: {
      productType: '',
      tippingNumber: '',
      brand: '',
      serialNumber: '',
      model: '',
      acquisitionType: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await api.put('/updateEquipment', {
          // rota fictícia
          type: values.productType,
          tippingNumber: values.tippingNumber
        })
        toast.success('Equipamento cadastrado.')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
  })
  // const [state, setState] = useState(0)
  return (
    <Container>
      <StyledCard>
        <StyledForm onSubmit={formik.handleSubmit}>
          <FormContainer>
            <FormControl fullWidth>
              <StyledInputLabel id="productType-label">
                Tipo de Produto
              </StyledInputLabel>
              <StyledSelect
                id="productType-label"
                data-testid="productType-select"
                type="text"
                name="productType"
                variant="outlined"
                error={
                  formik.touched.productType &&
                  Boolean(formik.errors.productType)
                }
                onChange={formik.handleChange}
                value={formik.values.productType}>
                <MenuItem>CPU</MenuItem>
              </StyledSelect>
            </FormControl>

            <StyledTextField
              id="tippingNumber-input"
              label="N° de Tombamento"
              type="text"
              name="tippingNumber"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.tippingNumber}
              helperText={
                formik.touched.tippingNumber && formik.errors.tippingNumber
              }
              error={
                formik.touched.tippingNumber &&
                Boolean(formik.errors.tippingNumber)
              }
            />

            <StyledTextField
              id="brand-input"
              label="Marca"
              type="text"
              name="brand"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.brand}
              helperText={formik.touched.brand && formik.errors.brand}
              error={formik.touched.brand && Boolean(formik.errors.brand)}
            />

            <StyledTextField
              id="serialNumber-input"
              label="N° de Série"
              type="text"
              name="serialNumber"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.serialNumber}
              helperText={
                formik.touched.serialNumber && formik.errors.serialNumber
              }
              error={
                formik.touched.serialNumber &&
                Boolean(formik.errors.serialNumber)
              }
            />

            <StyledTextField
              id="model-input"
              label="Modelo"
              type="text"
              name="model"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.model}
              helperText={formik.touched.model && formik.errors.model}
              error={formik.touched.model && Boolean(formik.errors.model)}
            />

            <StyledTextField
              id="acquisitionType-input"
              label="Tipo de Aquisição"
              type="text"
              name="acquisitionType"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.model}
              helperText={
                formik.touched.acquisitionType && formik.errors.acquisitionType
              }
              error={
                formik.touched.acquisitionType &&
                Boolean(formik.errors.acquisitionType)
              }
            />
          </FormContainer>
        </StyledForm>
      </StyledCard>
    </Container>
  )
}
export default EquipmentEditForm
