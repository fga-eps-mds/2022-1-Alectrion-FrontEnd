import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'

import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { StyledTableCell, StyledTableRow } from './styles'

export default function OderServiceTable() {
  return (
    <TableContainer
      sx={{
        margin: '0 auto',
        maxWidth: '1286px',
        textAlign: 'center'
      }}
      component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Data Entreada</StyledTableCell>
            <StyledTableCell align="center">Tipo Equipamento</StyledTableCell>
            <StyledTableCell align="center">N° tombamento</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Recebedor</StyledTableCell>
            <StyledTableCell align="center">Entregador</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center">03/09/2022</StyledTableCell>
            <StyledTableCell align="center">CPU</StyledTableCell>
            <StyledTableCell align="center">28NAU23JA</StyledTableCell>
            <StyledTableCell align="center">Reserva tecnica</StyledTableCell>
            <StyledTableCell align="center">Maria</StyledTableCell>
            <StyledTableCell align="center">Joao - 19230192</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
