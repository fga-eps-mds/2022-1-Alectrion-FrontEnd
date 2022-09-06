import { EditButton } from './index'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Providers from '../../utils/test-utils'

test('button unit test', () => {
  render(
    <Providers>
      <EditButton>Test</EditButton>
    </Providers>
  )
  const RegisterButton = screen.getByRole('button', { name: 'button' })
  userEvent.click(RegisterButton)
})
