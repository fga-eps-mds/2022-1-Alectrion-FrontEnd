import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import BasicTextFields from '../text-field'
import { BasicButton } from '../button'
import BasicSelect from '../select'
import { FormStyled, StyledCard } from './styles'
import { CardContent } from '@mui/material'
import './styleForm.css'
import api from '../../api/config'
import { toast } from 'react-toastify'
import SelectJob from '../select-job'

interface UserData {
  name: string
  email: string
  jobFunction: string
  role: string
  username: string
  password:
    | 'name'
    | 'email'
    | 'job'
    | 'username'
    | 'password'
    | 'confirmPassword'
  confirmPassword:
    | 'name'
    | 'email'
    | 'job'
    | 'username'
    | 'password'
    | 'confirmPassword'
}

const Form = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('O campo é obrigatório.'),
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('O campo é obrigatório.'),
    job: yup.string().required('O campo é obrigatório.'),
    profile: yup.string().required('O campo é obrigatório.'),
    username: yup.string().required('O campo é obrigatório.'),
    password: yup.string().min(4).required('O campo é obrigatório.'),
    confirmPassword: yup.string().min(4).required('O campo é obrigatório.')
  })

  const [userData, setUserData] = useState<UserData>()

  useEffect(() => {
    const getUser = async () => {
      const data: UserData = await api.get('/user')
      setUserData(data)
    }
    getUser()
  }, [])

  const formik = useFormik({
    initialValues: {
      name: userData?.name,
      email: userData?.email,
      job: userData?.jobFunction,
      profile: userData?.role,
      username: userData?.username,
      password: userData?.password,
      confirmPassword: userData?.password
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await api.put('/user/update', {
          name: values.name,
          email: values.email,
          jobFunction: values.job,
          role: values.profile,
          username: values.username,
          password: values.password
        })
        toast.success('Usuário criado.')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
  })

  return (
    <StyledCard classes={{ root: 'rootCard' }}>
      <CardContent>
        <FormStyled onSubmit={formik.handleSubmit}>
          <BasicTextFields
            id="name"
            name="name"
            label="Nome"
            variant="outlined"
            value={formik.values.name}
            type="name"
            onChange={formik.handleChange}
            color="primary"
            helperText={formik.touched.name && formik.errors.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
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
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
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
            helperText={formik.touched.username && formik.errors.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
          />

          {/* <BasicTextFields
            id="job"
            name="job"
            label="Cargo"
            variant="outlined"
            value={formik.values.job}
            type="job"
            onChange={formik.handleChange}
            color="primary"
            helperText={formik.touched.job && formik.errors.job}
            error={formik.touched.job && Boolean(formik.errors.job)}
          /> */}

          <SelectJob
            labelId="demo-simple-select-label"
            name="profile"
            type="profile"
            id="demo-simple-select"
            value={formik.values.profile}
            label="perfilUsuario"
            onChange={formik.handleChange}
            error={formik.touched.profile && Boolean(formik.errors.profile)}
          />

          <BasicSelect
            labelId="demo-simple-select-label"
            name="profile"
            type="profile"
            id="demo-simple-select"
            value={formik.values.profile}
            label="perfilUsuario"
            onChange={formik.handleChange}
            error={formik.touched.profile && Boolean(formik.errors.profile)}
          />

          <BasicTextFields
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

          <BasicTextFields
            id="confirmPassword"
            name="confirmPassword"
            label="Confirmar Senha"
            variant="outlined"
            value={formik.values.confirmPassword}
            type="confirmPassword"
            onChange={formik.handleChange}
            color="primary"
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
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
