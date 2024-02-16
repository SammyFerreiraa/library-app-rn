import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home'
import Categories from '../screens/section/[category]'
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
    </Navigator>
  )
}
