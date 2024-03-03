import React from 'react'
import {
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'
import useSignUpModel from './SignUp.model'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUpView = ({
  name,
  setName,
  email,
  setEmail,
  handleSignUp,
  address,
  city,
  navigate,
  password,
  setAddress,
  setCity,
  setPassword,
}: ReturnType<typeof useSignUpModel>) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../utils/images/bg.png')}
      className="flex-1 px-4 pt-48"
    >
      <Text className="mb-4 pl-4 text-4xl font-bold text-white">SignUp</Text>
      <KeyboardAwareScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View className="flex-col rounded-xl bg-[#313333]/60 px-4 py-6 backdrop-blur-[5px]">
          <View className="mb-4 flex-col gap-4 opacity-100">
            <TextInput
              autoComplete="off"
              placeholder="Name"
              value={name}
              onChangeText={setName}
              className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700`}
            />
            <TextInput
              autoComplete="off"
              placeholder="Email"
              className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700`}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              autoComplete="off"
              placeholder="Password"
              className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700`}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInput
              autoComplete="off"
              placeholder="City"
              className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700`}
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              autoComplete="off"
              placeholder="Address"
              className={`rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700`}
              value={address}
              onChangeText={setAddress}
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
              onPress={handleSignUp}
              testID="registerButton"
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
              testID="toLoginButton"
            >
              <Text className="font-bold text-white">Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  )
}

export default SignUpView
