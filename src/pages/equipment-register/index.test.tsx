import '@testing-library/jest-dom'
import { render, screen, waitFor, getByRole } from '@testing-library/react'
import Providers from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import EquipRegister from './index'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

test('should register new equipment', async () => {
  mockedAxios.post.mockResolvedValue({
    productType: 'CPU',
    tippingNumber: '1745248'
  })
  render(
    <Providers>
      <EquipRegister />
    </Providers>
  )

  expect(
    await screen.findByText('Cadastro de Equipamentos')
  ).toBeInTheDocument()

  const typeInput = getByRole(
    screen.getByTestId('productType-select-label'),
    'button'
  )
  userEvent.click(typeInput)
  await waitFor(() => userEvent.click(screen.getByText(/CPU/i)))

  const tippingInput = screen.getByLabelText('N° Tombamento')
  userEvent.type(tippingInput, '1745248')

  const brandInput = screen.getByLabelText('Marca')
  userEvent.type(brandInput, 'Apple')

  const serialNumberInput = screen.getByLabelText('N° Série')
  userEvent.type(serialNumberInput, '52385238')

  const modelInput = screen.getByTestId('model-input')
  userEvent.type(modelInput, 'MacBook')

  const acquisitionInput = screen.getByLabelText('Tipo aquisição')
  userEvent.type(acquisitionInput, 'Licitação')

  const equipmentYearInput = screen.getByLabelText('Ano do equipamento')
  userEvent.type(equipmentYearInput, '2020')

  const acquisitionDateInput = screen.getByLabelText('Data de aquisição')
  userEvent.type(acquisitionDateInput, '28/12/2001')

  const fiscalNoteInput = screen.getByLabelText('N° da nota fiscal')
  userEvent.type(fiscalNoteInput, '192802')

  const memoryInput = screen.getByLabelText('ramMemory-input')
  userEvent.type(memoryInput, '8gb')

  const storageAmountInput = screen.getByLabelText('Armazenamento')
  userEvent.type(storageAmountInput, '1tb')

  const storageTypeInput = screen.getByTestId('storageType-input')
  userEvent.type(storageTypeInput, 'HD externo')

  const processorInput = screen.getByLabelText('Processador')
  userEvent.type(processorInput, 'Intel I7')

  const RegisterButton = screen.getByRole('button', { name: 'Cadastrar' })
  userEvent.click(RegisterButton)
})

test('should render register equipment page and back to equipments when back button clicked', async () => {
  render(
    <Providers>
      <EquipRegister />
    </Providers>
  )

  expect(
    await screen.findByText('Cadastro de Equipamentos')
  ).toBeInTheDocument()

  const RegisterButton = screen.getByRole('button', { name: 'Voltar' })
  userEvent.click(RegisterButton)
})
