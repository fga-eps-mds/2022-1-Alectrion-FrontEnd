/* eslint-disable no-unused-vars */
import { CircularProgress, Typography } from '@mui/material'
import { AxiosResponse } from 'axios'
import { useContext, useEffect, useState } from 'react'
import {
  Params,
  useNavigate,
  useParams,
  useSearchParams
} from 'react-router-dom'
import api from '../../api/config'
import { AuthContext } from '../../contexts/auth'
import { Container } from '../user-register/styles'
import OrderServiceUpdateForm  from '../../components/order-service-update-form'

export type Equipment = {
  id: string
  tippingNumber: string
  serialNumber: string
  type: string
  status: string
  model: string
  description: string
  initialUseDate: string
  screenSize: string
  invoiceNumber: string
  power?: string
  screenType?: string
  processor: string
  storageType: string
  storageAmount: string
  ram_size: string
  createdAt: string
  updatedAt: string
  formattedStatus: string
}

const OrderEdit = () => {
  const navigate = useNavigate()
  const [equipment, setEquipment] = useState<Equipment | undefined>(undefined)
  const [units, setUnits] = useState<
    { id: string; name: string; localization: string }[] | undefined
  >(undefined)

  const fetchUnits = async () => {
    const {
      data
    }: AxiosResponse<{ id: string; name: string; localization: string }[]> =
      await api.get(`equipment/getAllUnits`)
    setUnits(data)
  }

  useEffect(() => {
    fetchUnits()
  }, [])

  const fetchEquipment = async (tippingNumber: string) => {
    const { data }: AxiosResponse<Equipment> = await api.get(
      `equipment/listOne/?tippingNumber=${tippingNumber}`
    )

    let formattedStatus = ''
    const { status } = data
    switch (status) {
      case 'MAINTENANCE':
        formattedStatus = 'Em manutenção'
        break
      case 'ACTIVE':
        formattedStatus = 'Ativo'
        break
      case 'ACTIVE_BY_DEMISE':
        formattedStatus = 'Ativo'
        break
      case 'INACTIVE':
        formattedStatus = 'Inativo'
        break
      case 'DOWNGRADED':
        formattedStatus = 'Baixado'
        break
      case 'TECHNICAL_RESERVE':
        formattedStatus = 'Reserva técnica'
        break
      default:
        break
    }

    setEquipment({ ...data, formattedStatus })
  }

  const handleTippingNumberChange = (data: string) => {
    if (data.length) {
      fetchEquipment(data)
    }
  }

  const { user } = useContext(AuthContext)

  return (
    <Container>
      <>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Edição de ordem de serviço
        </Typography>
        <OrderServiceUpdateForm
          units={units}
          initialData={equipment}
          user={{
            token: user?.token ?? '',
            name: user?.name ?? ''
          }}
          handleTippingNumberChange={handleTippingNumberChange}
        />{' '}
      </>
    </Container>
  )
}
export default OrderEdit
