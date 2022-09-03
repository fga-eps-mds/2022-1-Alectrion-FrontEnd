import { render, screen } from '@testing-library/react'
import Providers from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import UserScreen from './index'

test('must edit user', async () => {
  render(
    <Providers>
      <UserScreen />
    </Providers>
  )

  expect(await screen.findByText('Usuários')).toBeInTheDocument()

  expect(await screen.findByText('Nome do usuário')).toBeInTheDocument()

  expect(await screen.findByText('Email')).toBeInTheDocument()

  expect(await screen.findByText('Perfil')).toBeInTheDocument()

  expect(await screen.findByText('Cargo')).toBeInTheDocument()

  const RegisterButton = screen.getByTestId('userRegister')
  userEvent.click(RegisterButton)
})
