import { useFormik } from 'formik'
import CardContent from '@mui/material/CardContent'
import { StyledCard, StyledForm, StyledSelect, StyledTextField } from './styles'
import * as yup from 'yup'
import { Button } from '../button'
import { FormControl, InputLabel, MenuItem } from '@mui/material'
import { theme } from '../../styles/theme'
// import { StyledReturnButton } from '../button/styles'

const CreateUserScreen = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Insira um email válido')
      .required('Esse campo é obrigatório'),
    name: yup.string().required('Esse campo é obrigatório'),
    username: yup.string().required('Esse campo é obrigatório'),
    office: yup.string().required('Esse campo é obrigatório'),
    profile: yup.string().required('Esse campo é obrigatório'),
    newPassword: yup.string().required('Esse campo é obrigatório'),
    confirmPassword: yup.string().required('Esse campo é obrigatório')
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      job: '',
      profile: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <StyledCard>
      <CardContent>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledTextField
            id="outlined-basic"
            label="Nome completo"
            type="text"
            name="name"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <StyledTextField
            id="outlined-basic"
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <StyledTextField
            id="outlined-basic"
            label="Nome de usuário"
            type="text"
            name="username"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <StyledTextField
            id="outlined-basic"
            label="Cargo"
            type="text"
            name="job"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.job}
          />
          <FormControl fullWidth>
            <InputLabel id="profile-select-label">Perfil</InputLabel>
            <StyledSelect
              id="profile-select-label"
              label="Perfil"
              type="text"
              name="profile"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.profile}>
              <MenuItem value={1}>Padrão</MenuItem>
              <MenuItem value={2}>Admin</MenuItem>
              <MenuItem value={3}>Gerente</MenuItem>
            </StyledSelect>
          </FormControl>
          <StyledTextField
            id="outlined-basic"
            label="Nova senha"
            type="password"
            name="newPassword"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
          />
          <StyledTextField
            id="outlined-basic"
            label="Confirmar senha"
            type="password"
            name="confirmPassword"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
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

export default CreateUserScreen
