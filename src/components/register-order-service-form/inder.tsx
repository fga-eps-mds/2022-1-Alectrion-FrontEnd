import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import api from '../../api/config'
import { Button } from '../button'
import {
  Container,
  StyledCard,
  StyledForm,
  StyledTextField,
  FormContainer,
  ButtonContainer
} from './styles'
import { theme } from '../../styles/theme'
import { Autocomplete, FormControl, TextField } from '@mui/material'
import { Equipment } from '../../pages/order-service'

type Props = {
  userName: string
  initialData: Equipment | undefined
  handleTippingNumberChange: (data: string) => void
  units: { id: string; name: string; localization: string }[] | undefined
}

const RegisterOrderServiceForm = ({
  initialData,
  userName,
  handleTippingNumberChange,
  units
}: Props) => {
  const navigate = useNavigate()
  const validationSchema = yup.object().shape({
    authorFunctionalNumber: yup
      .string()
      .trim()
      .required('Esse campo é obrigatório'),
    senderName: yup.string().trim().required('Esse campo é obrigatório'),
    senderFunctionalNumber: yup
      .string()
      .trim()
      .required('Esse campo é obrigatório'),
    date: yup
      .date()
      .required('Esse campo é obrigatório')
      .test('teste', 'Data inválida', (value) => {
        if (value) {
          const date = new Date(value)
          if (date > new Date()) {
            return false
          } else return true
        } else return false
      }),
    tippingNumber: yup.string().trim().required('Esse campo é obrigatório'),
    status: yup.string().trim(),
    destination: yup.string().trim().required('Esse campo é obrigatório'),
    productType: yup.string().trim(),
    description: yup.string().trim().max(250)
  })
  const formik = useFormik({
    initialValues: {
      authorFunctionalNumber: '',
      senderName: '',
      senderFunctionalNumber: '',
      date: '',
      tippingNumber: initialData?.tippingNumber,
      status: initialData?.formattedStatus,
      productType: initialData?.type,
      description: '',
      userName,
      destination: ''
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await api.post(`equipment/create-order-service/${initialData?.id}`, {
          authorId: 'a6a72f19-ba96-4ad6-852a-f17a6a1b2b6d',
          authorFunctionalNumber: formik.values.authorFunctionalNumber,
          destination: formik.values.destination,
          senderName: formik.values.senderName,
          senderFunctionalNumber: formik.values.senderFunctionalNumber,
          date: formik.values.date
        })
        toast.success('Ordem de serviço criada.')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
  })

  console.log(formik.errors)

  return (
    <Container>
      <StyledCard>
        <StyledForm onSubmit={formik.handleSubmit}>
          <FormContainer>
            <FormControl fullWidth>
              <StyledTextField
                id="senderName-select-label"
                data-testid="senderName-select"
                label="Nome do entregador"
                type="text"
                name="senderName"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.senderName}
                helperText={
                  formik.touched.senderName && formik.errors.senderName
                }
                error={
                  formik.touched.senderName && Boolean(formik.errors.senderName)
                }
              />
            </FormControl>
            <StyledTextField
              id="tippingNumber-input"
              data-testid="tippingNumber-input"
              label="N° Tombamento"
              type="text"
              name="tippingNumber"
              variant="outlined"
              onChange={(ev) => {
                formik.setFieldValue('tippingNumber', ev.target.value)
                handleTippingNumberChange(ev.target.value)
              }}
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
              aria-readonly
              id="brand-input"
              label="Nome do recebedor"
              type="text"
              name="userName"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.userName}
              helperText={formik.touched.userName && formik.errors.userName}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
            />
            <StyledTextField
              aria-aria-readonly
              label="N° funcional do autor"
              type="text"
              name="authorFunctionalNumber"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.authorFunctionalNumber}
              helperText={
                formik.touched.authorFunctionalNumber &&
                formik.errors.authorFunctionalNumber
              }
              error={
                formik.touched.authorFunctionalNumber &&
                Boolean(formik.errors.authorFunctionalNumber)
              }
            />
            <StyledTextField
              aria-readonly
              id="senderFunctionalNumber-input"
              label="N° funcional"
              type="text"
              name="senderFunctionalNumber"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.senderFunctionalNumber}
              helperText={
                formik.touched.senderFunctionalNumber &&
                formik.errors.senderFunctionalNumber
              }
              error={
                formik.touched.senderFunctionalNumber &&
                Boolean(formik.errors.senderFunctionalNumber)
              }
            />
            <StyledTextField
              id="status-input"
              label="Status"
              disabled
              InputLabelProps={{ shrink: true }}
              type="text"
              name="status"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.status}
              helperText={formik.touched.status && formik.errors.status}
              error={formik.touched.status && Boolean(formik.errors.status)}
            />
            <StyledTextField
              InputLabelProps={{ shrink: true }}
              id="productType-input"
              label="Tipo de equipamento"
              type="text"
              disabled
              name="productType"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.productType}
              helperText={
                formik.touched.productType && formik.errors.productType
              }
              error={
                formik.touched.productType && Boolean(formik.errors.productType)
              }
            />
            <StyledTextField
              InputLabelProps={{ shrink: true }}
              id="data-input"
              label="Data"
              type="date"
              name="date"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.date}
              helperText={formik.touched.date && formik.errors.date}
              error={formik.touched.date && Boolean(formik.errors.date)}
            />
          </FormContainer>

          <TextField
            label="Descrição"
            name="description"
            multiline
            rows={2}
            maxRows={4}
            onChange={formik.handleChange}
            value={formik.values.description}
            helperText={formik.touched.description && formik.errors.description}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
          />
          <Autocomplete
            disablePortal
            options={units ?? []}
            getOptionLabel={(option) =>
              `${option.name} - ${option.localization}`
            }
            onChange={(_, value) =>
              formik.setFieldValue('destination', value?.id)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Destino"
                helperText={
                  formik.touched.destination && formik.errors.destination
                }
                error={
                  formik.touched.destination &&
                  Boolean(formik.errors.destination)
                }
              />
            )}
          />
          <ButtonContainer>
            <Button
              variant="contained"
              styledColor={theme.palette.grey[100]}
              textColor={theme.palette.grey[900]}
              onClick={() => navigate('/orderservice')}>
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
export default RegisterOrderServiceForm
