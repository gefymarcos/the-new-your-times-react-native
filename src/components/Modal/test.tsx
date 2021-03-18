import React from 'react'
import { Provider } from 'react-redux'
import renderer, { act } from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fireEvent, render } from '@testing-library/react-native'

import BackDrop from '.'

jest.useFakeTimers()

const props = {
  title: 'Title of card',
  abstract: 'Description',
  url: 'https://myurl.com.br'
}

describe('<BackDrop />', () => {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)

  it('should render correctly', () => {
    const { getAllByText } = render(
      <Provider store={mockStore({})}>
        <BackDrop {...props} />
      </Provider>
    )

    const title = getAllByText(/Title of card/i)
    const abstract = getAllByText(/Description/i)
    const url = getAllByText(/https:\/\/myurl.com.br/i)

    fireEvent(url[0], 'press')

    expect(title).toBeDefined()
    expect(abstract).toBeDefined()
    expect(url).toBeDefined()
  })

  it('should close modal', () => {
    const { getByTestId } = render(
      <Provider store={mockStore({})}>
        <BackDrop {...props} />
      </Provider>
    )

    const modal = getByTestId(/modal-custom/i)
    expect(modal.props.visible).toEqual(true)
    act(() => {
      modal.props.onRequestClose()
    })
    expect(modal.props.visible).toEqual(false)
    expect(modal).toBeDefined()
  })

  it('should close modal when press back button', () => {
    const { getByText, getByTestId } = render(
      <Provider store={mockStore({})}>
        <BackDrop {...props} />
      </Provider>
    )

    const button = getByText(/back/i)
    const modal = getByTestId(/modal-custom/i)
    expect(modal.props.visible).toEqual(true)

    fireEvent(button, 'press')

    expect(modal.props.visible).toEqual(false)
    expect(modal).toBeDefined()
  })

  it('should render correctly based on snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <BackDrop {...props} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
