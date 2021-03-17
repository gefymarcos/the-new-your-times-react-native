export type ArticleProps = {
  title: string,
  abstract: string,
  url: string
}

export type ArticlesStoreProps = {
  articlesRequesting: boolean,
  errored: boolean,
  errorMsg: string,
  data: ArticleProps[]
}
