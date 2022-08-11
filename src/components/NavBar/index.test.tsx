import { render } from '@testing-library/react'
import NavBar from '.'
import Providers from './../../utils/test-utils'

test.skip('test NavBar', () => {
  const mockedUsedNavigate = jest.fn()

  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate
  }))

  render(
    <Providers>
      <NavBar />
    </Providers>
  )
})
