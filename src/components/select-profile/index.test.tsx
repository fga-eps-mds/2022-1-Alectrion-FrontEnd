import SelectProfile from './index'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Providers from '../../utils/test-utils'

test('Select profile unit test', () => {
  render(
    <Providers>
      <SelectProfile />
    </Providers>
  )
  const jobProfile = screen.getByRole('button')
  userEvent.click(jobProfile)
  userEvent.click(screen.getByText(/Admin/i))
})
