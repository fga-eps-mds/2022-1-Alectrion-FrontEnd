import { Button } from './index'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Providers from '../../utils/test-utils'

test('button unit test', () => {
  render(
    <Providers>
      <Button />
    </Providers>
  )
  const RegisterButton = screen.getByRole('button')
  userEvent.click(RegisterButton)
})
