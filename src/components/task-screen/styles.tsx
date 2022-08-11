import { styled as styledSystem } from '@mui/system'
// import styled from 'styled-components'
import { Card } from '@mui/material'

export const StyledEquipmentCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  maxWidth: '460px',
  maxHeight: '680px',
  borderRadius: '15px',
  backgroundColor: theme.palette.primary.main,
  width: '300px',
  height: '250px',
  left: '114px',
  top: '378px'
}))

export const StyledServiceOrderCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  maxWidth: '460px',
  maxHeight: '680px',
  borderRadius: '15px',
  backgroundColor: theme.palette.primary.main,
  width: '300px',
  height: '250px',
  left: '570px',
  top: '378px'
}))

export const StyledUserCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  maxWidth: '460px',
  maxHeight: '680px',
  borderRadius: '15px',
  backgroundColor: theme.palette.primary.main,
  width: '300px',
  height: '250px',
  left: '1031px',
  top: '384px'
}))
