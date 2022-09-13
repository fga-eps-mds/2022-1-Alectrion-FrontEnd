import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import { Card } from '@mui/material'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`
export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  maxWidth: '1200px',
  margin: 'auto',
  height: 'max-content'
}))

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1;
  width: 100%;
  padding: 2rem;
`
export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: max-content;
  gap: 3rem;
`
