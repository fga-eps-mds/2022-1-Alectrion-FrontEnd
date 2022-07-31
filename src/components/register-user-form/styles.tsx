import { styled as styledSystem } from '@mui/system'
import styled from 'styled-components'
import { TextField } from '@mui/material'

export const FormStylized = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 151px;
  margin-top: 64px;
  margin-left: 480px;
  margin-right: 480px;
  height: 616px;
  justify-content: space-evenly;
`
export const TitleStylized = styled.text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-left: 45%;
`

export const TextFieldStylized = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px',
    borderColor: theme.palette.primary.main
  }
}))
