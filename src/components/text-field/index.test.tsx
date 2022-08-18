import BasicTextFields from './index'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Providers from '../../utils/test-utils'

test('Text field unit test', () => {
  render(
    <Providers>
      <BasicTextFields />
    </Providers>
  )

  const inputText = screen.getByRole('textbox')
  userEvent.type(inputText, 'test')
})
