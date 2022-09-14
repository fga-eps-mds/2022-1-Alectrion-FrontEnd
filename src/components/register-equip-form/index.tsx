import { useNavigate } from 'react-router-dom'
import {
  Container,
  StyledCard,
  StyledForm,
  StyledTextField,
  FormContainer,
  StyledDescTextField,
  ButtonContainer
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
    productType: yup.string().trim().required('Esse campo é obrigatório'),
    tippingNumber: yup
      .string()
      .trim()
      .required('Esse campo é obrigatório')
      .test('valida campo', 'Apenas números', (value) => {
        if (value) {
          return /^[0-9]/.test(value)
        } else return false
      }),
    brand: yup.string().trim().required('Esse campo é obrigatório'),
    serialNumber: yup
      .string()
      .trim()
      .required('Esse campo é obrigatório')
      .test('valida campo', 'Apenas números', (value) => {
        if (value) {
          return /^[0-9]/.test(value)
        } else return false
      }),
    model: yup.string().trim().required('Esse campo é obrigatório'),
    acquisitionType: yup.string().trim().required('Esse campo é obrigatório'),
    acquisitionDate: yup
      .date()
      .required('Esse campo é obrigatório')
      .test('test date', 'Data inválida', (value) => {
        if (value) {
          return value < new Date()
        } else return false
      }),
    invoiceNumber: yup
      .string()
      .trim()
      .required('Esse campo é obrigatório')
      .test('valida campo', 'Apenas números', (value) => {
        if (value) {
          return /^[0-9]/.test(value)
        } else return false
      }),
    processor: yup
      .string()
      .trim()
      .when('productType', {
        is: 'CPU',
        then: yup.string().required('Esse campo é obrigatório')
      }),
    ramMemory: yup
      .string()
      .trim()
      .when('productType', {
        is: 'CPU',
        then: yup
          .string()
          .required('Esse campo é obrigatório')
          .test('valida campo', 'Apenas números', (value) => {
            if (value) {
              return /^[0-9]/.test(value)
            } else return false
          })
      }),
    storageType: yup
      .string()
      .trim()
      .when('productType', {
        is: 'CPU',
        then: yup.string().required('Esse campo é obrigatório')
      }),
    storageAmount: yup
      .string()
      .trim()
      .when('productType', {
        is: 'CPU',
        then: yup
          .string()
          .required('Esse campo é obrigatório')
          .test('valida campo', 'Apenas números', (value) => {
            if (value) {
              return /^[0-9]/.test(value)
            } else return false
          })
      }),
    monitorType: yup
      .string()
      .trim()
      .when('productType', {
        is: 'MONITOR',
        then: yup.string().required('Esse campo é obrigatório')
      }),
    monitorSize: yup
      .string()
      .trim()
      .when('productType', {
        is: 'MONITOR',
        then: yup
          .string()
          .required('Esse campo é obrigatório')
          .test('valida campo', 'Apenas números', (value) => {
            if (value) {
              return /^[0-9]/.test(value)
            } else return false
          })
      }),
    initialUseDate: yup
      .string()
      .max(4)
      .test('valida campo', 'Apenas números', (value) => {
        if (value) {
          return /^[0-9]/.test(value)
        } else return true
      }),
    power: yup
      .string()
      .when('productType', {
        is: 'STABILIZER',
        then: yup.string().required('Esse campo é obrigatório')
      })
      .when('productType', {
        is: 'NOBREAK',
        then: yup.string().required('Esse campo é obrigatório')
      })
      .test('valida campo', 'Apenas números', (value) => {
        if (value) {
          return /^[0-9]/.test(value)
        } else return true
      }),
    unitId: yup.string().trim().required('Esse campo é obrigatório'),
    description: yup.string().min(3).max(250).trim()
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
      const body = {
        type: values.productType,
        tippingNumber: values.tippingNumber,
        brandName: values.brand,
        serialNumber: values.serialNumber,
        model: values.model,
        status: 'ACTIVE',
        acquisitionName: values.acquisitionType,
        acquisitionDate: values.acquisitionDate,
        invoiceNumber: values.invoiceNumber,
        processor: values.processor !== '' ? values.processor : null,
        ram_size: values.ramMemory !== '' ? values.ramMemory : null,
        storageType: values.storageType !== '' ? values.storageType : null,
        storageAmount:
          values.storageAmount !== '' ? values.storageAmount : null,
        screenType: values.monitorType !== '' ? values.monitorType : null,
        screenSize: values.monitorSize !== '' ? values.monitorSize : null,
        initialUseDate:
          values.initialUseDate !== '' ? new Date(values.initialUseDate) : null,
        power: values.power !== '' ? values.power : null,
        unitId: values.unitId,
        description: values.description !== '' ? values.description : null
      }
      const formattedBody = Object.entries(body)
        .filter((object) => object[1] !== null)
        .reduce((newObj, [key, val]) => {
          return { ...newObj, [key]: val }
        }, {})
      try {
        await api.post('equipment/createEquipment', formattedBody)
        toast.success('Equipamento cadastrado.')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
      formik.resetForm()
    }
  })

  console.log(formik.errors)

  const [units, setUnits] = useState<unit[]>([])
  useEffect(() => {
    const getUnits = async () => {
      try {
        const { data }: AxiosResponse<unit[]> = await api.get(
          '/equipment/getAllUnits'
        )
        console.log(data)
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
            <Autocomplete
              disablePortal
              id="unitId-input"
              options={[
                { value: 'CPU', label: 'CPU' },
                { label: 'Monitor', value: 'MONITOR' },
                { label: 'Nobreak', value: 'NOBREAK' },
                { label: 'Escaneador', value: 'SCANNER' },
                { label: 'Estabilizador', value: 'STABILIZER' },
                { value: 'WEBCAM', label: 'Webcam' }
              ]}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <StyledTextField
                  {...params}
                  label="Tipo produto"
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
              value={formik.values.acquisitionType}
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
              type="date"
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
              onChange={(_, value) => formik.setFieldValue('unitId', value?.id)}
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

            {formik.values.productType === 'CPU' && (
              <>
                <StyledTextField
                  id="ramMemory-input"
                  label="Memória RAM"
                  type="text"
                  name="ramMemory"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.ramMemory}
                  helperText={
                    formik.touched.ramMemory && formik.errors.ramMemory
                  }
                  error={
                    formik.touched.ramMemory && Boolean(formik.errors.ramMemory)
                  }
                />

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

                <Autocomplete
                  disablePortal
                  options={[
                    { value: 'SSD', label: 'SSD' },
                    { label: 'HD', value: 'HD' }
                  ]}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <StyledTextField
                      {...params}
                      label="Tipo armazenamento"
                      helperText={
                        formik.touched.storageType && formik.errors.storageType
                      }
                      error={
                        formik.touched.storageType &&
                        Boolean(formik.errors.storageType)
                      }
                    />
                  )}
                  onChange={(_, value) =>
                    formik.setFieldValue('storageType', value?.value)
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
                  id="processor-input"
                  label="Processador"
                  type="text"
                  name="processor"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.processor}
                  helperText={
                    formik.touched.processor && formik.errors.processor
                  }
                  error={
                    formik.touched.processor && Boolean(formik.errors.processor)
                  }
                />
              </>
            )}
            {formik.values.productType === 'MONITOR' && (
              <>
                <Autocomplete
                  disablePortal
                  options={[
                    { label: 'LCD', value: 'LCD' },
                    { label: 'OLED', value: 'OLED' },
                    { label: 'LED', value: 'LED' },
                    { label: 'TN', value: 'TN' },
                    { label: 'VA', value: 'VA' },
                    { label: 'IPS', value: 'IPS' }
                  ]}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <StyledTextField
                      {...params}
                      label="Tipo monitor"
                      helperText={
                        formik.touched.monitorType && formik.errors.monitorType
                      }
                      error={
                        formik.touched.monitorType &&
                        Boolean(formik.errors.monitorType)
                      }
                    />
                  )}
                  onChange={(_, value) =>
                    formik.setFieldValue('monitorType', value?.value)
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
                  id="monitorSize-input"
                  label="Tamanho monitor"
                  type="text"
                  name="monitorSize"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.monitorSize}
                  helperText={
                    formik.touched.monitorSize && formik.errors.monitorSize
                  }
                  error={
                    formik.touched.monitorSize &&
                    Boolean(formik.errors.monitorSize)
                  }
                />
              </>
            )}
            {formik.values.productType === 'NOBREAK' ||
              (formik.values.productType === 'STABILIZER' && (
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
              ))}
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
