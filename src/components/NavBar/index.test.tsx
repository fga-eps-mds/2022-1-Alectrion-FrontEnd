import { render } from '@testing-library/react'
import NavBar from '.'
import Providers from './../../utils/test-utils'

test('test NavBar', () => {
  render(
    <Providers>
      <NavBar />
    </Providers>
  )
})
