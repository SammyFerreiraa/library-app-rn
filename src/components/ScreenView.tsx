import React from 'react'
import { ScrollView, View } from 'react-native'

type ScreenViewProps = {
  children: React.ReactNode
  scrollViewRef?: React.RefObject<ScrollView>
}

const ScreenView = ({ children, scrollViewRef }: ScreenViewProps) => {
  return (
    <View className="flex-1 items-center bg-black pb-[68px]">
      <ScrollView
        ref={scrollViewRef || undefined}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="w-[100%] flex-1 pt-5"
      >
        {children}
      </ScrollView>
    </View>
  )
}

export default ScreenView
