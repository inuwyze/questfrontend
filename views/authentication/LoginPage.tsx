import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import React from "react"
import { useFonts } from "expo-font"
import {SafeAreaView,Text,TextInput,StyleSheet, TouchableOpacity} from 'react-native'


import { AuthStackParams } from "../../navigation/AuthNavigator"
import { QuestLogin } from "./Aws_Auth"
import { UseQuestState } from "../../QuestState/AppState"
export interface LoginProps{
    navigation:NativeStackNavigationProp<AuthStackParams,'LoginPage'>
}




const LoginPage:React.FC<LoginProps>=({navigation})=>{
    const {setLoginStatus,setUserNumber}=UseQuestState()
    const [loaded] = useFonts({
        "PirataOne-Regular": require('../../assets/fonts/PirataOne-Regular.ttf'),
      });
    
    const [PhoneNumber, onPhoneNumber] = React.useState("");
    const [Password, onPassword] = React.useState("");
    
      const Login=async()=>{
        if(PhoneNumber.length<10)
            console.log('enter phone number')
        else if(Password.length<4)
            console.log('enter valid password')
        else{
            // if(await QuestLogin('+91'+PhoneNumber,Password))
            // {
                setLoginStatus()
                setUserNumber(PhoneNumber)
            // }
        }

        
    }
    const goToSignUp=()=>{
        navigation.navigate('SignUpPage')
    }


    if (!loaded) {
        return (
       null)
      }

    return (
        <SafeAreaView
        style={styles.container}
        >
            <Text
            style={{
                fontFamily:"PirataOne-Regular",
                fontSize:75,
                fontWeight:"900",
                marginBottom:25,
                color:'#6b1900'
            }}>
                QUEST
            </Text>
            <TextInput
            placeholder="Phone Number"
            keyboardType="number-pad"
            style={[styles.input,styles.shadowStyle]}
            onChangeText={onPhoneNumber}
            value={PhoneNumber}
            />
            <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={[styles.input,styles.shadowStyle]}
            onChangeText={onPassword}
            value={Password}
            />
            <TouchableOpacity
            
            onPress={Login}
            
            style={[styles.button,styles.shadowStyle]}
            
            >
                <Text
                style={
                    {fontWeight:"bold",textAlign:"center",color:'white',borderRadius:10}
                }>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            onPress={goToSignUp}
            
            style={[styles.button,styles.shadowStyle]}
            
            >
                <Text
                style={
                    {fontWeight:"bold",textAlign:"center",color:'white',borderRadius:10}
                }>NEW USER</Text>
            </TouchableOpacity>
            
            
            
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderColor:'black',
        borderWidth:2,
        backgroundColor:'#F9E72D',
        marginTop:-100
    },
    input: {
      height: 50,
      width:280,
      margin: 12,
      backgroundColor:'white',
      padding: 15,
      borderRadius:10,
      borderColor:'orange',
      borderWidth:1,

    },
    shadowStyle:{
        
        elevation:10,
        
    },
    button:{
        
        marginTop:20,
        backgroundColor:'#111111',
        borderRadius:10,
        width:280,
        height:50,
        padding:15,
        color:'white',
        overflow: 'hidden',
        borderColor:'orange',
        borderWidth:2,
    }
  });
  

export default LoginPage