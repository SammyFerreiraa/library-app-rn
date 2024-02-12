import { useAuth } from '@/hooks/useAuth'
import axios from 'axios'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

const useSignInPasswordModel = () => {
  const { email, name, setEmail, setName } = useUser()
  const { signIn } = useAuth()
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const handleSignIn = () => {
    const login = async () => {
      try {
        await axios
          .post('http://10.0.0.106:3000/login', {
            email,
            password,
          })
          .then((res) => {
            setPasswordError(false)
            setEmail('')
            setName('')
            signIn(res.data)
          })
      } catch (error) {
        setPasswordError(true)
      }
    }
    login()
  }

  return {
    name,
    setPassword,
    passwordError,
    handleSignIn,
    email,
  }
}

export default useSignInPasswordModel
