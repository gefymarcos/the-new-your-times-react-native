import * as React from 'react'
import { API_KEY, API_URL } from '@env'
import {
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  ActivityIndicator
} from 'react-native'
import { useScrollToTop } from '@react-navigation/native'
import { loadArticlesAction } from '../../modules/articles/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleProps } from 'modules/articles/types';
import Card from '../../components/Card';
import theme from '../../styles/theme';
import { Container } from '../../components';


export default function Technology({
  ...rest
}: Partial<ScrollViewProps>) {
  const dispatch = useDispatch()
  const articles = useSelector((state: any) => state?.articles?.data);

  React.useEffect(() => {
    dispatch(loadArticlesAction('technology'));
  }, []);

  const ref = React.useRef<ScrollView>(null)

  useScrollToTop(ref)

  return (
    <>
      {articles.length === 0 && (
        <Container alignContent="center">
          <ActivityIndicator size="large" color={theme.colors.secondary} />
        </Container>
      )}
      {!!articles && (<ScrollView
        ref={ref}
        style={styles.container}
        contentContainerStyle={styles.content}
        {...rest}
      >
        {articles.map((article: ArticleProps, index: number) => (
          <Card
            key={index}
            title={article.title}
            paragraph={article.abstract}
            url={article.url}
          />
        ))}
      </ScrollView>)}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary
  },
  content: {
    paddingVertical: theme.spacings.xsmall
  },
})
