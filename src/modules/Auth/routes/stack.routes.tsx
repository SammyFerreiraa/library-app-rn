import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens';
const { Navigator, Screen } = createNativeStackNavigator()

export default function AuthStack() {
  return (
  <Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
    <Screen name="SignIn" component={SignIn} />
  </Navigator>
  );
}
