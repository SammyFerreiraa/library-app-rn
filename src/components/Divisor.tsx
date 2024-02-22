import React from 'react'
import { View, ViewProps } from 'react-native'

type DivisorProps = ViewProps

const Divisor = ({ ...rest }: DivisorProps) => {
  return <View className="mx-4 my-7 h-0.5 bg-neutral-800" {...rest}></View>
}

export default Divisor
