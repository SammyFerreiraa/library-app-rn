import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from 'expo-router'
type RootStackParamList = {
  category?: { category: string } | undefined
  book?: { isbn: string } | undefined
}
const useNavigationCustom = () => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()

  return { nav }
}

export default useNavigationCustom
