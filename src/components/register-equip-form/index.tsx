import { FormControl, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  StyledCard,
  StyledForm,
  StyledSelect,
  StyledTextField,
  FormContainer,
  StyledDescTextField,
  ButtonContainer,
  StyledInputLabel
} from './styles'
import * as yup from 'yup'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../api/config'
import { useFormik } from 'formik'
import { Button } from '../button'
import { theme } from '../../styles/theme'
import Autocomplete from '@mui/material/Autocomplete'
import { AxiosResponse } from 'axios'

interface unit {
  name: string
  id: string
  localization: string
}

const RegisterEquipForm = () => {
  const navigate = useNavigate()
  const validationSchema = yup.object().shape({
    productType: yup.string().required('Esse campo é obrigatório'),
    tippingNumber: yup.string().required('Esse campo é obrigatório'),
    brand: yup.string().trim().required('Esse campo é obrigatório'),
    serialNumber: yup.string().trim().required('Esse campo é obrigatório'),
    model: yup.string().trim().required('Esse campo é obrigatório'),
    acquisitionType: yup.string().trim().required('Esse campo é obrigatório'),
    acquisitionDate: yup.date().required('Esse campo é obrigatório'),
    invoiceNumber: yup.string().trim().required('Esse campo é obrigatório'),
    processor: yup.string().trim().required('Esse campo é obrigatório'),
    ramMemory: yup.string().trim().required('Esse campo é obrigatório'),
    storageType: yup.string().trim().required('Esse campo é obrigatório'),
    storageAmount: yup.string().trim().required('Esse campo é obrigatório'),
    monitorType: yup.string().trim().required('Esse campo é obrigatório'),
    monitorSize: yup.string().trim().required('Esse campo é obrigatório'),
    initialUseDate: yup.string().max(4),
    power: yup.string().required('Esse campo é obrigatório'),
    unitId: yup.string().trim().required('Esse campo é obrigatório'),
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
      acquisitionDate: '',
      invoiceNumber: '',
      processor: '',
      ramMemory: '',
      storageType: '',
      storageAmount: '',
      monitorType: '',
      monitorSize: '',
      initialUseDate: '',
      power: '',
      unitId: '',
      description: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await api.post('/createEquipment', {
          type: values.productType,
          tippingNumber: values.tippingNumber,
          brand: values.brand,
          serialNumber: values.serialNumber,
          model: values.model,
          acquisition: values.acquisitionType,
          acquisitionDate: values.acquisitionDate,
          invoiceNumber: values.invoiceNumber,
          processor: values.processor,
          ram_size: values.ramMemory,
          storageType: values.storageType,
          storageAmount: values.storageAmount,
          screenType: values.monitorType,
          screenSize: values.monitorSize,
          initialUseDate: values.initialUseDate,
          power: values.power,
          unit: values.unitId,
          description: values.description
        })
        toast.success('Equipamento cadastrado.')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
  })
  const [state, setState] = useState(0)
  const [units, setUnits] = useState<unit[]>([])
  useEffect(() => {
    const getUnits = async () => {
      try {
        const { data }: AxiosResponse<unit[]> = await api.get('/getAllUnits')
        setUnits(data)
      } catch (error) {}
    }
    getUnits()
  }, [])
  return (
    <Container>
      <StyledCard>
        <StyledForm onSubmit={formik.handleSubmit}>
          <FormContainer>
            <FormControl fullWidth>
              <StyledInputLabel id="productType-select-label">
                Tipo produto
              </StyledInputLabel>
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
                <MenuItem onClick={() => setState(0)} value="Scanner">
                  Scanner
                </MenuItem>
                <MenuItem onClick={() => setState(3)} value="Estabilizador">
                  Estabilizador
                </MenuItem>
                <MenuItem onClick={() => setState(0)} value="Webcam">
                  Webcam
                </MenuItem>
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
              id="initialUseDate-input"
              label="Ano do equipamento"
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
            <Autocomplete
              disablePortal
              id="unitId-input"
              options={units ?? []}
              getOptionLabel={(option) =>
                `${option.name} - ${option.localization}`
              }
              renderInput={(params) => (
                <StyledTextField
                  {...params}
                  label="Unidade"
                  helperText={formik.touched.unitId && formik.errors.unitId}
                  error={formik.touched.unitId && Boolean(formik.errors.unitId)}
                />
              )}
              onChange={(_, value) => formik.setFieldValue('unit', value?.id)}
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
                id="processor-input"
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
                name="monitorSize"
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
                id="power-input"
                label="Potência"
                type="text"
                name="power"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.power}
                helperText={formik.touched.power && formik.errors.power}
                error={formik.touched.power && Boolean(formik.errors.power)}
              />
            )}
          </FormContainer>
          <StyledDescTextField
            id="description-input"
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
              textColor={theme.palette.grey[900]}
              onClick={() => navigate('/equipaments')}>
              Voltar
            </Button>{' '}
            <Button
              variant="contained"
              type="submit"
              styledColor={theme.palette.primary.main}>
              Cadastrar
            </Button>
          </ButtonContainer>
        </StyledForm>
      </StyledCard>
    </Container>
  )
}
export default RegisterEquipForm
