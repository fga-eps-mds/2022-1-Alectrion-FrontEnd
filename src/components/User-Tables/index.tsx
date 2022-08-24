import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default
  },
  '&:nth-child(even)': {
    backgroundColor: '#D9D9D9'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

interface user {
  createdAt: string
  updatedAt: string
  username: string
  name: string
  email: string
  role: string
  job: string
}

interface propType {
  users: user[]
}

// function createData(
//   nameUser: string,
//   name: string,
//   email: string,
//   perfil: string,
//   cargo: string
// ) {
//   return { nameUser, name, email, perfil, cargo }
// }

// const rows = [
//   createData('JoãoPaulo', 'João', 'joao@joAo.com.br', 'ADMIN', 'CARGO1'),
//   createData('Marialurdes', 'Maria', 'maria@maria.com.br', 'ADMIN', 'CARGO2'),
//   createData(
//     'RicardoPaulo',
//     'Ricardo',
//     'ricardo@gmail.com.br',
//     'GERENTE',
//     'CARGO3'
//   ),
//   createData('Rosedasilva', 'Rose', 'rose@hotmail.com.br', 'PADRAO', 'CARGO4'),
//   createData(
//     'GuilhermeOliveira',
//     'Guilherme',
//     'gui@gmail.com.br',
//     'ADMIN',
//     'CARGO5'
//   )
// ]

export default function UserTables({ users }: propType) {
  console.log({ users })
  return (
    <TableContainer
      sx={{ margin: '0 auto', maxWidth: '1024px', textAlign: 'center' }}
      component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nome do usuário </StyledTableCell>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Perfil</StyledTableCell>
            <StyledTableCell align="center">Cargo</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
