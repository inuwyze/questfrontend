import { Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginPage from '../views/authentication/LoginPage'
import SignUpPage from '../views/authentication/SignUpPage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'


export type AuthStackParams={
    LoginPage:{ sort: 'latest' | 'top' };
    SignUpPage:undefined;
    
}

export type LoginPageParam=NativeStackScreenProps<AuthStackParams,'LoginPage'>

const AuthNavigator = () => {
    const AuthStack=createNativeStackNavigator<AuthStackParams>()
  return (
    <AuthStack.Navigator 
    initialRouteName='LoginPage'
    screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LoginPage" component={LoginPage}></AuthStack.Screen>
      <AuthStack.Screen name="SignUpPage" component={SignUpPage}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}

export default AuthNavigator