import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface PropTypes {
  labelId?: string | undefined
  name: string
  type: string | undefined
  id?: string | undefined
  value: string | undefined
  label?: 'perfilUsuario'
  onChange: (event: SelectChangeEvent) => void
}

const BasicSelect: React.FC<PropTypes> = ({
  labelId,
  name,
  type,
  id,
  value,
  label,
  onChange
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Perfil do Usuário</InputLabel>
        <Select
          labelId={labelId}
          name={name}
          type={type}
          id={id}
          value={value}
          label={label}
          onChange={onChange}>
          <MenuItem value={'Administrador'}>Administrador</MenuItem>
          <MenuItem value={'Usuário Comum'}>Usuário Comum</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default BasicSelect
