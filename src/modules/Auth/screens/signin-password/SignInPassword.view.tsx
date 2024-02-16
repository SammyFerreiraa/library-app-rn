import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Checked from '../../utils/icons/Checked.svg'
import useSignInPasswordModel from './SignInPassword.model'

const SignInPasswordView = ({
  name,
  email,
  handleSignIn,
  setPassword,
  passwordError,
}: ReturnType<typeof useSignInPasswordModel>) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../utils/images/bg.png')}
      className="relative flex-1 justify-center px-4"
    >
      <Text className="mb-4 pl-4 text-4xl font-bold text-white">SignIn</Text>

      <View className="flex-col rounded-xl bg-[#313333]/60 px-4 py-6 backdrop-blur-[5px]">
        <View className="mb-6 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Image
              source={require('../../utils/images/perfil.png')}
              alt="perfil"
              className="h-20 w-20 rounded-full"
            />
            <View className="flex-col items-start">
              <Text className="text-lg font-bold text-white">{name}</Text>
              <Text className="text-white">{email}</Text>
            </View>
          </View>
          <Checked />
        </View>
        <View className="flex-col gap-4 opacity-100">
          <TextInput
            autoComplete="off"
            placeholder="Password"
            className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700 ${passwordError && 'border-2 border-red-500'}`}
            secureTextEntry={true}
            onChangeText={setPassword}
            onSubmitEditing={handleSignIn}
            returnKeyType="next"
            blurOnSubmit
          />
          <TouchableOpacity
            className="items-center justify-center rounded-xl bg-white p-4"
            activeOpacity={0.7}
            onPress={handleSignIn}
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
  )
}

export default SignInPasswordView
