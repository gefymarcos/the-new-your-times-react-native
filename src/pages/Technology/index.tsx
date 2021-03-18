import * as React from 'react'
import { ScrollViewProps } from 'react-native'
import Articles from '../../templates/Articles'

export default function Technology({ ...rest }: Partial<ScrollViewProps>) {
  return <Articles section="technology" {...rest} />
}
