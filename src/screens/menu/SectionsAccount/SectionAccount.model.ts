import { useAuth } from '@/hooks/useAuth'

const useSectionAccountModel = () => {
  const { signOut } = useAuth()
  return { signOut }
}

export default useSectionAccountModel
