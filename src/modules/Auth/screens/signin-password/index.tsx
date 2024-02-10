import React from 'react'
import Checked from '../../utils/icons/Checked.svg'
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

const SignInPassword = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        source={require('../../utils/images/bg.png')}
        className="relative flex-1 px-4 pb-14 pt-72"
      >
        <Text className="mb-4 pl-4 text-4xl font-bold text-white">SignIn</Text>

        <View className="flex-col rounded-xl bg-[#313333]/60 px-4 py-6 backdrop-blur-[5px]">
          <View className="mb-6 flex-row items-center justify-between">
            <Image
              source={require('../../utils/images/perfil.png')}
              alt="perfil"
              className="h-20 w-20 rounded-full"
            />
            <View className="flex-col items-start gap-1">
              <Text className="text-lg font-bold text-white">
                Sammy Ferreira
              </Text>
              <Text className="text-white">sammy@gmail.com</Text>
            </View>
            <Checked />
          </View>
          <View className="mb-4 flex-col gap-4 opacity-100">
            <TextInput
              autoComplete="off"
              placeholder="Email"
              className="rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-600"
            />
            <TouchableOpacity
              className="items-center justify-center rounded-xl bg-white p-4"
              activeOpacity={0.7}
            >
              <Text className="font-bold">Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="text-center font-bold text-white">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default SignInPassword
