import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fireEvent, render } from '@testing-library/react-native'

import Card from '.'

jest.useFakeTimers()

const props = {
  title: 'Title of card',
  abstract: 'Description',
  url: 'https://myurl.com.br'
}

describe('<Card />', () => {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)

  it('should render correctly', () => {
    const { getAllByText } = render(
      <Provider store={mockStore({})}>
        <Card {...props} />
      </Provider>
    )

    const title = getAllByText(/Title of card/i)
    expect(title).toBeDefined()
  })

  it('should render correctly', () => {
    const store = mockStore({})
    const { getAllByText } = render(
      <Provider store={store}>
        <Card {...props} />
      </Provider>
    )

    const title = getAllByText(/Title of card/i)
    expect(title).toBeDefined()
  })

  it('should dispatched action with press a card', () => {
    const store = mockStore({})
    const { getAllByText } = render(
      <Provider store={store}>
        <Card {...props} />
      </Provider>
    )

    const title = getAllByText(/Title of card/i)
    expect(title).toBeDefined()
    fireEvent(title[0], 'press')
    const actions = store.getActions()
    expect(actions.length).toBe(1)
    expect(actions[0].type).toEqual('ARTICLE_DETAIL_FULLFILLED')
  })

  it('should render correctly based on snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <Card {...props} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
