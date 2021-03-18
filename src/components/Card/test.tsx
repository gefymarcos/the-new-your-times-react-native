import React from 'react'
import { render } from '@testing-library/react-native'
import renderer from 'react-test-renderer'

import Card from '.'

jest.useFakeTimers()

const props = {
  title: 'Title of card',
  abstract: 'Description',
  url: 'https://myurl.com.br'
}

describe('<Tabs />', () => {
  it('should render correctly', () => {
    const { getAllByText } = render(<Card {...props} />)

    const title = getAllByText(/Title of card/i)
    const description = getAllByText(/Description/i)
    const url = getAllByText(/https:\/\/myurl.com.br/i)

    expect(title).toBeDefined()
    expect(description).toBeDefined()
    expect(url).toBeDefined()
  })

  // it('should render correctly based on snapshot', () => {
  //   const tree = renderer.create(<Card />).toJSON()
  //   expect(tree).toMatchSnapshot();
  // })
})
