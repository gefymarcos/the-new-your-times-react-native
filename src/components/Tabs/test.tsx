import React from 'react'
import { render } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

import Tabs from '.'

jest.useFakeTimers()

describe('<Tabs />', () => {
  it('should render correctly', () => {
    const { getAllByText } = render(<Tabs />)

    const tab1 = getAllByText(/Science/i)
    const tab2 = getAllByText(/Technology/i)

    expect(tab1).toBeDefined()
    expect(tab2).toBeDefined()
  })

  it('should render correctly based on snapshot', () => {
    const tree = renderer.create(<Tabs />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
