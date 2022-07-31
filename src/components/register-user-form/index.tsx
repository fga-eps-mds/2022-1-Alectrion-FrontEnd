import { useFormik } from 'formik'
import CardContent from '@mui/material/CardContent'
import { StyledCard, FormStylized, TextFieldStylized } from './styles'
import * as yup from 'yup'
import { Button } from '../button'
import { MenuItem, Select } from '@mui/material'

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
    password: yup.string().required('Esse campo é obrigatório')
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      job: '',
      profile: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <StyledCard>
      <CardContent>
        <FormStylized onSubmit={formik.handleSubmit}>
          <TextFieldStylized
            id="outlined-basic"
            label="Nome completo"
            type="text"
            name="name"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <TextFieldStylized
            id="outlined-basic"
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextFieldStylized
            id="outlined-basic"
            label="Nome de usuário"
            type="text"
            name="username"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <TextFieldStylized
            id="outlined-basic"
            label="Cargo"
            type="text"
            name="job"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.job}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Perfil"
            type="text"
            name="profile"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.profile}>
            <MenuItem value={1}>Padrão</MenuItem>
            <MenuItem value={2}>Admin</MenuItem>
            <MenuItem value={3}>Gerente</MenuItem>
          </Select>
          <TextFieldStylized
            id="outlined-basic"
            label="Nova senha"
            type="password"
            name="password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <TextFieldStylized
            id="outlined-basic"
            label="Confirmar senha"
            type="password"
            name="password"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button
            text="Cadastrar"
            variant="contained"
            color="primary"
            type="submit"
          />
          <Button text="Voltar" variant="contained" />
        </FormStylized>
      </CardContent>
    </StyledCard>
  )
}

export default CreateUserScreen
