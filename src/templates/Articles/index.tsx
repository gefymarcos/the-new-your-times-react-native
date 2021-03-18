/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import {
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  ActivityIndicator,
  Text
} from 'react-native'
import { useScrollToTop } from '@react-navigation/native'
import { loadArticlesAction } from '../../modules/articles/actions'
import { useDispatch, useSelector } from 'react-redux'
import { ArticleProps } from 'modules/articles/types'
import BackDrop from '../../components/Modal'
import Card from '../../components/Card'
import Container from '../../components/Container'
import theme from '../../styles/theme'

type articleTemplateProps = {
  section?: 'science' | 'technology'
} & Partial<ScrollViewProps>

export default function Articles({
  section = 'science',
  ...rest
}: articleTemplateProps) {
  const dispatch = useDispatch()
  const articles = useSelector((state: any) => state?.articles?.data)
  const error = useSelector((state: any) => state?.articles?.errorMsg)
  const article = useSelector((state: any) => state?.articles?.articleDetail)

  React.useEffect(() => {
    dispatch(loadArticlesAction(section))
  }, [dispatch, section])

  const ref = React.useRef<ScrollView>(null)

  useScrollToTop(ref)

  return (
    <>
      {!!article?.title && <BackDrop {...article} />}
      {!!error && (
        <Container alignContent="center">
          <Text>
            Não foi possível carregar as informações agora, tente novamente mais
            tarde.
          </Text>
        </Container>
      )}
      {articles.length === 0 && !error && !article?.title && (
        <Container alignContent="center">
          <ActivityIndicator size="large" color={theme.colors.secondary} />
        </Container>
      )}
      {!!articles && (
        <ScrollView
          ref={ref}
          style={styles.container}
          contentContainerStyle={styles.content}
          {...rest}
        >
          {articles.map((article: ArticleProps, index: number) => (
            <Card
              key={index}
              title={article.title}
              abstract={article.abstract}
              url={article.url}
            />
          ))}
        </ScrollView>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary
  },
  content: {
    paddingVertical: theme.spacings.xsmall
  }
})
