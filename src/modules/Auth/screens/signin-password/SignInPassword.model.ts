import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import apiService from '../../services/apiService'

const useSignInPasswordModel = () => {
  const { email, name, setEmail, setName } = useUser()
  const { signIn } = useAuth()
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const handleSignIn = () => {
    const login = async () => {
      try {
        await apiService()
          .login(email as string, password)
          .then((res) => {
            setPasswordError(false)
            setEmail('')
            setName('')
            signIn(res)
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
