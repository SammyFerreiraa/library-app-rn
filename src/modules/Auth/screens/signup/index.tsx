import { useAuth } from '@/hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useState } from 'react'
import {
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const { signIn } = useAuth()

  const handleSignUp = () => {
    const signup = async (): Promise<boolean | undefined> => {
      try {
        await axios
          .post('http://10.0.0.106:3000/register', {
            name,
            email,
            password,
            city,
            address,
          })
          .then(() => {
            return true
          })
      } catch (error) {
        console.log(error)
        return false
      }
    }

    signup().then(() => {
      const login = async () => {
        try {
          await axios
            .post('http://10.0.0.106:3000/login', {
              email,
              password,
            })
            .then((res) => {
              signIn(res.data)
            })
        } catch (error) {
          console.log(error)
        }
      }
      login()
    })
  }

  const { navigate } = useNavigation()
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../utils/images/bg.png')}
      className="flex-1 px-4"
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          justifyContent: 'flex-end',
          flexGrow: 1,
          paddingBottom: 56,
        }}
      >
        <Text className="mb-4 pl-4 text-4xl font-bold text-white">SignUp</Text>

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
      </KeyboardAwareScrollView>
    </ImageBackground>
  )
}

export default SignUp
