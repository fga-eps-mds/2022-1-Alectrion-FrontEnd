import { useFormik } from 'formik'
import * as yup from 'yup'
import BasicTextFields from '../text-field'
import { BasicButton } from '../button'
import BasicSelect from '../select'
import { FormStyled, StyledCard } from './styles'
import { CardContent } from '@mui/material'
import './styleForm.css'

const Form = () => {
  const validationSchema = yup.object({
    nome: yup.string().required('O campo é obrigatório.'),
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('O campo é obrigatório.'),
    cargo: yup.string().required('O campo é obrigatório.'),
    perfilUsuario: yup.string(),
    username: yup.string().required('O campo é obrigatório.'),
    senha: yup.string().required('O campo é obrigatório.'),
    confirmarSenha: yup.string().required('O campo é obrigatório.')
  })

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      cargo: '',
      perfilUsuario: '',
      username: '',
      senha: '',
      confirmarSenha: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <StyledCard classes={{ root: 'rootCard' }}>
      <CardContent>
        <FormStyled onSubmit={formik.handleSubmit}>
          <BasicTextFields
            id="nome"
            name="nome"
            label="Nome"
            variant="outlined"
            value={formik.values.nome}
            type="nome"
            onChange={formik.handleChange}
            color="primary"
          />

          <BasicTextFields
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            type="email"
            onChange={formik.handleChange}
            color="primary"
          />

          <BasicTextFields
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            value={formik.values.username}
            type="username"
            onChange={formik.handleChange}
            color="primary"
          />

          <BasicTextFields
            id="cargo"
            name="cargo"
            label="Cargo"
            variant="outlined"
            value={formik.values.cargo}
            type="cargo"
            onChange={formik.handleChange}
            color="primary"
          />

          <BasicSelect
            labelId="demo-simple-select-label"
            name="perfilUsuario"
            type="perfillUsuario"
            id="demo-simple-select"
            value={formik.values.perfilUsuario}
            label="perfilUsuario"
            onChange={formik.handleChange}
          />

          <BasicTextFields
            id="senha"
            name="senha"
            label="Senha"
            variant="outlined"
            value={formik.values.senha}
            type="senha"
            onChange={formik.handleChange}
            color="primary"
          />

          <BasicTextFields
            id="confirmarSenha"
            name="confirmarSenha"
            label="Confirmar Senha"
            variant="outlined"
            value={formik.values.confirmarSenha}
            type="confirmarSenha"
            onChange={formik.handleChange}
            color="primary"
          />

          <BasicButton
            id="editar"
            text="editar"
            variant="contained"
            color="inherit"
            classes={{ root: 'rootEditar' }}
          />

          <BasicButton
            id="voltar"
            text="Voltar"
            variant="contained"
            color="inherit"
            classes={{ root: 'rootVoltar' }}
          />

          <BasicButton
            id="remover"
            text="Remover"
            variant="contained"
            color="inherit"
            classes={{ root: 'rootRemover' }}
          />
        </FormStyled>
      </CardContent>
    </StyledCard>
  )
}

export default Form
