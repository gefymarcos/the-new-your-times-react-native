import * as React from 'react'
import { ScrollViewProps } from 'react-native'
import Articles from '../../templates/Articles'

export default function Science({ ...rest }: Partial<ScrollViewProps>) {
  return <Articles section="science" {...rest} />
}
