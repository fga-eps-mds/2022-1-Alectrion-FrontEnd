import { CardContent } from '@mui/material'
import { useFormik } from 'formik'
import { FormStyled, StyledCard } from './styles'
import * as yup from 'yup'
// import { theme } from '../../styles/theme'
import BasicTextFields from '../text-field'

const LoginScreenForm = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('O campo é obrigatório.'),
    password: yup.string().min(4).required('O campo é obrigatório.')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert({ email: values.email, password: values.password })
    }
  })
  return (
    <StyledCard classes={{ root: 'rootCard' }}>
      <CardContent>
        <FormStyled onSubmit={formik.handleSubmit}>
          <BasicTextFields
            size="small"
            id="email"
            name="email"
            label="E-Mail"
            variant="outlined"
            value={formik.values.email}
            type="email"
            onChange={formik.handleChange}
            color="primary"
          />
        </FormStyled>
      </CardContent>
    </StyledCard>
  )
}

export default LoginScreenForm
