import React, { useState } from 'react'
import Checked from '../../utils/icons/Checked.svg'
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useUser } from '../../hooks/useUser'
import axios from 'axios'
import { useAuth } from '@/hooks/useAuth'

const SignInPassword = () => {
  const { email, name, setEmail, setName } = useUser()
  const { signIn } = useAuth()
  const [password, setPassword] = useState<string>('')

  const login = () => {
    const login = async () => {
      try {
        await axios
          .post('http://192.168.1.2:3000/login', {
            email,
            password,
          })
          .then((res) => {
            setEmail('')
            setName('')
            signIn(res.data)
          })
      } catch (error) {
        Alert.alert('Error', 'Wrong password')
      }
    }
    login()
  }
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
              className="rounded-lg bg-white px-4 py-4 text-black opacity-100 backdrop-blur-0 placeholder:text-neutral-700"
              onChangeText={setPassword}
            />
            <TouchableOpacity
              className="items-center justify-center rounded-xl bg-white p-4"
              activeOpacity={0.7}
              onPress={login}
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
