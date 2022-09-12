import * as React from 'react'
import { StylesTextField } from './styles'

interface PropTypes {
  id: string
  label: String
  rows: number | string
  size: 'small' | 'medium'
  multiline: boolean
}

const DescriptionTextField: React.FC<PropTypes> = ({
  id,
  size,
  rows,
  multiline,
  label
}) => {
  return (
    <StylesTextField
      fullWidth
      id={id}
      rows={rows}
      multiline={multiline}
      size={size}
      label={label}
    />
  )
}

export default DescriptionTextField
