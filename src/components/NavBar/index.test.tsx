import { render, screen } from '@testing-library/react'
import NavBar from './index'
import Providers from './../../utils/test-utils'
import userEvent from '@testing-library/user-event'

test('test NavBar', () => {
  render(
    <Providers>
      <NavBar />
    </Providers>
  )

  expect(screen.getByTestId('buttonAlectrion')).toBeInTheDocument()
  const buttonAlectrion = screen.getByTestId('buttonAlectrion')
  userEvent.click(buttonAlectrion)

  expect(screen.getByTestId('buttonEquipaments')).toBeInTheDocument()
  const buttonEquipament = screen.getByTestId('buttonEquipaments')
  userEvent.click(buttonEquipament)

  expect(screen.getByTestId('buttonOrderService')).toBeInTheDocument()
  const buttonOrderService = screen.getByTestId('buttonOrderService')
  userEvent.click(buttonOrderService)

  expect(screen.getByTestId('buttonUsers')).toBeInTheDocument()
  const buttonUsers = screen.getByTestId('buttonUsers')
  userEvent.click(buttonUsers)

  expect(screen.getByTestId('buttonEquipamentsPC')).toBeInTheDocument()
  const buttonEquipamentPC = screen.getByTestId('buttonEquipamentsPC')
  userEvent.click(buttonEquipamentPC)

  expect(screen.getByTestId('buttonOrderServicePC')).toBeInTheDocument()
  const buttonOrderServicePC = screen.getByTestId('buttonOrderServicePC')
  userEvent.click(buttonOrderServicePC)

  expect(screen.getByTestId('buttonUsersPC')).toBeInTheDocument()
  const buttonUsersPC = screen.getByTestId('buttonUsersPC')
  userEvent.click(buttonUsersPC)

  expect(screen.getByTestId('buttonExit')).toBeInTheDocument()
  const buttonExit = screen.getByTestId('buttonExit')
  userEvent.click(buttonExit)

  expect(screen.getByTestId('buttonUser')).toBeInTheDocument()
  const buttonUser = screen.getByTestId('buttonUser')
  userEvent.click(buttonUser)
})
