import * as React from 'react'
import { View, StyleSheet, ViewPropTypes } from 'react-native'

type containerProps = {
  children: React.ReactNode
  alignContent?: 'center' | 'top'
}
const Container = ({ children, alignContent = 'top' }: containerProps) => {
  return <View style={[styles.content, styles[alignContent]]}>{children}</View>
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 20
  },
  center: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  top: {
    justifyContent: 'flex-start'
  }
})

export default Container
