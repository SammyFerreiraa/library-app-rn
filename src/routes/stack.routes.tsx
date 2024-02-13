import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Settings } from '../screens'
const { Navigator, Screen } = createNativeStackNavigator()

export default function AppStack() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  )
}
