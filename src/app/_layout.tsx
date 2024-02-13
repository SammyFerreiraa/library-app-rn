import Routes from '@/routes'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Layout() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: 'black' }}>
      <NavigationContainer independent={true}>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  )
}
