import useNavigationCustom from '@/hooks/useNavigation'
import { useLocalSearchParams } from 'expo-router'

const useHeaderModel = () => {
  const { nav } = useNavigationCustom()
  const { category } = useLocalSearchParams()
  return { nav, category }
}

export default useHeaderModel
