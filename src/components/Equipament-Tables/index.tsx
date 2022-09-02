import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { StyledTableCell, StyledTableRow } from './style'

interface equipament {
  id: string
  tippingNumber: string
  acquision: string
  type: string
  status: string
  model: string
  unitId: string
  description?: string
  brand: string
  initialUseDate: string
  screenSize?: string
  invoiceNumber?: string
  power?: string
  screenType?: string
  processador?: string
  storageType?: string
  storageAmount?: string
  createdAt: Date
  updatedAt: Date
}

interface propType {
  equipaments: equipament[]
}

export default function EquipamentsTables({ equipaments }: propType) {
  console.log({ equipaments })
  return (
    <TableContainer
      sx={{ margin: '0 auto', maxWidth: '1024px', textAlign: 'center' }}
      component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">N° Tombamento </StyledTableCell>
            <StyledTableCell align="center">N° Serie</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Tipo Equipamento</StyledTableCell>
            <StyledTableCell align="center">Marca</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equipaments.map((equipaments) => (
            <StyledTableRow key={equipaments.acquision}>
              <StyledTableCell align="center" component="th" scope="user">
                {equipaments.tippingNumber}
              </StyledTableCell>
              <StyledTableCell align="center">
                {equipaments.invoiceNumber}
              </StyledTableCell>
              <StyledTableCell align="center">
                {equipaments.status}
              </StyledTableCell>
              <StyledTableCell align="center">
                {equipaments.type}
              </StyledTableCell>
              <StyledTableCell align="center">
                {equipaments.brand}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
