import * as constants from './constants'
import { ArticlesStoreProps, ArticleProps } from './types'

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

const articlesReducer = (
  state = Object.assign({}, initialState),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any
) => {
  const { type, payload } = action
  switch (type) {
    case constants.ARTICLES_REQUEST:
      return { ...state, articlesRequesting: true, data: [] }
    case constants.ARTICLES_FULLFILLED:
      return { ...Object.assign({}, initialState), data: payload }
    case constants.ARTICLES_REJECTED:
      return {
        ...Object.assign({}, initialState),
        errored: true,
        errorMsg: payload
      }
    case constants.ARTICLE_DETAIL_FULLFILLED:
      return { ...Object.assign({}, state), articleDetail: payload }
    case constants.CLEAR_ARTICLE_DETAIL:
      return {
        ...state,
        articlesRequesting: true,
        articleDetail: articleInitialState
      }
    default:
      return state
  }
}

export default articlesReducer
