import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import { StyledSelect } from './styles'
import { ReactNode } from 'react'

interface PropTypes {
  labelId?: string
  name?: string
  type?: string
  id?: string
  value?: string
  label?: string
  onChange?: (event: SelectChangeEvent<unknown>, child: ReactNode) => void
  error?: any
  testid?: string
}

const SelectJob: React.FC<PropTypes> = ({
  labelId,
  name,
  type,
  id,
  value,
  label,
  onChange,
  error,
  testid
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
        <StyledSelect
          labelId={labelId}
          name={name}
          type={type}
          id={id}
          value={value}
          label={label}
          onChange={onChange}
          error={error}
          data-testid={testid}>
          <MenuItem value={'delegado'}>Básico</MenuItem>
          <MenuItem value={'agente_policia'}>Agente de polícia</MenuItem>
          <MenuItem value={'escrivao'}>Escrivão</MenuItem>
          <MenuItem value={'coordenador'}>Coordenador</MenuItem>
          <MenuItem value={'chefe de secao'}>Chefe de seção</MenuItem>
          <MenuItem value={'generico'}>Genérico</MenuItem>
          <MenuItem value={'comissionado'}>Comissionado</MenuItem>
          <MenuItem value={'estagiario'}>Estagiário</MenuItem>
          <MenuItem value={'superintendente'}>Superintendente</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  )
}

export default SelectJob
