import {
  Container,
  FindContainer,
  BoxInput,
  ButtonFilters,
  ButtonCad,
  FilterScrenn,
  FilterScrennContent,
  StyledSelect
} from './style'
import * as React from 'react'
import { useFormik } from 'formik'
import {
  Typography,
  Input,
  Box,
  FormControl,
  MenuItem,
  Button
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import EquipamentsTables from '../../components/Equipament-Tables'

interface equipament {
  id: string
  tippingNumber: string
  serialNumber: string
  acquision: string
  type: string
  status: string
  model: string
  unit?: string
  description?: string
  brand?: string
  initialUseDate: string
  screenSize?: string
  invoiceNumber?: string
  power?: string
  screenType?: string
  processador?: string
  storageType?: string
  storageAmount?: string
  createdAt: Date
  updatedAt: Date
}

export default function ScreenEquipaments() {
  const [equipaments] = React.useState<equipament[]>([])

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [busca, setBusca] = React.useState('')

  const filterEquipaments = React.useMemo(() => {
    const lowerBusca = busca.toLowerCase()
    return equipaments.filter((equip) =>
      equip.tippingNumber.toLowerCase().includes(lowerBusca)
    )
  }, [busca])

  const formik = useFormik({
    initialValues: {
      typeEquipament: '',
      status: '',
      marca: '',
      modelo: '',
      tipoAquisicao: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>
        Consultar Equipamentos
      </Typography>

      <FindContainer>
        <BoxInput>
          <SearchIcon sx={{ marginBottom: '3px' }} />
          <Input
            sx={{ flex: 0.9 }}
            placeholder="N° Tombamento ou N° serie"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />
        </BoxInput>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ButtonFilters onClick={handleClickOpen} variant="contained">
            Filtros
            <FilterListOutlinedIcon sx={{ ml: '70px', color: '#A1A5BC' }} />
          </ButtonFilters>
          <ButtonCad>Cadastrar Equipamento</ButtonCad>
        </Box>
      </FindContainer>

      <EquipamentsTables equipaments={filterEquipaments} />

      <FilterScrenn open={open}>
        <FilterScrennContent>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <StyledSelect
                  id="typeEquipament"
                  name="typeEquipament"
                  value={formik.values.typeEquipament}
                  onChange={formik.handleChange}
                  displayEmpty
                  sx={{
                    marginLeft: '20px'
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value="">
                    <em>Tipo de Equipamento</em>
                  </MenuItem>
                  <MenuItem value="CPU">CPU</MenuItem>
                  <MenuItem value="WEBCAM">WebCam</MenuItem>
                  <MenuItem value="MONITOR">Monitor</MenuItem>
                  <MenuItem value="NOBREAK">Nobreak</MenuItem>
                  <MenuItem value="SCANNER">Scanner</MenuItem>
                  <MenuItem value="ESTABILIZADOR">Estabilizador</MenuItem>
                </StyledSelect>
                <StyledSelect
                  id="status"
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  displayEmpty
                  sx={{
                    marginLeft: '100px'
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value="">
                    <em>Status</em>
                  </MenuItem>
                  <MenuItem value="ATIVO">Ativo</MenuItem>
                  <MenuItem value="BAIXADO">Baixado</MenuItem>
                </StyledSelect>
              </Box>
            </FormControl>
            <Box
              sx={{
                marginTop: '100px',
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
                sx={{
                  marginLeft: '100px',
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
