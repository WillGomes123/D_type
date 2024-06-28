import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Input from '../Screens/Input';
import ChangeWord from '../Screens/ChangeWord';
import Welcome from '../Screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../Screens/Register';
import Data from '../Screens/Data';
const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer >
         <Stack.Navigator >
      
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />  
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      <Stack.Screen options={{headerShown: false}} name="Input" component={Input} />
      <Stack.Screen options={{headerShown: false}} name="ChangeWord" component={ChangeWord} />
      <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome} />
      <Stack.Screen options={{headerShown: false}} name="Data" component={Data} />      
      
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}