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
  screen.debug()

  const buttonAlectrion = screen.getByTestId('buttonAlectrion')
  userEvent.click(buttonAlectrion)

  const buttonEquipament = screen.getByTestId('buttonEquipaments')
  userEvent.click(buttonEquipament)

  const buttonOrderService = screen.getByTestId('buttonOrderService')
  userEvent.click(buttonOrderService)

  const buttonUsers = screen.getByTestId('buttonUsers')
  userEvent.click(buttonUsers)

  const buttonEquipamentPC = screen.getByTestId('buttonEquipamentsPC')
  userEvent.click(buttonEquipamentPC)

  const buttonOrderServicePC = screen.getByTestId('buttonOrderServicePC')
  userEvent.click(buttonOrderServicePC)

  const buttonUsersPC = screen.getByTestId('buttonUsersPC')
  userEvent.click(buttonUsersPC)

  const buttonExit = screen.getByTestId('buttonExit')
  userEvent.click(buttonExit)

  const buttonUser = screen.getByTestId('buttonUser')
  userEvent.click(buttonUser)
})
