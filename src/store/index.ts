import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import articlesReducer from '../modules/articles/reducer'

const rootReducer = combineReducers(
  {articles: articlesReducer }
)

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}

export { configureStore }
