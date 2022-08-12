import { CardContent } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { StyledShortcut } from './styles'

const navigate = useNavigate()
export const TaskCards = () => {
  return (
    <>
      <StyledShortcut onClick={() => navigate('/users')}>
        <CardContent></CardContent>
      </StyledShortcut>
      <StyledShortcut onClick={() => navigate('/users')}>
        <CardContent></CardContent>
      </StyledShortcut>
      <StyledShortcut onClick={() => navigate('/users')}>
        <CardContent></CardContent>
      </StyledShortcut>
    </>
  )
}
