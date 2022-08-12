import { render, screen, waitFor, getByRole } from '@testing-library/react'
import Providers from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import EditUser from './index'

test('must edit user', async () => {
  render(
    <Providers>
      <EditUser />
    </Providers>
  )

  expect(await screen.findByText('Edição de Usuário')).toBeInTheDocument()

  const nameInput = screen.getByLabelText('Nome completo')
  userEvent.type(nameInput, 'Fulano')

  const emailInput = screen.getByLabelText('Email')
  userEvent.type(emailInput, 'Fulano@email.com')

  const userNameInput = screen.getByLabelText('Nome de usuário')
  userEvent.type(userNameInput, 'fulano')

  const jobInput = getByRole(screen.getByTestId('jobSelect'), 'button')
  userEvent.click(jobInput)
  await waitFor(() => userEvent.click(screen.getByText(/Coordenador/i)))

  const profileInput = getByRole(screen.getByTestId('profileSelect'), 'button')
  userEvent.click(profileInput)
  await waitFor(() => userEvent.click(screen.getByText(/Admin/i)))

  const passwordInput = screen.getByLabelText('Senha')
  userEvent.type(passwordInput, '1234')

  const confirmPasswordInput = screen.getByLabelText('Confirmar Senha')
  userEvent.type(confirmPasswordInput, '1234')

  const RegisterButton = screen.getByRole('button', { name: 'Editar' })
  userEvent.click(RegisterButton)

  expect(await screen.findByText('Voltar')).toBeDisabled()

  expect(await screen.findByText('Remover')).toBeDisabled()
})
