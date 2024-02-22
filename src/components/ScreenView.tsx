import React from 'react'
import { ScrollView, ScrollViewProps, View } from 'react-native'

type ScreenViewProps = ScrollViewProps & {
  children: React.ReactNode
  scrollViewRef?: React.RefObject<ScrollView>
}

const ScreenView = ({ children, scrollViewRef, ...rest }: ScreenViewProps) => {
  return (
    <View className="flex-1 items-center bg-black pb-[68px]">
      <ScrollView
        {...rest}
        ref={scrollViewRef || undefined}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="flex-1 pt-5"
      >
        {children}
      </ScrollView>
    </View>
  )
}

export default ScreenView
