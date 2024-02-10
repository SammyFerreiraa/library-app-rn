import Routes from '@/routes'
import { NavigationContainer } from '@react-navigation/native'

export default function Layout() {
  return (
    <NavigationContainer independent={true}>
      <Routes />
    </NavigationContainer>
  )
}
