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
  ButtonContainer,
  Column,
  StyledTextArea
} from './styles'
import { theme } from '../../styles/theme'
import { Equipment } from '../../pages/order-service'
import { Autocomplete } from '@mui/material'

type Props = {
  user: {
    name: string
    token: string
  }
  initialData: Equipment | undefined
  handleTippingNumberChange: (data: string) => void
  units: { id: string; name: string; localization: string }[] | undefined
}

const RegisterOrderServiceForm = ({
  initialData,
  user,
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
    situacao: yup.string().trim(),
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
      situacao: initialData?.formattedStatus,
      productType: initialData?.type,
      description: '',
      userName: user.name,
      destination: ''
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await api.post(
          `equipment/create-order-service/${initialData?.id}`,
          {
            authorFunctionalNumber: formik.values.authorFunctionalNumber,
            destination: formik.values.destination,
            senderName: formik.values.senderName,
            senderFunctionalNumber: formik.values.senderFunctionalNumber,
            date: formik.values.date,
            description: formik.values.description,
            receiverName: formik.values.userName
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          }
        )

        toast.success('Ordem de serviço criada.')
        navigate('/order-services')
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
            <Column>
              <StyledTextField
                id="senderName-select-label"
                data-testid="senderName-select"
                label="Nome do entregador"
                type="text"
                name="senderName"
                fullWidth
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
              <StyledTextField
                aria-readonly
                id="senderFunctionalNumber-input"
                label="N° funcional"
                type="text"
                fullWidth
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
                InputLabelProps={{ shrink: true }}
                id="data-input"
                label="Data"
                type="date"
                name="date"
                fullWidth
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.date}
                helperText={formik.touched.date && formik.errors.date}
                error={formik.touched.date && Boolean(formik.errors.date)}
              />
            </Column>
            <Column>
              <StyledTextField
                id="tippingNumber-input"
                data-testid="tippingNumber-input"
                label="N° Tombamento"
                type="text"
                name="tippingNumber"
                variant="outlined"
                fullWidth
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
                id="situacao-input"
                label="Situação"
                fullWidth
                InputLabelProps={{ shrink: true }}
                type="text"
                name="situacao"
                variant="outlined"
                aria-readonly
                value={formik.values.situacao}
                helperText={formik.touched.situacao && formik.errors.situacao}
                error={formik.touched.situacao && Boolean(formik.errors.situacao)}
              />
              <StyledTextField
                InputLabelProps={{ shrink: true }}
                id="productType-input"
                label="Tipo de equipamento"
                type="text"
                fullWidth
                name="productType"
                variant="outlined"
                aria-readonly
                value={formik.values.productType}
                helperText={
                  formik.touched.productType && formik.errors.productType
                }
                error={
                  formik.touched.productType &&
                  Boolean(formik.errors.productType)
                }
              />
            </Column>
            <Column>
              <StyledTextField
                aria-readonly
                id="brand-input"
                label="Nome do recebedor"
                type="text"
                name="userName"
                fullWidth
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.userName}
                helperText={formik.touched.userName && formik.errors.userName}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
              />
              <StyledTextField
                aria-aria-readonly
                label="N° funcional do recebedor"
                type="text"
                name="authorFunctionalNumber"
                variant="outlined"
                fullWidth
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

              <Autocomplete
                disablePortal
                options={units ?? []}
                getOptionLabel={(option) =>
                  `${option.name} - ${option.localization}`
                }
                onChange={(_, value) =>
                  formik.setFieldValue('destination', value?.id)
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
                renderInput={(params) => (
                  <StyledTextField
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
            </Column>
          </FormContainer>

          <StyledTextArea
            label="Descrição"
            data-testid="description-input"
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

          <ButtonContainer>
            <Button
              variant="contained"
              styledColor={theme.palette.grey[100]}
              textColor={theme.palette.grey[900]}
              onClick={() => navigate('/order-services')}>
              Voltar
            </Button>{' '}
            <Button
              variant="contained"
              data-testid="register-button"
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
