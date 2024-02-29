import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
type RootStackParamList = {
  category?: { category: string } | undefined
  book?: { isbn: string } | undefined
}
const useNavigationCustom = () => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()

  return { nav }
}

export default useNavigationCustom
