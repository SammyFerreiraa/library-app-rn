import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Book, Home } from '../screens'
const { Navigator, Screen } = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'default',
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="book" component={Book} />
    </Navigator>
  )
}
