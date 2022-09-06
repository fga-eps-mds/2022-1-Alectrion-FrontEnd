import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'
import img from './assets/Editar_button_TeladeUsuarios.png'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    fontSize: 22
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 700
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default
  },
  '&:nth-child(even)': {
    backgroundColor: '#F5F5F5'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  },
  cursor: 'pointer'
}))

interface user {
  createdAt: string
  id: string
  updatedAt: string
  username: string
  name: string
  email: string
  role: string
  job: string
}

interface propType {
  users: user[]
  isAdmin: boolean
}

export default function UserTables({ users, isAdmin }: propType) {
  const navigate = useNavigate()

  return (
    <TableContainer
      sx={{
        margin: '0 auto',
        maxWidth: '1024px',
        textAlign: 'center'
      }}
      component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nome do usuário </StyledTableCell>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Perfil</StyledTableCell>
            <StyledTableCell align="center">Cargo</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.name}>
              <StyledTableCell align="center" component="th" scope="user">
                {user.username}
              </StyledTableCell>
              <StyledTableCell align="center">{user.name}</StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.role}</StyledTableCell>
              <StyledTableCell align="center">{user.job}</StyledTableCell>
              {isAdmin && (
                <StyledTableCell
                  align="center"
                  onClick={() =>
                    navigate('/edit-user', { state: { userId: user.id } })
                  }>
                  <img
                    style={{ maxWidth: '50px', maxHeight: '50px' }}
                    src={img}
                  />
                </StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
