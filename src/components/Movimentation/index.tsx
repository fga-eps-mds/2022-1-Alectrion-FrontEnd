import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';



import { EditButton } from '../edit-button/index'
import { StyledTableCell, StyledTableRow, ButtonDownloadEquipament, ButtonReservEquipament } from './styles'
import { Button, IconButton } from '@mui/material'
import Edit from '@mui/icons-material/Edit'

export interface moviment {
    id: string
    tipo: string
    unidade: string
    qtdequipamentos: string

}

interface propType {
  moviment: moviment[]
}
const mocktable = {
    id: '001',

    tipo: 'Empréstimo',

    unidade: '11 DP',

    qtdequipamentos: '2',

  }

export default function MovimentTables({moviment}: propType) {
  return (
    <TableContainer
      sx={{
        minWidth: '80%',
        margin: '0 auto',
        maxWidth: '1180px',
        textAlign: 'center'
      }}
      component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID </StyledTableCell>
            <StyledTableCell align="center">Tipo</StyledTableCell>
            <StyledTableCell align="center">Unidade destino</StyledTableCell>
            <StyledTableCell align="center">Quantidade</StyledTableCell>
            <StyledTableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {moviment.map((moviment, index) => {
            return (
              <StyledTableRow key={index + moviment.id}>
                <StyledTableCell align="center" component="th">
                  {mocktable.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {mocktable.tipo}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {mocktable.unidade}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {mocktable.qtdequipamentos}
                </StyledTableCell>
                <StyledTableCell align="center">
                    <IconButton aria-label="delete" size="large" disabled>
                        <PictureAsPdfIcon/>
                    </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
