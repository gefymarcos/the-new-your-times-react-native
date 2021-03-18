import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Articles from '.'

jest.useFakeTimers()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockReturnValue([
    {
      title: 'teste',
      abstract: 'teste',
      url: 'teste'
    }
  ])
}))

describe('<Articles />', () => {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  const store = mockStore()

  it('should render correctly the home with tabs', () => {
    const { getByTestId, getAllByText } = render(
      <Provider store={store}>
        <Articles />
      </Provider>
    )

    const scrollView = getByTestId(/scrollView/i)
    const title = getAllByText(/teste/i)

    expect(scrollView).toBeDefined()
    expect(title).toBeDefined()
  })

  it('should render correctly based on snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <Articles />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
