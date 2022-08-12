import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import { TextField } from '@mui/material'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-top: 32px;
  margin: 10px 90px 20px;
`

export const FindContainer = styled.div`
  display: flex;
  max-width: 1180px;
  max-height: 97px;
  align-items: center;
  justify-content: space-between;
  padding: 18px 32px 18px 32px;
  background-color: #1f3541;
  margin-bottom: 40px;
  margin-top: 45px;
  border-radius: 20px;
`

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '15px !important'
  },
  maxWidth: '416px',
  height: '40px',
  '& .MuiInputLabel-shrink': {
    marginTop: '-7px',
    color: theme.palette.background.default,
    textShadow: '0 0px 1px rgba(0,0,0,1), 0 0px 1px rgba(0,0,0,1)'
  }
}))
