import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { View, Text, Image } from 'react-native'

const UserAccount = () => {
  const { authData } = useAuth()

  return (
    <View className="mx-5 flex-row items-center " style={{ gap: 24 }}>
      <Image
        alt="profile"
        source={require('../../../utils/images/perfil.png')}
        className="h-12 w-12 rounded-full"
      />
      <View className="flex-1 flex-row justify-between">
        <View className="flex-col ">
          <Text className="text-base font-bold text-white">
            {authData?.user.name}
          </Text>
          <Text className="text-base text-neutral-500">
            {authData?.user.email}
          </Text>
        </View>
        <View className="items-center justify-center rounded-3xl bg-[#CDE7BE] px-3 py-1">
          <Text className="text-900">Premium</Text>
        </View>
      </View>
    </View>
  )
}

export default UserAccount
