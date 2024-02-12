import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
const useSignInModel = () => {
  const { setEmail, setName } = useUser()
  const [email, setEmailInput] = useState<string>('')
  const [emailError, setEmailError] = useState<boolean>(false)
  const { navigate } = useNavigation()

  const handleSignIn = () => {
    const login = async () => {
      try {
        await axios
          .post('http://10.0.0.106:3000/infos', {
            email,
          })
          .then((res) => {
            setEmailError(false)
            setEmail(res.data.email)
            setName(res.data.name)
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
  }
}

export default useSignInModel
