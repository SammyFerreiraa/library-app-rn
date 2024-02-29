import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'
import apiService from '../../services/apiService'
import { useNavigation } from '@react-navigation/native'

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
        await apiService()
          .register({ name, email, password, city, address })
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
          apiService()
            .login(email, password)
            .then((res) => {
              signIn(res)
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
