import { CardContent, FormControl, MenuItem } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import { StyledCard, StyledForm, StyledSelect, StyledTextField } from './styles'
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
      tippingNumber: '',
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
              label="Tipo produto"
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
              formik.touched.serialNumber && Boolean(formik.errors.serialNumber)
            }
          />
          <StyledTextField
            id="model-input"
            label="N° Tombamento"
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
          {state === 1 && <h1>teste2</h1>}
        </StyledForm>
      </CardContent>
    </StyledCard>
  )
}
export default RegisterEquipForm
