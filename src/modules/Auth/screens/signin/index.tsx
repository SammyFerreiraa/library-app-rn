import React from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SignIn = () => {
  return (
    <View className='flex-1'>
      <ImageBackground resizeMode='cover' source={require('../../utils/images/bg.png')} className='flex-1 pb-14 px-4 pt-72 relative'>
        <Text className='text-4xl font-bold text-white mb-4 pl-4'>SignIn</Text>

        <View className='px-4 py-6 rounded-xl flex-col'>
          <View className='flex-col gap-4 mb-4 opacity-100'>
            <TextInput autoComplete='off' placeholder='Email' className='bg-white py-4 rounded-lg opacity-100 backdrop-blur-0 px-4 text-black placeholder:text-neutral-600'/>
            <TouchableOpacity className='items-center justify-center bg-white rounded-xl p-4' activeOpacity={0.7}>
              <Text className='font-bold'>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className='font-bold text-white text-center'>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row gap-2.5 items-center mb-4 opacity-100'>
            <View className='h-[1px] bg-neutral-600 flex-1'></View>
            <Text className='text-neutral-500'>Or</Text>
            <View className='h-[1px] bg-neutral-600 flex-1'></View>
          </View>
          <View className='gap-4 pb-8'>
          <TouchableOpacity className='items-center justify-center bg-white rounded-xl p-4 flex-row relative' activeOpacity={0.7}>
              <Image source={require('../../utils/icons/Google.png')} className='w-[23.80px] h-[23.04px] absolute left-4'/>
              <Text className='font-bold'>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className='items-center justify-center bg-white rounded-xl p-4 flex-row relative' activeOpacity={0.7}>
          <Image source={require('../../utils/icons/Facebook.png')} className='w-[23.80px] h-[23.04px] absolute left-4'/>
              <Text className='font-bold'>Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity className='items-center justify-center bg-white rounded-xl p-4 flex-row relative' activeOpacity={0.7}>
          <Image source={require('../../utils/icons/Apple.png')} className='w-6 h-6 absolute left-4'/>
              <Text className='font-bold'>Login with Apple</Text>
          </TouchableOpacity>
          </View>
          <Text className='text-center text-white'>Don't have a account? <Text className='font-bold'>SignUp</Text></Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default SignIn