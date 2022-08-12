import SelectJob from './index'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Providers from '../../utils/test-utils'

test('Select job unit test', () => {
  render(
    <Providers>
      <SelectJob />
    </Providers>
  )
  const jobSelect = screen.getByRole('button')
  userEvent.click(jobSelect)
  userEvent.click(screen.getByText(/Escrivão/i))
})
