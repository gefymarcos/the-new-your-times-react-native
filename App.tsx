import 'react-native-gesture-handler'
import * as React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './src/store'
import Home from './src/pages/Home'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
