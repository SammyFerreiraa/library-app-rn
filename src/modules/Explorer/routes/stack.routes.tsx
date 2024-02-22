import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Categories } from '../screens'
import { BookRoutes } from '@/modules/Book/routes'
const { Navigator, Screen } = createNativeStackNavigator()

export default function ExploreStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="category" component={Categories} />
      <Screen name="book" component={BookRoutes} />
    </Navigator>
  )
}
