import { AuthRoutes } from '@/modules/Auth/routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppStack from './stack.routes'
import { useAuth } from '@/hooks/useAuth'
const { Navigator, Screen } = createNativeStackNavigator()

export default function Routes() {
  const { authData } = useAuth()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {authData ? (
        <Screen name="App" component={AppStack} />
      ) : (
        <Screen name="Auth" component={AuthRoutes} />
      )}
    </Navigator>
  )
}
