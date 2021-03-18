import reducer from '../reducer'
import * as constants from '../constants'

describe('articles reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      articlesRequesting: false,
      errored: false,
      errorMsg: '',
      articleDetail: {
        title: '',
        abstract: '',
        url: ''
      },
      data: []
    })
  })

  it('should handle load articles', () => {
    expect(
      reducer(undefined, {
        type: constants.ARTICLES_REQUEST
      })
    ).toEqual({
      articleDetail: { abstract: '', title: '', url: '' },
      articlesRequesting: true,
      data: [],
      errorMsg: '',
      errored: false
    })

    expect(
      reducer(undefined, {
        type: constants.ARTICLES_FULLFILLED,
        payload: [
          {
            title: 'teste 1',
            abstract: 'test teste',
            url: 'http://myurl.com'
          }
        ]
      })
    ).toEqual({
      articleDetail: { abstract: '', title: '', url: '' },
      articlesRequesting: false,
      data: [
        {
          title: 'teste 1',
          abstract: 'test teste',
          url: 'http://myurl.com'
        }
      ],
      errorMsg: '',
      errored: false
    })

    expect(
      reducer(undefined, {
        type: constants.ARTICLES_REJECTED,
        payload: 'error'
      })
    ).toEqual({
      articleDetail: { abstract: '', title: '', url: '' },
      articlesRequesting: false,
      data: [],
      errorMsg: 'error',
      errored: true
    })
  })

  it('should handle selected article detail', () => {
    expect(
      reducer(undefined, {
        type: constants.ARTICLE_DETAIL_FULLFILLED,
        payload: {
          title: 'teste 1',
          abstract: 'test teste',
          url: 'http://myurl.com'
        }
      })
    ).toEqual({
      articleDetail: {
        title: 'teste 1',
        abstract: 'test teste',
        url: 'http://myurl.com'
      },
      articlesRequesting: false,
      data: [],
      errorMsg: '',
      errored: false
    })

    expect(
      reducer(undefined, {
        type: constants.CLEAR_ARTICLE_DETAIL
      })
    ).toEqual({
      articleDetail: { abstract: '', title: '', url: '' },
      articlesRequesting: true,
      data: [],
      errorMsg: '',
      errored: false
    })
  })
})
