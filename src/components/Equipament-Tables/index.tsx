import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material'
import {
  ButtonDownloadEquipament,
  ButtonReservEquipament,
  StyledTableCell,
  StyledTableRow
} from './style'
import { EditButton } from './../edit-button/index'

interface equipament {
  tippingNumber: string

  serialNumber: string

  type: string

  status: string

  model: string

  description?: string

  initialUseDate: Date

  screenSize?: string

  invoiceNumber: string

  power?: string

  screenType?: string

  processor?: string

  storageType?: string

  storageAmount?: string

  brandId: string

  acquisitionId: string

  unitId: string

  ram_size?: string
}

interface propType {
  equipaments: equipament[]
}

export default function EquipamentsTables({ equipaments }: propType) {
  return (
    <TableContainer
      sx={{
        minWidth: '80%',
        margin: '0 auto',
        maxWidth: '1024px',
        textAlign: 'center'
      }}
      component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">N° Tombamento </StyledTableCell>
            <StyledTableCell align="center">N° Serie</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Tipo Equipamento</StyledTableCell>
            <StyledTableCell align="center">Marca</StyledTableCell>
            <StyledTableCell align="center" />
            <StyledTableCell align="center" />
            <StyledTableCell align="center" />
            <StyledTableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {equipaments.map((equipaments) => (
            <StyledTableRow key={equipaments.acquisitionId}>
              <StyledTableCell align="center" component="th" scope="equipament">
                {equipaments.tippingNumber}
              </StyledTableCell>
              <StyledTableCell align="center">
                {equipaments.serialNumber}
              </StyledTableCell>
              <StyledTableCell align="center">
                {equipaments.status}
              </StyledTableCell>
              <StyledTableCell align="center">
                {equipaments.type}
              </StyledTableCell>
              <StyledTableCell align="center">{'LG'}</StyledTableCell>
              <StyledTableCell align="center">
                <EditButton />
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button>
                  <DeleteIcon />
                </Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                <ButtonDownloadEquipament>Baixar</ButtonDownloadEquipament>
              </StyledTableCell>
              <StyledTableCell align="center">
                <ButtonReservEquipament>Reserva</ButtonReservEquipament>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
