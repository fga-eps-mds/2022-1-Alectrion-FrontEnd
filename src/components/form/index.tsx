import { useFormik } from 'formik'
import * as yup from 'yup'
import BasicTextFields from '../text-field'
import { BasicButton } from '../button'

const Form = () => {
  const validationSchema = yup.object({
    nome: yup.string().required('O campo é obrigatório.'),
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('O campo é obrigatório.'),
    cargo: yup.string().required('O campo é obrigatório.'),
    username: yup.string().required('O campo é obrigatório.'),
    senha: yup.string().required('O campo é obrigatório.'),
    confirmarSenha: yup.string().required('O campo é obrigatório.')
  })

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      cargo: '',
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
    <form onSubmit={formik.handleSubmit}>
      <BasicTextFields
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        value={formik.values.nome}
        type="nome"
        onChange={formik.handleChange}
      />

      <BasicTextFields
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        value={formik.values.email}
        type="email"
        onChange={formik.handleChange}
      />

      <BasicTextFields
        id="username"
        name="username"
        label="Username"
        variant="outlined"
        value={formik.values.username}
        type="username"
        onChange={formik.handleChange}
      />

      <BasicTextFields
        id="cargo"
        name="cargo"
        label="Cargo"
        variant="outlined"
        value={formik.values.cargo}
        type="cargo"
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
      />

      <BasicTextFields
        id="confirmarSenha"
        name="confirmarSenha"
        label="Confirmar Senha"
        variant="outlined"
        value={formik.values.confirmarSenha}
        type="confirmarSenha"
        onChange={formik.handleChange}
      />

      <BasicButton
        id="editar"
        text="editar"
        variant="contained"
        color="inherit"
      />
    </form>
  )
}

export default Form
