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
  label?: 'cargo'
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
          <MenuItem value={'DELEGADO'}>Básico</MenuItem>
          <MenuItem value={'AGENTE_POLICIA'}>Agente de polícia</MenuItem>
          <MenuItem value={'ESCRIVAO'}>Escrivão</MenuItem>
          <MenuItem value={'COORDENADOR'}>Coordenador</MenuItem>
          <MenuItem value={'CHEFE_SECAO'}>Chefe de seção</MenuItem>
          <MenuItem value={'GENERICO'}>Genérico</MenuItem>
          <MenuItem value={'COMISSIONADO'}>Comissionado</MenuItem>
          <MenuItem value={'ESTAGIARIO'}>Estagiário</MenuItem>
          <MenuItem value={'SUPERINTENDENTE'}>Superintendente</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  )
}

export default SelectJob
