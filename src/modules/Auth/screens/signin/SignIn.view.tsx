import React from 'react'
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import useSignInModel from './SignIn.model'

const SignInView = ({
  email,
  emailError,
  setEmailInput,
  handleSignIn,
  navigate,
}: ReturnType<typeof useSignInModel>) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../utils/images/bg.png')}
      className="flex-1 px-4 pt-64"
    >
      <Text className="mb-4 pl-4 text-4xl font-bold text-white">SignIn</Text>

      <View className="flex-col rounded-xl bg-[#313333]/60 px-4 py-6 backdrop-blur-[5px]">
        <View className="mb-4 flex-col gap-4 opacity-100">
          <TextInput
            autoComplete="off"
            value={email}
            placeholder="Email"
            className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700 ${emailError && 'border-2 border-red-500'}`}
            onChangeText={setEmailInput}
            onSubmitEditing={handleSignIn}
            returnKeyType="next"
            blurOnSubmit
            testID="emailTextInput"
          />
          <TouchableOpacity
            className="items-center justify-center rounded-xl bg-white p-4"
            activeOpacity={0.7}
            onPress={handleSignIn}
            testID="signin"
          >
            <Text className="font-bold">Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text className="text-center font-bold text-white">
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mb-4 flex-row items-center gap-2.5 opacity-100">
          <View className="h-[1px] flex-1 bg-neutral-600"></View>
          <Text className="text-neutral-500">Or</Text>
          <View className="h-[1px] flex-1 bg-neutral-600"></View>
        </View>
        <View className="gap-4 pb-8">
          <TouchableOpacity
            className="relative flex-row items-center justify-center rounded-xl bg-white p-4"
            activeOpacity={0.7}
          >
            <Image
              alt="Google"
              source={require('../../utils/icons/Google.png')}
              className="absolute left-4 h-[23.04px] w-[23.80px]"
            />
            <Text className="font-bold">Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="relative flex-row items-center justify-center rounded-xl bg-white p-4"
            activeOpacity={0.7}
          >
            <Image
              alt="Facebook"
              source={require('../../utils/icons/Facebook.png')}
              className="absolute left-4 h-[23.04px] w-[23.80px]"
            />
            <Text className="font-bold">Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="relative flex-row items-center justify-center rounded-xl bg-white p-4"
            activeOpacity={0.7}
          >
            <Image
              alt="Apple"
              source={require('../../utils/icons/Apple.png')}
              className="absolute left-4 h-6 w-6"
            />
            <Text className="font-bold">Login with Apple</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center gap-1">
          <Text className="text-center text-white">
            Don&apos;t have a account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            testID="signup"
            onPress={() => navigate('SignUp' as never)}
          >
            <Text className="font-bold text-white">SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default SignInView
