import { render } from '@testing-library/react'
import NavBar from './index'
import Providers from './../../utils/test-utils'

test('test NavBar', () => {
  render(
    <Providers>
      <NavBar />
    </Providers>
  )
})
