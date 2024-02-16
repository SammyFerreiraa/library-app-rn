import { Home, Menu } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Octicons, Entypo } from '@expo/vector-icons'

const { Screen, Navigator } = createBottomTabNavigator()

export default function AppStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#313333',
          position: 'absolute',
          height: 68,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#848484',
        tabBarActiveBackgroundColor: '#000',
      }}
    >
      <Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Pesquisar"
        component={Menu}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="magnifying-glass" size={28} color={color} />
          ),
        }}
      />
      <Screen
        name="Biblioteca"
        component={Menu}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="book" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
