import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default
  },
  '&:nth-child(even)': {
    backgroundColor: '#F5F5F5'
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))
