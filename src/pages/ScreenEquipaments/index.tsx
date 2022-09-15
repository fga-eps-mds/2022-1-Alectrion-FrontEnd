import {
  Container,
  FindContainer,
  BoxInput,
  ButtonFilters,
  ButtonCad,
  FilterScrenn,
  FilterScrennContent,
  StyledSelect,
  StyledTextField
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
import { AxiosResponse } from 'axios'
import api from '../../api/config'
import { toast } from 'react-toastify'

interface equipament {
  id: string

  tippingNumber: string

  serialNumber: string

  acquision: string

  type: string

  status: string

  model: string

  description: string

  initialUseDate: Date

  screenSize?: string

  invoiceNumber: string

  power?: string

  screenType?: string

  processor?: string

  storageType?: string

  storageAmount?: string

  createdAt: Date

  updatedAt: Date

  orderServices: OrderService[]

  dismisseds: Dismissed[]

  brand: string

  acquisition: string

  history?: History

  unit: string
}

export default function ScreenEquipaments() {
  const [equipaments, setEquipaments] = React.useState<equipament[]>([])
  React.useEffect(() => {
    const getEquipaments = async () => {
      try {
        const { data }: AxiosResponse<equipament[]> = await api.get(
          '/equipments/find'
        )
        setEquipaments(data)
        console.log(data)
      } catch (error) {
        toast.error('Aconteceu algum erro.')
      }
    }
    getEquipaments()
  }, [])

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
      type: '',
      status: '',
      screenType: '',
      storageType: '',
      screenSize: '',
      model: '',
      brand: '',
      processor: '',
      acquision: '',
      ram: '',
      power: '',
      createdAt: ''
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
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  displayEmpty
                  sx={{
                    marginLeft: '30px',
                    textAlign: 'center'
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value="" sx={{ justifyContent: 'center' }}>
                    <em>Tipo de Equipamento</em>
                  </MenuItem>
                  <MenuItem value="CPU" sx={{ justifyContent: 'center' }}>
                    CPU
                  </MenuItem>
                  <MenuItem value="WEBCAM" sx={{ justifyContent: 'center' }}>
                    WebCam
                  </MenuItem>
                  <MenuItem value="MONITOR" sx={{ justifyContent: 'center' }}>
                    Monitor
                  </MenuItem>
                  <MenuItem value="NOBREAK" sx={{ justifyContent: 'center' }}>
                    Nobreak
                  </MenuItem>
                  <MenuItem value="SCANNER" sx={{ justifyContent: 'center' }}>
                    Scanner
                  </MenuItem>
                  <MenuItem
                    value="STABILIZER"
                    sx={{ justifyContent: 'center' }}>
                    Estabilizador
                  </MenuItem>
                </StyledSelect>
                <StyledSelect
                  id="status"
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  displayEmpty
                  sx={{
                    marginLeft: '100px',
                    textAlign: 'center'
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value="" sx={{ justifyContent: 'center' }}>
                    <em>Status</em>
                  </MenuItem>
                  <MenuItem value="ACTIVE" sx={{ justifyContent: 'center' }}>
                    Ativo
                  </MenuItem>
                  <MenuItem
                    value="ACTIVE_BY_DEMISE"
                    sx={{ justifyContent: 'center' }}>
                    Ativo mas quebrado
                  </MenuItem>
                  <MenuItem value="INACTIVE" sx={{ justifyContent: 'center' }}>
                    Inativo
                  </MenuItem>
                  <MenuItem
                    value="MAINTENANCE"
                    sx={{ justifyContent: 'center' }}>
                    Manutenção
                  </MenuItem>
                  <MenuItem
                    value="TECHNICAL_RESERVE"
                    sx={{ justifyContent: 'center' }}>
                    Reserva Técnica
                  </MenuItem>
                  <MenuItem
                    value="DOWNGRADED"
                    sx={{ justifyContent: 'center' }}>
                    Baixado
                  </MenuItem>
                </StyledSelect>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  mt: '25px'
                }}>
                <StyledSelect
                  id="storageType"
                  name="storageType"
                  value={formik.values.storageType}
                  onChange={formik.handleChange}
                  displayEmpty
                  sx={{
                    marginLeft: '30px',
                    textAlign: 'center'
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value="" sx={{ justifyContent: 'center' }}>
                    <em>Tipo de Armazenamento</em>
                  </MenuItem>
                  <MenuItem value="HD" sx={{ justifyContent: 'center' }}>
                    HD
                  </MenuItem>
                  <MenuItem value="SSD" sx={{ justifyContent: 'center' }}>
                    SSD
                  </MenuItem>
                </StyledSelect>
                <StyledSelect
                  id="screenType"
                  name="screenType"
                  value={formik.values.screenType}
                  onChange={formik.handleChange}
                  displayEmpty
                  sx={{
                    marginLeft: '100px',
                    textAlign: 'center'
                  }}
                  inputProps={{ 'aria-label': 'Without label' }}>
                  <MenuItem value="" sx={{ justifyContent: 'center' }}>
                    <em>Tipo de Tela</em>
                  </MenuItem>
                  <MenuItem value="LCD" sx={{ justifyContent: 'center' }}>
                    LCD
                  </MenuItem>
                  <MenuItem value="OLED" sx={{ justifyContent: 'center' }}>
                    OLED
                  </MenuItem>
                  <MenuItem value="LED" sx={{ justifyContent: 'center' }}>
                    LED
                  </MenuItem>
                  <MenuItem value="TN" sx={{ justifyContent: 'center' }}>
                    TN
                  </MenuItem>
                  <MenuItem value="VA" sx={{ justifyContent: 'center' }}>
                    VA
                  </MenuItem>
                  <MenuItem value="IPS" sx={{ justifyContent: 'center' }}>
                    IPS
                  </MenuItem>
                </StyledSelect>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  mt: '25px'
                }}>
                <StyledTextField
                  fullWidth
                  id="model"
                  name="model"
                  label="Modelo"
                  value={formik.values.model}
                  onChange={formik.handleChange}
                  sx={{ ml: '30px' }}
                />
                <StyledTextField
                  fullWidth
                  id="screenSize"
                  name="screenSize"
                  label="Tamanho da Tela"
                  value={formik.values.screenSize}
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
                  id="brand"
                  name="brand"
                  label="Marca"
                  value={formik.values.brand}
                  onChange={formik.handleChange}
                  sx={{ ml: '30px' }}
                />
                <StyledTextField
                  fullWidth
                  id="processor"
                  name="processor"
                  label="Processador"
                  value={formik.values.processor}
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
                  id="acquision"
                  name="acquision"
                  label="Tipo aquisição"
                  value={formik.values.acquision}
                  onChange={formik.handleChange}
                  sx={{ ml: '30px' }}
                />
                <StyledTextField
                  fullWidth
                  id="power"
                  name="power"
                  label="Potência"
                  value={formik.values.power}
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
                  id="ram"
                  name="ram"
                  label="Memória RAM"
                  value={formik.values.ram}
                  onChange={formik.handleChange}
                  sx={{ ml: '30px' }}
                />
                <StyledTextField
                  type="date"
                  id="createdAt"
                  name="createdAt"
                  value={formik.values.createdAt}
                  onChange={formik.handleChange}
                  sx={{ ml: '90px' }}
                />
              </Box>
            </FormControl>
            <Box
              sx={{
                marginTop: '200px',
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
