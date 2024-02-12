import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'

const SignUp = () => {
  const { navigate } = useNavigation()
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../utils/images/bg.png')}
      className="relative flex-1 px-4 pb-14 pt-72"
    >
      <Text className="mb-4 pl-4 text-4xl font-bold text-white">SignUp</Text>

      <View className="flex-col rounded-xl bg-[#313333]/60 px-4 py-6 backdrop-blur-[5px]">
        <View className="mb-4 flex-col gap-4 opacity-100">
          <TextInput
            autoComplete="off"
            placeholder="Name"
            className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700`}
          />
          <TextInput
            autoComplete="off"
            placeholder="Email"
            className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700`}
          />
          <TextInput
            autoComplete="off"
            placeholder="Password"
            className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700`}
          />
          <TextInput
            autoComplete="off"
            placeholder="ConfirmPassword"
            className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700`}
          />

          <Text className="items-center text-left text-white">
            By selecting Create Account below, I agree to
            <TouchableOpacity activeOpacity={0.7} className="text-center ">
              <Text className="text-left font-bold text-white">
                Terms of Service{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} className="text-center ">
              <Text className="text-left font-bold text-white">
                {' '}
                <Text className="font-normal">& </Text> Privacy Policy
              </Text>
            </TouchableOpacity>
          </Text>
          <TouchableOpacity
            className="items-center justify-center rounded-xl bg-white p-4"
            activeOpacity={0.7}
          >
            <Text className="font-bold">Create Account</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center gap-1">
          <Text className="text-center text-white">
            Already have a account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate('SignIn' as never)}
          >
            <Text className="font-bold text-white">Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default SignUp
