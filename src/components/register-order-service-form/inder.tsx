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
  StyledDescTextField,
  ButtonContainer
} from './styles'
import { theme } from '../../styles/theme'
import { FormControl } from '@mui/material'

const RegisterOrderServiceForm = () => {
  const navigate = useNavigate()
  const validationSchema = yup.object().shape({
    authorFunctionalNumber: yup.string().required('Esse campo é obrigatório'),
    senderName: yup.string().required('Esse campo é obrigatório'),
    senderFunctionalNumber: yup.string().required('Esse campo é obrigatório'),
    date: yup.date(),
    tippingNumber: yup.string().required('Esse campo é obrigatório'),
    status: yup.string(),
    productType: yup.string().required('Esse campo é obrigatório'),
    description: yup.string().length(250)
  })
  const formik = useFormik({
    initialValues: {
      authorFunctionalNumber: '',
      senderName: '',
      senderFunctionalNumber: '',
      date: '',
      tippingNumber: '',
      status: '',
      productType: '',
      description: '',
      userName: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await api.post('/create-order-service/', {
          type: values.productType,
          tippingNumber: values.tippingNumber,
          description: values.description,
          date: values.date,
          authorFunctionalNumber: values.authorFunctionalNumber,
          senderName: values.senderName,
          senderFunctionalNumber: values.senderFunctionalNumber
        })
        toast.success('Ordem de serviço criada.')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
  })
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
                }></StyledTextField>
            </FormControl>
            <StyledTextField
              id="tippingNumber-input"
              data-testid="tippingNumber-input"
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
              type="text"
              name="status"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.status}
              helperText={formik.touched.status && formik.errors.status}
              error={formik.touched.status && Boolean(formik.errors.status)}
            />
            <StyledTextField
              id="productType-input"
              label="Tipo de equipamento"
              type="text"
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
              id="data-input"
              label="DD/MM/AAAA"
              type="text"
              name="date"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.date}
              helperText={formik.touched.date && formik.errors.date}
              error={formik.touched.date && Boolean(formik.errors.date)}
            />
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
