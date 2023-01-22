import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../api/config'
import { useFormik } from 'formik'
import { Button } from '../button'
import { theme } from '../../styles/theme'
import Autocomplete from '@mui/material/Autocomplete'
import { AxiosResponse } from 'axios'
import { Container } from '@mui/material'
import { StyledCard } from '../gerar-termo/styles'
import { StyledDescTextField } from '../gerar-termo/styles'
import { FormContainer, ButtonContainer } from '../gerar-termo/styles'
import { StyledForm } from '../gerar-termo/styles'
import { StyledTextField } from '../gerar-termo/styles'

interface unit {
  name: string
  id: string
  localization: string
}

const GeraTermo = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      typeofterms: '',
      destiny: '',
      responsiblename: '',
      responsibleposition: '',
      bossname: '',
      bossposition: '',
 
    },
    onSubmit: async (values) => {
      const body = {
        typeofterms: values.typeofterms,
        destiny: values.destiny,
        responsiblename: values.responsiblename,
        responsibleposition: values.responsibleposition,
        bossname: values.bossname,
        bossposition: values.bossposition,
      }
      const formattedBody = Object.entries(body)
        .filter((object) => object[1] !== null)
        .reduce((newObj, [key, val]) => {
          return { ...newObj, [key]: val }
        }, {})
      try {
        await api.post('equipment/createEquipment', formattedBody)
        toast.success('Termo Gerado')
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
      formik.resetForm()
    }
  })

  const [units, setUnits] = useState<unit[]>([])
  useEffect(() => {
    const getUnits = async () => {
      try {
        const { data }: AxiosResponse<unit[]> = await api.get(
          '/equipment/getAllUnits'
        )
        setUnits(data)
      } catch (error) {}
    }
    getUnits()
  }, [])

  return (
    <Container>
      <StyledCard>
        <StyledForm onSubmit={formik.handleSubmit}>
          <FormContainer>
            <Autocomplete
              disablePortal
              id="unitId-input"
              options={[
                { value: 'Termo de Responsabilidade', label: 'RESPONSABILIDADE' },
                { label: 'Termo de Empréstimo', value: 'EMPRESTIMO' },
                { label: 'Termo de Baixa - BAIXADO', value: 'BAIXADO' },
                { label: 'Termo de Baixa - RESERVA TÉCNICA', value: 'RESERVA_TECNICA' },
              ]}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <StyledTextField
                  {...params}
                  label="Tipo de termo"
                  id="typeofterms-select-label"
                  data-testid="typeofterms-select"
                  helperText={
                    formik.touched.typeofterms && formik.errors.typeofterms
                  }
                  error={
                    formik.touched.typeofterms &&
                    Boolean(formik.errors.typeofterms)
                  }
                />
              )}
              onChange={(_, value) =>
                formik.setFieldValue('typeofterms', value?.value)
              }
              fullWidth
              className="autocomplete"
              sx={{
                padding: 0,
                '& .MuiOutlinedInput-root': {
                  padding: '0 !important'
                },
                '& .MuiAutocomplete-input': {
                  padding: '16.5px !important'
                }
              }}
            />

            <StyledTextField
              id="destiny-input"
              label="Unidade de destino"
              type="text"
              name="destiny"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.destiny}
            />
            <StyledTextField
              id="responsiblename-input"
              label="Nome do Responsavel"
              type="text"
              name="responsiblename"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.responsiblename}
              helperText={formik.touched.responsiblename && formik.errors.responsiblename}
              error={formik.touched.responsiblename && Boolean(formik.errors.responsiblename)}
            />
            <StyledTextField
              id="responsibleposition-input"
              label="Cargo do responsavel"
              type="text"
              name="responsibleposition"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.responsibleposition}
              helperText={
                formik.touched.responsibleposition && formik.errors.responsibleposition
              }
              error={
                formik.touched.responsibleposition &&
                Boolean(formik.errors.responsibleposition)
              }
            />
            <StyledTextField
              id="bossname-input"
              label="Nome do Chefe da DSTI"
              type="text"
              name="bossname"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.bossname}
              helperText={formik.touched.bossname && formik.errors.bossname}
              error={formik.touched.bossname && Boolean(formik.errors.bossname)}
            />
            <StyledTextField
              id="bossposition"
              label="Cargo do chefe da DSTI"
              type="text"
              name="bossposition"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.bossposition}
              helperText={
                formik.touched.bossposition && formik.errors.bossposition
              }
              error={
                formik.touched.bossposition &&
                Boolean(formik.errors.bossposition)
              }
            />
          </FormContainer>
          <ButtonContainer>
            <Button
              variant="contained"
              styledColor={theme.palette.grey[100]}
              textColor={theme.palette.grey[900]}
              onClick={() => navigate('/equipaments')}>
              Voltar
            </Button>{' '}
            <Button
              variant="contained"
              type="submit"
              styledColor={theme.palette.primary.main}>
              Gerar Termo
            </Button>
          </ButtonContainer>
        </StyledForm>
      </StyledCard>
    </Container>
  )
}
export default GeraTermo