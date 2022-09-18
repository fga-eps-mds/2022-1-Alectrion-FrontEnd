import { styled as styledSystem } from '@mui/system'
import {
  TextField,
  Select,
  InputLabel,
  DialogContent,
  Dialog
} from '@mui/material'
import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1;
  width: 100%;
  padding: 2rem;
`

export const StyledInputLabel = styledSystem(InputLabel)(({ theme }) => ({
  transform: 'none',
  position: 'relative',
  marginBottom: '4px',
  border: 'none',
  color: theme.palette.background.default
}))

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '15px !important',
    height: 12
  },
  '& .MuiFormLabel-root': {
    transform: 'none',
    position: 'relative',
    marginBottom: '4px',
    border: 'none',
    color: theme.palette.background.default
  }
}))

export const StyledSelect = styledSystem(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    backgroundColor: theme.palette.background.default,
    padding: '8.5px',
    borderRadius: '15px !important',
    color: '#666666'
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  maxWidth: '416px',
  height: '40px',
  '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    marginLeft: '2px'
  }
}))

export const StyledDialogContent = styledSystem(DialogContent)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  width: '791px !important',
  height: '474px !important',
  paddingTop: '65px'
}))

export const StyledDialog = styledSystem(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    maxWidth: '791px !important',
    maxHeight: '474px !important',
    backgroundColor: '#1F3541 !important'
  }
}))

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 156px;
  padding-bottom: 53px;
`
