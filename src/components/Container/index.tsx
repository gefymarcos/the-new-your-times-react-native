import * as React from 'react'
import { View, StyleSheet } from 'react-native'

type containerProps = {
  children: React.ReactNode
}
const Container = ({ children }: containerProps) => {
  return <View style={styles.content}>{children}</View>
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 20
  }
})

export default Container
