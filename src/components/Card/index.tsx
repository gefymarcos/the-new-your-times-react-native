import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import theme from '../../styles/theme'
import { showArticleDetailAction } from '../../modules/articles/actions'
import { useDispatch } from 'react-redux'

export type cardProps = {
  title: string
  abstract: string
  url: string
}

const Card = ({ title, abstract, url }: cardProps) => {
  const dispatch = useDispatch()
  return (
    <TouchableNativeFeedback
      onPress={() =>
        dispatch(showArticleDetailAction({ title, abstract, url }))
      }
    >
      <View style={styles.wrapperCard}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  wrapperCard: {
    borderBottomColor: theme.colors.black,
    borderBottomWidth: 1,
    marginHorizontal: theme.spacings.xsmall
  },
  card: {
    paddingVertical: theme.spacings.medium,
    justifyContent: 'center'
  },
  url: {
    marginHorizontal: theme.spacings.xsmall,
    fontSize: theme.font.sizes.small,
    color: theme.colors.lightGray
  },
  title: {
    fontWeight: '600',
    fontSize: theme.font.sizes.large,
    marginVertical: theme.spacings.xxsmall,
    marginHorizontal: theme.spacings.xsmall,
    color: theme.colors.black
  },
  abstract: {
    fontSize: theme.font.sizes.medium,
    lineHeight: theme.spacings.small,
    marginVertical: theme.spacings.xxsmall,
    marginHorizontal: theme.spacings.xsmall,
    color: theme.colors.black
  }
})

export default Card
