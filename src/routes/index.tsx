import { AuthRoutes } from '@/modules/Auth/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './stack.routes';
const { Navigator, Screen } = createNativeStackNavigator()

export default function Routes() {
  const auth = true
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {auth ? <Screen name="App" component={AppStack} /> : <Screen name="Auth" component={AuthRoutes} />}
    </Navigator>
  )
}
