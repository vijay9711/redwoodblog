import { render } from '@redwoodjs/testing/web'

import ThemeButton from './ThemeButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThemeButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemeButton />)
    }).not.toThrow()
  })
})
