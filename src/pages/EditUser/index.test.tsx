// import '@testing-library/jest-dom'
import { render, screen, waitFor, getByRole } from '@testing-library/react'
import Providers from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import EditUser from './index'
// import axios from 'axios'

// jest.mock('axios')

// const mockedAxios = axios as jest.Mocked<typeof axios>

test('must edit user', async () => {
  //   mockedAxios.put.mockResolvedValue({
  //     email: 'fulano@email.com',
  //     job: 'Admin'
  //   })

  render(
    <Providers>
      <EditUser />
    </Providers>
  )

  expect(await screen.findByText('Edição de Usuário')).toBeInTheDocument()

  const nameInput = screen.getByLabelText('Nome')
  userEvent.type(nameInput, 'Fulano')

  const emailInput = screen.getByLabelText('Email')
  userEvent.type(emailInput, 'Fulano@email.com')

  const userNameInput = screen.getByLabelText('Username')
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

  const RegisterButton = screen.getByRole('button', { name: 'editar' })
  userEvent.click(RegisterButton)
})
