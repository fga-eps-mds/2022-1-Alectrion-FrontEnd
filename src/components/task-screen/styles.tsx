import styled, { css } from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import ComputerIcon from '@mui/icons-material/Computer'
import PersonIcon from '@mui/icons-material/Person'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'

export interface Props {
  color: string
}

export const StyledShortcut = styled.div<Props>(
  ({ theme, color }) => css`
    align-self: center;
    box-shadow: '0 8px 10px rgba(0,0,0,0.45)';
    width: 300px;
    height: 250px;
    border-radius: 15px;
    background-color: ${color};
    justify-content: center;
    display: flex;
    align-items: center;
  `
)
export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 22px;
`

export const Container = styled.div`
  display: flex;
  gap: 156px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const StyledComputerIcon = styledSystem(ComputerIcon)(({ theme }) => ({
  '& .MuiIcon-fontSizeLarge': {
    width: '100px',
    heigth: '100px'
  }
}))

export const StyledPersonIcon = styledSystem(PersonIcon)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    width: '100px',
    heigth: '100px'
  }
}))

export const StyledBuildIcon = styledSystem(BuildOutlinedIcon)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    width: '100px',
    heigth: '100px'
  }
}))
