import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import apiService from '../../services/apiService'
const useSignInModel = () => {
  const { setEmail, setName } = useUser()
  const [email, setEmailInput] = useState<string>('')
  const [emailError, setEmailError] = useState<boolean>(false)
  const { navigate } = useNavigation()

  const handleSignIn = () => {
    const login = async () => {
      try {
        await apiService()
          .getInfos(email)
          .then((res) => {
            setEmailError(false)
            setEmail(res.email)
            setName(res.name)
            setEmailInput('')
            navigate('SignInPassword' as never)
          })
      } catch (error) {
        setEmailError(true)
      }
    }
    login()
  }

  return {
    email,
    emailError,
    setEmailInput,
    handleSignIn,
    navigate,
  }
}

export default useSignInModel
