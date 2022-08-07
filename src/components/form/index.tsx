// import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import BasicTextFields from '../text-field'
import { BasicButton } from '../button'
import BasicSelect from '../select'
import { FormStyled, StyledCard } from './styles'
import { CardContent } from '@mui/material'
import './styleForm.css'
// import api from '../../api/config'

const Form = () => {
  const validationSchema = yup.object({
    nome: yup.string().required('O campo é obrigatório.'),
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('O campo é obrigatório.'),
    job: yup.string().required('O campo é obrigatório.'),
    profile: yup.string(),
    username: yup.string().required('O campo é obrigatório.'),
    password: yup.string().required('O campo é obrigatório.'),
    confirmPassword: yup.string().required('O campo é obrigatório.')
  })

  // const [userData, setUserData] = useState({})

  // useEffect(() => {
  //   const getUser = async () => {
  //     const data = await api.get('/user/1')
  //     setUserData(data)
  //   };
  //   getUser();
  // }, [])

  const formik = useFormik({
    initialValues: {
      // nome: userData.name,
      // email: userData.email,
      // cargo: userData.cargo,
      // perfilUsuario: userData.perfilUsuario,
      // username: userData.username,
      // senha: userData.senha,
      // confirmarSenha: userData.senha

      nome: '',
      email: '',
      job: '',
      profile: '',
      username: '',
      password: '',
      confirmPassowrd: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }

    // onSubmit: async (values) => {
    //   try {
    //     await api.put('/user/update', {
    //       nome: values.username,
    //       email: values.email,
    //       jobFunction: values.cargo,
    //       username: values.username,
    //       password: values.senha
    //     })
    //   } catch (error) {}
    // }
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
            value={formik.values.job}
            type="cargo"
            onChange={formik.handleChange}
            color="primary"
          />

          <BasicSelect
            labelId="demo-simple-select-label"
            name="perfilUsuario"
            type="perfillUsuario"
            id="demo-simple-select"
            value={formik.values.profile}
            label="perfilUsuario"
            onChange={formik.handleChange}
          />

          <BasicTextFields
            id="senha"
            name="senha"
            label="Senha"
            variant="outlined"
            value={formik.values.password}
            type="senha"
            onChange={formik.handleChange}
            color="primary"
          />

          <BasicTextFields
            id="confirmarSenha"
            name="confirmarSenha"
            label="Confirmar Senha"
            variant="outlined"
            value={formik.values.confirmPassowrd}
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
            disabled="desabilitar"
            id="voltar"
            text="Voltar"
            variant="contained"
            color="inherit"
            classes={{ root: 'rootVoltar' }}
          />

          <BasicButton
            disabled="desabilitar"
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
