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

function createData(
  nameUser: string,
  name: string,
  email: string,
  perfil: string,
  cargo: string
) {
  return { nameUser, name, email, perfil, cargo }
}

const rows = [
  createData('JoãoPaulo', 'João', 'joao@joAo.com.br', 'ADMIN', 'CARGO1'),
  createData('Marialurdes', 'Maria', 'maria@maria.com.br', 'ADMIN', 'CARGO2'),
  createData(
    'RicardoPaulo',
    'Ricardo',
    'ricardo@gmail.com.br',
    'GERENTE',
    'CARGO3'
  ),
  createData('Rosedasilva', 'Rose', 'rose@hotmail.com.br', 'PADRAO', 'CARGO4'),
  createData(
    'GuilhermeOliveira',
    'Guilherme',
    'gui@gmail.com.br',
    'ADMIN',
    'CARGO5'
  )
]

export default function UserTables() {
  return (
    <TableContainer
      sx={{ margin: '0 auto', maxWidth: '1024px' }}
      component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome do usuário </StyledTableCell>
            <StyledTableCell align="right">Nome</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Perfil</StyledTableCell>
            <StyledTableCell align="right">Cargo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.nameUser}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.perfil}</StyledTableCell>
              <StyledTableCell align="right">{row.cargo}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
