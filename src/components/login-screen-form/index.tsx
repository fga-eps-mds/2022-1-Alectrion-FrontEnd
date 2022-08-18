import { CardContent } from '@mui/material'
import { useFormik } from 'formik'
import { FormStyled, StyledCard } from './styles'
import * as yup from 'yup'
import { theme } from '../../styles/theme'
import BasicTextFields from '../text-field'
import { Button } from '../button'
import LoginLogo from '../login-screen-logo'
import api from '../../api/config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginScreenForm = () => {
  const navigate = useNavigate()
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
    onSubmit: async (values) => {
      try {
        await api.post('/user', {
          email: values.email,
          password: values.password
        })
        toast.success('Usuário encontrado.')
        navigate('/Home')
      } catch (error) {
        toast.error('Usuário não encontrado.')
      }
    }
  })

  return (
    <StyledCard classes={{ root: 'rootCard' }}>
      <CardContent>
        <FormStyled onSubmit={formik.handleSubmit}>
          <LoginLogo />
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
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          <BasicTextFields
            size="small"
            id="password"
            name="password"
            label="Senha"
            variant="outlined"
            value={formik.values.password}
            type="password"
            onChange={formik.handleChange}
            color="primary"
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />

          <Button
            id="login"
            name="loginButton"
            variant="contained"
            type="submit"
            styledColor={theme.palette.primary.main}
            classes={{ root: 'rootLogin' }}
            marginTop={'37.88px'}
            marginBottom={'94px'}>
            Login
          </Button>
        </FormStyled>
      </CardContent>
    </StyledCard>
  )
}

export default LoginScreenForm
