/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'react'
import { get } from '../../api'
import * as constants from './constants'
import { ArticleProps } from './types'
import endpoints from './endpoints'
import { cardProps } from '../../components/Card'

const articlesRequest = () => ({
  type: constants.ARTICLES_REQUEST
})

const articlesFullFilled = (articles: ArticleProps[]) => {
  return {
    type: constants.ARTICLES_FULLFILLED,
    payload: articles
  }
}

const articlesFullRejected = (err: string) => {
  return {
    type: constants.ARTICLES_REJECTED,
    payload: err
  }
}

const fetchArticles = async (section: string) => {
  return await get({ url: endpoints.articles(section) })
}

const loadArticlesAction = (section: string) => {
  return async (dispatch: any) => {
    dispatch(articlesRequest())
    try {
      const articles: any = await fetchArticles(section)
      dispatch(articlesFullFilled(articles?.data?.results))
    } catch (err) {
      console.log('err at load articles list', err)
      dispatch(articlesFullRejected(err))
    }
  }
}

const showArticleDetailAction = ({ title, abstract, url }: cardProps) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({
      type: constants.ARTICLE_DETAIL_FULLFILLED,
      payload: { title, abstract, url }
    })
  }
}

const clearArticleSelectedAction = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: constants.CLEAR_ARTICLE_DETAIL })
  }
}

export {
  loadArticlesAction,
  showArticleDetailAction,
  clearArticleSelectedAction
}
