import { useFormik } from 'formik'
import CardContent from '@mui/material/CardContent'
import { StyledCard, StyledForm, StyledSelect, StyledTextField } from './styles'
import * as yup from 'yup'
import { Button } from '../button'
import { FormControl, InputLabel, MenuItem } from '@mui/material'
import { theme } from '../../styles/theme'
import api from '../../api/config'
import { toast } from 'react-toastify'

const RegisterUserForm = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Esse campo é obrigatório')
      .email('Insira um email válido'),
    name: yup.string().required('Esse campo é obrigatório'),
    username: yup.string().required('Esse campo é obrigatório'),
    job: yup.string().required('Esse campo é obrigatório'),
    profile: yup.string().required('Esse campo é obrigatório'),
    newPassword: yup.string().min(4).required('Esse campo é obrigatório'),
    confirmPassword: yup.string().min(4).required('Esse campo é obrigatório')
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      job: 'GENERICO',
      profile: 'BASICO',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await api.post('/user/create', {
          name: values.name,
          username: values.username,
          email: values.email,
          jobFunction: values.job,
          role: values.profile,
          password: values.newPassword
        })
        toast.success('Usuário criado.')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
  })
  return (
    <StyledCard>
      <CardContent>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledTextField
            size="small"
            id="outlined-basic"
            label="Nome completo"
            type="text"
            name="name"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.name}
            helperText={formik.touched.name && formik.errors.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
          <StyledTextField
            size="small"
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          <StyledTextField
            size="small"
            id="outlined-basic"
            label="Nome de usuário"
            type="text"
            name="username"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.username}
            helperText={formik.touched.username && formik.errors.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
          />
          <FormControl fullWidth>
            <InputLabel id="job-select-label">Cargo</InputLabel>
            <StyledSelect
              id="job-select-label"
              label="Cargo"
              type="text"
              name="job"
              variant="outlined"
              error={formik.touched.job && Boolean(formik.errors.job)}
              onChange={formik.handleChange}
              value={formik.values.job}>
              <MenuItem value="DELEGADO">Básico</MenuItem>
              <MenuItem value="AGENTE_POLICIA">Agente de policia</MenuItem>
              <MenuItem value="ESCRIVAO">Escrivão</MenuItem>
              <MenuItem value="COORDENADOR">Coordenador</MenuItem>
              <MenuItem value="CHEFE_SECAO">Chefe de seção</MenuItem>
              <MenuItem value="GENERICO">Genérico</MenuItem>
            </StyledSelect>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="profile-select-label">Perfil</InputLabel>
            <StyledSelect
              id="profile-select-label"
              label="Perfil"
              type="text"
              name="profile"
              variant="outlined"
              error={formik.touched.profile && Boolean(formik.errors.profile)}
              onChange={formik.handleChange}
              value={formik.values.profile}>
              <MenuItem value="BASICO">Básico</MenuItem>
              <MenuItem value="ADMIN">Admin</MenuItem>
              <MenuItem value="GERENTE">Gerente</MenuItem>
            </StyledSelect>
          </FormControl>
          <StyledTextField
            size="small"
            id="outlined-basic"
            label="Nova senha"
            type="password"
            name="newPassword"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
          />
          <StyledTextField
            size="small"
            id="outlined-basic"
            label="Confirmar senha"
            type="password"
            name="confirmPassword"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
          />
          <Button
            variant="contained"
            type="submit"
            styledColor={theme.palette.primary.main}>
            Cadastrar
          </Button>
          <Button
            variant="contained"
            styledColor={theme.palette.grey[100]}
            textColor={theme.palette.grey[900]}>
            Voltar
          </Button>
        </StyledForm>
      </CardContent>
    </StyledCard>
  )
}

export default RegisterUserForm
