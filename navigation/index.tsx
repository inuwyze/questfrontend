
import { NavigationContainer } from '@react-navigation/native';

import React, { useContext } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { UseQuestState} from '../QuestState/AppState'
import { createNativeStackNavigator } from '@react-navigation/native-stack';





const index = () => {
    
    const {loginStatus}= UseQuestState()
    
  return (
    <SafeAreaProvider 
    >
    
      <NavigationContainer>
      
      {loginStatus?
        <AppNavigator/>:
        <AuthNavigator/>
      }
      
      </NavigationContainer>
      
    </SafeAreaProvider>
  )
}

export default index