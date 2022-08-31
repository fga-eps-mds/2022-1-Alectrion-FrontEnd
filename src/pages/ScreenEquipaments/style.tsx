import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import { Box, Button } from '@mui/material'

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
  max-height: 120px;
  align-items: center;
  justify-content: space-between;
  padding: 18px 32px;
  background-color: #1f3541;
  border-radius: 20px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`
export const BoxInput = styledSystem(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  backgroundColor: '#fff',
  height: '45px',
  width: '286px',
  borderRadius: '10px',
  textAlign: 'center',
  padding: '5px 0px'
}))

export const ButtonFilters = styledSystem(Button)(({ theme }) => ({
  backgroundColor: '#D9D9D9',
  width: '183px',
  heigth: '45px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'left',
  color: '#575757',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#ffff'
  }
}))

export const ButtonCad = styledSystem(Button)(({ theme }) => ({
  backgroundColor: '#16878C',
  heigth: '62px',
  width: '261px',
  fontWeight: 'bold',
  alignItems: 'center',
  color: 'white',
  margin: '10px 0',
  marginLeft: '15px',
  '&:hover': {
    backgroundColor: '#16878C'
  }
}))
