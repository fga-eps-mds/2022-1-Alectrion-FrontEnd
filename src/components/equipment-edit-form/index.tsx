// import { FormControl, MenuItem } from '@mui/material'
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
  // StyledInputLabel,
  // StyledSelect,
  StyledTextField,
  DescriptionTextField,
  ButtonContainer
} from './styles'
import { Button } from '../button'
import { theme } from '../../styles/theme'
import Autocomplete from '@mui/material/Autocomplete'

const EquipmentEditForm = () => {
  // const navigate = useNavigate()
  const validationSchema = yup.object().shape({
    productType: yup.string().required('Esse campo é obrigatório'),
    tippingNumber: yup.string().required('Esse campo é obrigatório'),
    brand: yup.string().trim().required('Esse campo é obrigatório'),
    serialNumber: yup.string().trim().required('Esse campo é obrigatório'),
    model: yup.string().trim().required('Esse campo é obrigatório'),
    acquisitionType: yup.string().trim().required('Esse campo é obrigatório'),
    initialUseDate: yup.string().max(4), // não é obrigatório?
    acquisitionDate: yup.date().required('Esse campo é obrigatório'),
    invoiceNumber: yup.string().trim().required('Esse campo é obrigatório'),
    description: yup.string().max(250)
  })
  const formik = useFormik({
    initialValues: {
      productType: '',
      tippingNumber: '',
      brand: '',
      serialNumber: '',
      model: '',
      acquisitionType: '',
      initialUseDate: '',
      acquisitionDate: '',
      invoiceNumber: '',
      description: ''
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
            <Autocomplete
              disablePortal
              id="unitId-input" // id
              options={[
                // as opções do componente autocomplete
                { label: 'CPU', value: 'CPU' },
                { label: 'Monitor', value: 'MONITOR' },
                { label: 'Nobreak', value: 'NOBREAK' },
                { label: 'Escaneador', value: 'SCANNER' },
                { label: 'Estabilizador', value: 'STABILIZER' },
                { value: 'WEBCAM', label: 'Webcam' }
              ]}
              getOptionLabel={(option) => option.label}
              renderInput={(
                parameter // esse atributo recebe uma arrow function que renderiza um textfield.
              ) => (
                <StyledTextField
                  {...parameter}
                  label="Tipo de Produto"
                  helperText={
                    formik.touched.productType && formik.errors.productType
                  }
                  error={
                    formik.touched.productType &&
                    Boolean(formik.errors.productType)
                  }
                />
              )}
              onChange={(_, value) =>
                formik.setFieldValue('productType', value?.value)
              }
              fullWidth
              className="autocomplete"
              sx={{
                padding: 0,
                '& .MuiOutlinedInput-root': {
                  padding: '0 !important'
                },
                '& .MuiAutocomplete-input': {
                  padding: '16.5px !important'
                }
              }}
            />

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

            <StyledTextField
              id="initialUseDate-input"
              label="Ano do Equipamento"
              type="text"
              name="initialUseDate"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.initialUseDate}
              helperText={
                formik.touched.initialUseDate && formik.errors.initialUseDate
              }
              error={
                formik.touched.initialUseDate &&
                Boolean(formik.errors.initialUseDate)
              }
            />

            <StyledTextField
              id="acquisitionDate-input"
              label="Data de Aquisição"
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
              id="invoiceNumber-input"
              label="N° da nota fiscal"
              type="text"
              name="invoiceNumber"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.invoiceNumber}
              helperText={
                formik.touched.invoiceNumber && formik.errors.invoiceNumber
              }
              error={
                formik.touched.invoiceNumber &&
                Boolean(formik.errors.invoiceNumber)
              }
            />
          </FormContainer>
          <DescriptionTextField
            size="small"
            id="description-input"
            rows="4"
            multiline={true}
            label="Descrição"
            type="text"
            name="description"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.description}
            helperText={formik.touched.description && formik.errors.description}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
          />
          <ButtonContainer>
            <Button
              variant="contained"
              styledColor={theme.palette.grey[100]}
              textColor={theme.palette.grey[900]}>
              Voltar
            </Button>{' '}
            <Button
              variant="contained"
              type="submit"
              styledColor={theme.palette.primary.main}>
              Salvar
            </Button>
          </ButtonContainer>
        </StyledForm>
      </StyledCard>
    </Container>
  )
}
export default EquipmentEditForm
