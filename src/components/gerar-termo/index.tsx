import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import EquipamentsTables from '../../components/Equipament-Tables'
import Paper from '@mui/material/Paper'

import { toast } from 'react-toastify'
import api from '../../api/config'
import { AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { Container, Typography, Input, Box, FormControl, MenuItem, Button } from '@mui/material'
import React from 'react'
import { CSVLink } from 'react-csv'
import { BoxInput, ButtonClearFilters, ButtonFilters, ButtonCad, FilterScrenn, FilterScrennContent, StyledGenerateButton } from '../../pages/ScreenEquipaments/style'
import { FindContainer } from '../../pages/user-screen/styles'
import { dateFormat } from '../../utils/dateFormat'
import { StyledSelect } from '../register-user-form/styles'
import { StyledTextField } from '../text-field/styles'
import MovimentTables from '../Movimentation'

export interface SearchParams {
  id?: string
  userid?: string
  equipmentid?: string
  type?: Number
  lowerdate?: Date
  higherdate?: Date
  page?: Number
  resultquantity?: Number
}

interface movement {
  id: string
  tipo: string
  unidade: string
  qtdequipamentos: string
}

export default function ScreenMoviments() {
  const [movements, setMovements] = useState<movement[]>([])
  const [basicSearch, setbasicSearch] = useState<string>('')

  const initialValues = {
    id: '',

    tipo: '',

    unidade: '',

    qtdequipamentos: '',

  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values: any) => {
      Object.keys(values).forEach((param) => {
        if (values[param] === '') {
          delete values[param]
        }
      })
      getMovements(values)
    }
  })

  const getMovements = async (query?: SearchParams) => {
    try {
      const queryParams = new URLSearchParams('')
      if (query) {
        Object.entries(query).forEach((value) =>
          queryParams.append(value[0], value[1])
        )
      }

      const { data }: AxiosResponse<movement[]> = await api.get(
        'equipment/findMovements',
        {
          params: queryParams
        }
      )
      setMovements(data)
    } catch (error) {
      setMovements([])
      toast.error('Nenhuma movimentação encontrada')
    }
  }
  const renderEquipmentTable = React.useCallback(() => {
    return <MovimentTables movements={movements} />
  }, [movements])

  React.useEffect(() => {
    getMovements()
  }, [])

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbasicSearch(event.target.value)
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>
        Consultar Movimentações
      </Typography>

      <FindContainer>
        <BoxInput>
          <SearchIcon sx={{ marginBottom: '3px' }} />
          <Input
            id="identificador"
            name="identificador"
            sx={{ flex: 0.9 }}
            placeholder="Identificador"
            value={basicSearch}
            onChange={handleChange}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                // Do code here
                if (basicSearch === '') {
                  getMovements()
                } else {
                  const query = {
                    serialNumber: basicSearch.toString()
                  } as unknown as SearchParams
                  getMovements(query)
                }
              }
            }}
          />
        </BoxInput>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ButtonFilters onClick={handleClickOpen} variant="contained">
            Filtros
            <FilterListOutlinedIcon sx={{ ml: '70px', color: '#A1A5BC' }} />
          </ButtonFilters>
        </Box>
      </FindContainer>

      {renderEquipmentTable()}

      <FilterScrenn open={open}>
        <FilterScrennContent>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  mt: '25px'
                }}>
                <StyledTextField
                  fullWidth
                  id="id"
                  name="id"
                  label="Id"

                  onChange={formik.handleChange}
                  sx={{ ml: '30px' }}
                />
                <StyledTextField
                  fullWidth
                  id="tipo"
                  name="tipo"
                  label="Tipo"

                  onChange={formik.handleChange}
                  sx={{ ml: '90px' }}
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  mt: '50px'
                }}>
                <StyledTextField
                  fullWidth
                  id="unidade"
                  name="unidade"
                  label="Unidade"

                  onChange={formik.handleChange}
                  sx={{ ml: '30px' }}
                />
                <StyledTextField
                  fullWidth
                  id="qtd"
                  name="qtd"
                  label="Quantidade"

                  onChange={formik.handleChange}
                  sx={{ ml: '90px' }}
                />
              </Box>
            </FormControl>
            <Box
              sx={{
                marginTop: '50px',
                display: 'flex',
                justifyContent: 'center'
              }}>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{
                  backgroundColor: 'white',
                  color: '#666666',
                  width: '224px',
                  fontWeight: 'bold',
                  borderRadius: '10px'
                }}>
                Voltar
              </Button>
              <Button
                variant="contained"
                type="submit"
                onClick={handleClose}
                sx={{
                  marginLeft: '150px',
                  width: '224px',
                  fontWeight: 'bold',
                  borderRadius: '10px'
                }}>
                Buscar
              </Button>
            </Box>
          </form>
        </FilterScrennContent>
      </FilterScrenn>
    </Container>
  )
}
