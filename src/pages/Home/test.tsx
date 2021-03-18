import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Home from '.'

jest.useFakeTimers()

describe('<Home />', () => {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)

  it('should render correctly the home with tabs', () => {
    const { getAllByText } = render(
      <Provider store={mockStore({})}>
        <Home />
      </Provider>
    )

    const content = getAllByText(/science/i)

    expect(content).toBeDefined()
  })

  it('should render correctly based on snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <Home />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
