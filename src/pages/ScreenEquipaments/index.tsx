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
import { Typography, Input, Box, FormControl, MenuItem } from '@mui/material'
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

  // const handleClose = () => {
  // setOpen(false)
  // }

  const [busca, setBusca] = React.useState('')

  const filterEquipaments = React.useMemo(() => {
    const lowerBusca = busca.toLowerCase()
    return equipaments.filter((equip) =>
      equip.tippingNumber.toLowerCase().includes(lowerBusca)
    )
  }, [busca])

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
          <FormControl variant="filled">
            <StyledSelect></StyledSelect>
          </FormControl>
        </FilterScrennContent>
      </FilterScrenn>
    </Container>
  )
}
