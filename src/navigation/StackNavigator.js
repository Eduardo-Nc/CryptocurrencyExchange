import React from 'react'

//Constants
import styles from './styles';

//Routes
import {
  Home,
  Send,
  Buy
} from '../screens';


//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerBackTitle: "",
          headerTintColor: "white",
          headerShown: true,
          gestureEnabled: true,
          presentation: 'card',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >

        <Stack.Screen name="Home" options={{
          headerShown: false,
        }} component={Home} />


        <Stack.Screen name="Send" options={{
          headerShown: false,
        }} component={Send} />


        <Stack.Screen name="Buy" options={{
          headerShown: false,
        }} component={Buy} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator