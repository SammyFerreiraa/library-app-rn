import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn, SignInPassword } from '../screens'
import SignUp from '../screens/signup'
const { Navigator, Screen } = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="SignIn"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignInPassword" component={SignInPassword} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  )
}
