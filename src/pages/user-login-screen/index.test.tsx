import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginScreenForm from '../../components/login-screen-form'
import Providers from '../../utils/test-utils'

test('login to the application', async () => {
  render(
    <Providers>
      <LoginScreenForm />
    </Providers>
  )

  const usernameInput = screen.getByLabelText('Username')
  userEvent.type(usernameInput, 'fulano')

  const passwordInput = screen.getByLabelText('Senha')
  userEvent.type(passwordInput, '123456')

  // const loginButton = screen.getByRole('button', { name: 'Login' })
  // userEvent.click(loginButton)
})
