import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import { Button, TextField } from '@mui/material'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-top: 32px;
  margin: 40px auto;
  max-width: 1024px;
`

export const FindContainer = styled.div`
  display: flex;
  max-height: 97px;
  align-items: center;
  justify-content: space-between;
  padding: 18px 32px 18px 32px;
  background-color: #1f3541;
  border-radius: 20px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
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

export const StyledButton = styledSystem(Button)(({ theme }) => ({
  maxWidth: '261px',
  height: '62px',
  textColor: 'white',
  '& .MuiButtonBase-root': {
    backgroundColor: 'black'
  },
  '& .MuiButton-text': {
    color: theme.palette.background.default
  }
}))
