import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react-native'

import Container from '.'

jest.useFakeTimers()

describe('<Tabs />', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Container>
        <Text>teste</Text>
      </Container>
    )

    const content = getByText(/teste/i)

    expect(content).toBeDefined()
  })

  it('should render correctly based on snapshot', () => {
    const tree = renderer
      .create(
        <Container>
          <Text>teste</Text>
        </Container>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
