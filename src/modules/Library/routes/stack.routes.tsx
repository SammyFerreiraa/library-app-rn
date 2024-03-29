import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/home'
import { BookRoutes } from '@/modules/Book/routes'
const { Navigator, Screen } = createNativeStackNavigator()

export default function LibraryStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="book" component={BookRoutes} />
    </Navigator>
  )
}
