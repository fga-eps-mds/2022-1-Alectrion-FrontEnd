import { FormControl, MenuItem } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import {
  Container,
  StyledCard,
  StyledForm,
  StyledSelect,
  StyledTextField,
  FormContainer
} from './styles'
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
    acquisitionDate: yup.date(),
    fiscalNote: yup.string(),
    processor: yup.string(),
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
      productType: 'Tipo produto',
      tippingNumber: '',
      brand: '',
      serialNumber: '',
      model: '',
      acquisitionType: '',
      acquisitionDate: '',
      fiscalNote: '',
      processor: '',
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
          processor: values.processor,
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
    <Container>
      <StyledCard>
        <StyledForm onSubmit={formik.handleSubmit}>
          <FormContainer>
            <FormControl fullWidth>
              <StyledSelect
                id="productType-select-label"
                data-testid="productType-select"
                label="Tipo produto"
                type="text"
                name="productType"
                variant="outlined"
                error={
                  formik.touched.productType &&
                  Boolean(formik.errors.productType)
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
            <StyledTextField
              id="tippingNumber-input"
              label="N° Tombamento"
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
              label="N° Série"
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
              label="Tipo aquisição"
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
            <StyledTextField
              id="equipmentYear-input"
              label="Ano do equipamento"
              type="text"
              name="equipmentYear"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.equipmentYear}
              helperText={
                formik.touched.equipmentYear && formik.errors.equipmentYear
              }
              error={
                formik.touched.equipmentYear &&
                Boolean(formik.errors.equipmentYear)
              }
            />
            <StyledTextField
              id="acquisitionDate-input"
              label="Data de aquisição"
              type="text"
              name="acquisitionDate"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.acquisitionDate}
              helperText={
                formik.touched.acquisitionDate && formik.errors.acquisitionDate
              }
              error={
                formik.touched.acquisitionDate &&
                Boolean(formik.errors.acquisitionDate)
              }
            />
            <StyledTextField
              id="fiscalNote-input"
              label="N° da nota fiscal"
              type="text"
              name="model"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.fiscalNote}
              helperText={formik.touched.fiscalNote && formik.errors.fiscalNote}
              error={
                formik.touched.fiscalNote && Boolean(formik.errors.fiscalNote)
              }
            />
            {state === 1 && (
              <StyledTextField
                id="ramMemory-input"
                label="Memória RAM"
                type="text"
                name="ramMemory"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.ramMemory}
                helperText={formik.touched.ramMemory && formik.errors.ramMemory}
                error={
                  formik.touched.ramMemory && Boolean(formik.errors.ramMemory)
                }
              />
            )}
            {state === 1 && (
              <StyledTextField
                id="storageAmount-input"
                label="Armazenamento"
                type="text"
                name="storageAmount"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.storageAmount}
                helperText={
                  formik.touched.storageAmount && formik.errors.storageAmount
                }
                error={
                  formik.touched.storageAmount &&
                  Boolean(formik.errors.storageAmount)
                }
              />
            )}
            {state === 1 && (
              <StyledTextField
                id="storageType-input"
                label="Tipo armazenamento"
                type="text"
                name="storageType"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.storageType}
                helperText={
                  formik.touched.storageType && formik.errors.storageType
                }
                error={
                  formik.touched.storageType &&
                  Boolean(formik.errors.storageType)
                }
              />
            )}
            {state === 1 && (
              <StyledTextField
                id="storageType-input"
                label="Processador"
                type="text"
                name="processor"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.processor}
                helperText={formik.touched.processor && formik.errors.processor}
                error={
                  formik.touched.processor && Boolean(formik.errors.processor)
                }
              />
            )}
            {state === 2 && (
              <StyledTextField
                id="monitorType-input"
                label="Tipo monitor"
                type="text"
                name="monitorType"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.monitorType}
                helperText={
                  formik.touched.monitorType && formik.errors.monitorType
                }
                error={
                  formik.touched.monitorType &&
                  Boolean(formik.errors.monitorType)
                }
              />
            )}
            {state === 2 && (
              <StyledTextField
                id="monitorSize-input"
                label="Tamanho monitor"
                type="text"
                name="monitorType"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.monitorType}
                helperText={
                  formik.touched.monitorType && formik.errors.monitorType
                }
                error={
                  formik.touched.monitorType &&
                  Boolean(formik.errors.monitorType)
                }
              />
            )}
            {state === 3 && (
              <StyledTextField
                id="potency-input"
                label="Potência"
                type="text"
                name="potency"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.potency}
                helperText={formik.touched.potency && formik.errors.potency}
                error={formik.touched.potency && Boolean(formik.errors.potency)}
              />
            )}
            <StyledTextField
              id="description-input"
              label="Descrição"
              type="text"
              name="description"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.description}
              helperText={
                formik.touched.description && formik.errors.description
              }
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
            />
          </FormContainer>
        </StyledForm>
      </StyledCard>
    </Container>
  )
}
export default RegisterEquipForm
