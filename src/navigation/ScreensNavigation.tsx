import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

type Props = {}

const Stack = createNativeStackNavigator();

const ScreensNavigation = (props: Props) => {

  return (
    // <NavigationContainer>
    //       {/* <RootNavigator /> */}

    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}>
    //     <Stack.Screen name="Welcome" component={WelcomeScreen} />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="Register" component={RegisterScreen} />
    //     <Stack.Screen name="Register" component={RegisterScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
   
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={WelcomeScreen} />
      </Stack.Navigator>
  );
}

export default ScreensNavigation

function RootNavigator() {

  return (
    <></>
  );
}