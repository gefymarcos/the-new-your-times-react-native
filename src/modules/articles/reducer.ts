import * as constants from './constants';
import { ArticlesStoreProps } from './types'

const initialState: ArticlesStoreProps = {
  articlesRequesting: false,
  errored: false,
  errorMsg: '',
  data: [],
};

const articlesReducer = (state = Object.assign({}, initialState), action: any) => {
  const { type, payload } = action;
  switch (type) {
    case constants.ARTICLES_REQUEST:
      return { ...state, articlesRequesting: true, data: [] };
    case constants.ARTICLES_FULLFILLED:
      return { ...Object.assign({}, initialState), data: payload };
    case constants.ARTICLES_REJECTED:

    return {
        ...Object.assign({}, initialState),
        errored: true,
        errorMsg: payload,
      };
    case constants.ARTICLE_SELECTED_REQUEST:
      return { ...Object.assign({}, initialState), articlesRequesting: true };
    case constants.ARTICLE_SELECTED_FULLFILLED:
      return { ...Object.assign({}, initialState), data: payload };
    case constants.ARTICLE_SELECTED_REJECTED:
      return {
        ...Object.assign({}, initialState),
        errored: true,
        errorMsg: payload,
      };
    case constants.CLEAN_ARTICLES_REQUEST:
      return { ...state, articlesRequesting: true };
    case constants.CLEAN_ARTICLES_FULLFILLED:
      return { ...Object.assign({}, initialState) };
    case constants.CLEAN_ARTICLES_REJECTED:
      return {
        ...Object.assign({}, initialState),
        errored: true,
        errorMsg: payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;
