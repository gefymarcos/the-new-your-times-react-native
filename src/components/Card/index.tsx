import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import theme from '../../styles/theme'

type cardProps = {
  title: string,
  paragraph: string,
  url: string
}

const Card = ({ title, paragraph, url }: cardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.paragraph}>
        {paragraph}
      </Text>
      <Text style={styles.url}>
        {url}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    paddingBottom: 16,
    justifyContent: 'center',
    borderBottomColor: theme.colors.black,
    borderBottomWidth: 1,
  },
  url: {
    marginHorizontal: 16,
    fontSize: 12,
    color: theme.colors.lightGray
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    color: theme.colors.black
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
    color: theme.colors.black
  },
})

export default Card
