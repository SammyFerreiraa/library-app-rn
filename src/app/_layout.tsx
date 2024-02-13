import { useAuth } from '@/hooks/useAuth'
import Routes from '@/routes'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Layout() {
  const { authData } = useAuth()
  return (
    <SafeAreaView className={`flex-1 ${authData ? 'bg-black' : 'bg-red-500'}`}>
      <NavigationContainer independent={true}>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  )
}
