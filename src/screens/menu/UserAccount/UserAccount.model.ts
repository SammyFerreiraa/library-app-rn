import { useAuth } from '@/hooks/useAuth'

const useUserAccountModel = () => {
  const { authData } = useAuth()

  return { authData }
}

export default useUserAccountModel
