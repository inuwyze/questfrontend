import { Modal, Pressable, View,StyleSheet,Text, Alert, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UseQuestState } from '../QuestState/AppState'
// import {socket} from '../chatModule'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MarketPlace from '../views/Marketplace/MarketPlace'
import QuestPage from '../views/Quest/QuestPage'
import {MyQuestNav,CreateQuestNav} from './QuestNav'
import EditQuest from '../views/Quest/EditQuest'
import Chat from '../views/Chat/chat'
import ChatPage from '../views/Chat/ChatPage'
import { socket } from '../chatModule'
socket
const Tab = createBottomTabNavigator();

// interface IN

const Home=()=>{
    const {setLoginStatus}=UseQuestState()
    const [modalVisible,setModalVisible]=useState(false)
    return(
        <SafeAreaView
        style={styles.container}>
            <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            <Button
            title='CreateQuest'
            onPress={()=>setModalVisible(true)}>
                <Text>
                    ADD Quest
                </Text>
            </Button>
        </SafeAreaView>
    )
}


const TabStack=()=>{
    return(
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'brown',
            tabBarShowLabel:false,
        }}
        >
        <Tab.Screen name="MyQuest"
        options={{
            
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="sword-cross" color={color} size={size} />
              ),
        }} 
        component={MyQuestNav} />
        <Tab.Screen name="CreateQuest" 
        options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="auto-fix" color={color} size={size} />
                ),
        }} 
        component={CreateQuestNav} />
        <Tab.Screen name="Market Place" 
        options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="store" color={color} size={size} />
                ),
        }} 
        component={MarketPlace} />
        <Tab.Screen name="Chat" 
        options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chat" color={color} size={size} />
                ),
        }} 
        component={Chat} />
        </Tab.Navigator>
    )
}




const AppNavigator = () => {
    const AppStack=createNativeStackNavigator()
    return (
        <AppStack.Navigator
        screenOptions={{headerShown:false}}>
            <AppStack.Screen name='TabStack' component={TabStack}/>
            <AppStack.Screen name='QuestPage' component={QuestPage}/>
            <AppStack.Screen name='EditQuest' component={EditQuest}/>
            <AppStack.Screen name='ChatPage' component={ChatPage}/>
        </AppStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F9E72D',
        flex:1,
        // flexDirection:"column",
        // justifyContent:"center",
        alignItems:"center",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  


export default AppNavigator