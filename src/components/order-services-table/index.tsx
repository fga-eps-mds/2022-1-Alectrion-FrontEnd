import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'

import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { StyledTableCell, StyledTableRow } from './styles'
import { dateFormat } from '../../utils/dateFormat'
import { useNavigate } from 'react-router-dom'
import { EditOSButton } from '../edit-os-button'
import OrderServiceUpdateForm  from '../order-service-update-form'

interface OrderService {
  id: string
  date: string
  description: string
  authorId: string
  sender: string
  senderFunctionalNumber: string
  receiverName: string
  equipment: {
    type: string
    tippingNumber: string
    status: string
  }
}
interface OrderServicesProps {
  orderServices: OrderService[]
  isConsulta: boolean
}
export default function OderServiceTable({
  orderServices,
  isConsulta
}: OrderServicesProps) {
  const navigate = useNavigate()
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
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Data Entrada</StyledTableCell>
            <StyledTableCell align="center">Tipo Equipamento</StyledTableCell>
            <StyledTableCell align="center">N° tombamento</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Recebedor</StyledTableCell>
            <StyledTableCell align="center">Entregador</StyledTableCell>
            <StyledTableCell align="center">Editar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderServices?.map((orderSerivce) => (
            <StyledTableRow key={orderSerivce.id}>
              <StyledTableCell align="center">
                {orderSerivce.id}
              </StyledTableCell>
              <StyledTableCell align="center">
                {dateFormat(orderSerivce.date)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {orderSerivce.equipment.type}
              </StyledTableCell>
              <StyledTableCell align="center">
                {orderSerivce.equipment.tippingNumber}
              </StyledTableCell>
              <StyledTableCell align="center">
                {orderSerivce.equipment.status}
              </StyledTableCell>
              <StyledTableCell align="center">
                {orderSerivce.receiverName}
              </StyledTableCell>
              <StyledTableCell align="center">{`${orderSerivce.sender} - ${orderSerivce.senderFunctionalNumber}`}</StyledTableCell>
              {!isConsulta && (
                <StyledTableCell
                  align="center"
                  onClick={() =>
                    navigate('/order-service-update-form', {
                      state: { orderSerivce }
                    })
                  }>
                  <EditOSButton/>
                </StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
