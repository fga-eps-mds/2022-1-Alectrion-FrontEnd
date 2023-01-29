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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import api from '../../api/config'
import { toast } from 'react-toastify'

export interface Movement {
  id: string
  date: Date
  userId: string
  equipments: any[]
  type: number
  inChargeName: string
  inChargeRole: string
  chiefName: string
  chiefRole: string
  equipmentSnapshots?: any
  description?: string
  destination?: any
}

interface propType {
  movements: Movement[]
  setMovements: Function
}

const TYPES = [
  'Empréstimo',
  'Baixa',
  'Responsabilidade'
]

export default function MovimentTables({movements, setMovements}: propType) {
  async function deleteMovement() {
    try {
      const { data } = await api.delete('equipment/deleteMovement',
      {
        params: {
          id: movements[0].id
        }
      })
  
      if(data.error)
        toast.error('Tempo limite de exclusão excedido.')
      else {
        const updatedMovements = [...movements]
        updatedMovements.shift()
  
        setMovements(updatedMovements)
        toast.success('Movimentação excluída com sucesso.')
      }
    } catch(e: any) {
        if(e.response.status == 401)
          toast.error('Tempo limite de exclusão excedido.')
        else
          toast.error(e.response.data.error)
    }
  }

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
            <StyledTableCell align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {movements.map((movement, index) => {
            return (
              <StyledTableRow key={index + movement.id}>
                <StyledTableCell align="center" component="th">
                  {movement.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {TYPES[movement.type]}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {movement.destination ? movement.destination.name : '-'}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {movement.equipments.length}
                </StyledTableCell>
                <StyledTableCell align="center">
                    <IconButton aria-label="pdf" size="large" disabled>
                        <PictureAsPdfIcon />
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                    <IconButton aria-label="delete" size="large" disabled={index != 0} onClick={() => deleteMovement()}>
                        <DeleteForeverIcon />
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
