import { useAuth } from '@/hooks/useAuth'
import axios from 'axios'
import { useNavigation } from 'expo-router'
import { useState } from 'react'

const useSignUpModel = () => {
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

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    city,
    setCity,
    address,
    setAddress,
    handleSignUp,
    navigate,
  }
}

export default useSignUpModel
