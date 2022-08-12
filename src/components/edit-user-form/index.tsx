import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import BasicTextFields from '../text-field'
import { Button } from '../button'
import SelectProfile from '../select-profile'
import { FormStyled, StyledCard } from './styles'
import { CardContent } from '@mui/material'
import './styleForm.css'
import api from '../../api/config'
import { toast } from 'react-toastify'
import SelectJob from '../select-job'
import { theme } from '../../styles/theme'

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
      // console.log('teste')
      try {
        await api.put('/user/update', {
          name: values.name,
          email: values.email,
          jobFunction: values.job,
          role: values.profile,
          username: values.username,
          password: values.password
        })
        toast.success('Usuário editado com sucesso.')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
  })
  // console.log(formik.values)
  return (
    <StyledCard classes={{ root: 'rootCard' }}>
      <CardContent>
        <FormStyled onSubmit={formik.handleSubmit}>
          <BasicTextFields
            size="small"
            id="name"
            name="name"
            label="Nome completo"
            variant="outlined"
            value={formik.values.name}
            type="name"
            onChange={formik.handleChange}
            color="primary"
            helperText={formik.touched.name && formik.errors.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />

          <BasicTextFields
            size="small"
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
            size="small"
            id="username"
            name="username"
            label="Nome de usuário"
            variant="outlined"
            value={formik.values.username}
            type="username"
            onChange={formik.handleChange}
            color="primary"
            helperText={formik.touched.username && formik.errors.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
          />

          <SelectJob
            labelId="demo-simple-select-job-label"
            name="job"
            type="text"
            id="demo-simple-select-job"
            value={formik.values.job}
            label="cargo"
            onChange={formik.handleChange}
            error={formik.touched.job && Boolean(formik.errors.job)}
            testid="jobSelect"
          />

          <SelectProfile
            labelId="demo-simple-select-profile-label"
            name="profile"
            type="profile"
            id="demo-simple-select-profile"
            value={formik.values.profile}
            label="perfilUsuario"
            onChange={formik.handleChange}
            error={formik.touched.profile && Boolean(formik.errors.profile)}
            testid="profileSelect"
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

          <BasicTextFields
            size="small"
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

          <Button
            id="editar"
            name="editButton"
            variant="contained"
            type="submit"
            styledColor={theme.palette.primary.main}
            classes={{ root: 'rootEdit' }}>
            Editar
          </Button>
          <Button
            disabled={true}
            name="backButton"
            id="voltar"
            variant="contained"
            styledColor={theme.palette.grey[300]}
            textColor="black"
            classes={{ root: 'rootBack' }}>
            Voltar
          </Button>
          <Button
            disabled={true}
            name="removeButton"
            id="remover"
            variant="contained"
            styledColor={theme.palette.error.main}
            textColor="white"
            classes={{ root: 'rootRemove' }}>
            Remover
          </Button>
        </FormStyled>
      </CardContent>
    </StyledCard>
  )
}

export default Form
