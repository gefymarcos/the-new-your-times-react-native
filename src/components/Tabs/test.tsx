import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Tabs from '.'
import { ArticleProps, ArticlesStoreProps } from 'modules/articles/types'

jest.useFakeTimers()

describe('<Tabs />', () => {
  const articleInitialState: ArticleProps = {
    title: '',
    abstract: '',
    url: ''
  }
  const initialState: ArticlesStoreProps = {
    articlesRequesting: false,
    errored: false,
    errorMsg: '',
    articleDetail: articleInitialState,
    data: []
  }
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  let store

  it('should render correctly', () => {
    const { getAllByText } = render(
      <Provider store={mockStore({})}>
        <Tabs />
      </Provider>
    )

    const tab1 = getAllByText(/Science/i)
    const tab2 = getAllByText(/Technology/i)

    expect(tab1).toBeDefined()
    expect(tab2).toBeDefined()
  })

  it('should render correctly based on snapshot', () => {
    store = mockStore(initialState)
    const tree = renderer
      .create(
        <Provider store={store}>
          <Tabs />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should dispatched action with press science tab', () => {
    store = mockStore(initialState)

    const { getAllByText } = render(
      <Provider store={store}>
        <Tabs />
      </Provider>
    )

    const tab1 = getAllByText(/Science/i)
    fireEvent.press(tab1[0])
    expect(store.getActions()).toEqual([{ type: 'ARTICLES_REQUEST' }])
  })

  it('should dispatched action with press technology tab', () => {
    store = mockStore(initialState)

    const { getAllByText } = render(
      <Provider store={store}>
        <Tabs />
      </Provider>
    )

    const tab2 = getAllByText(/Science/i)
    fireEvent.press(tab2[0])
    expect(store.getActions()).toEqual([{ type: 'ARTICLES_REQUEST' }])
  })
})
