import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Text,StyleSheet,TextInput,View, TouchableOpacity} from "react-native"
import { NavigationHelpersContext } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParams } from '../../navigation/AuthNavigator'
export interface SignUpPageProps{
    navigation:NativeStackNavigationProp<AuthStackParams,'SignUpPage'>
}

const SignUpPage:React.FC<SignUpPageProps>=({navigation})=>{
    const [name, setName] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [address, setAddress] = useState('')

    return(
        <View
        style={styles.container}>
            <Text    
            style={{
                fontFamily:"PirataOne-Regular",
                fontSize:75,
                fontWeight:"900",
                marginBottom:25,
                color:'#6b1900'
            }}>Sign Up</Text>
            <TextInput
            placeholder="Username"
            style={[styles.input,styles.shadowStyle]}
            maxLength={16}
            onChangeText={setName}
            value={name}
            />
            <TextInput
            placeholder="Phone Number"
            keyboardType="number-pad"
            style={[styles.input,styles.shadowStyle]}
            maxLength={10}
            onChangeText={setPhoneNumber}
            value={PhoneNumber}
            />
            <TextInput
            placeholder="E-mail"
            style={[styles.input,styles.shadowStyle]}
            // maxLength={10}
            onChangeText={setEmail}
            value={email}
            />
            <View
            style={{display:'flex',flexDirection:'row',width:280}}>
            <TextInput
            placeholder="dd"
            maxLength={2}
            keyboardType="number-pad"
            textAlign='center'
            style={[styles.input,styles.shadowStyle,{flex:1,marginStart:0}]}
            onChangeText={setDay}
            value={day}
            />
            <TextInput
            placeholder="mm"
            maxLength={2}
            keyboardType="number-pad"
            textAlign='center'
            style={[styles.input,styles.shadowStyle,{flex:1,marginHorizontal:8}]}
            onChangeText={setMonth}
            value={month}
            />
            <TextInput
            placeholder="yyyy"
            maxLength={4}
            keyboardType="number-pad"
            textAlign='center'
            style={[styles.input,styles.shadowStyle,{flex:1,marginEnd:0}]}
            onChangeText={setYear}
            value={year}
            />
            </View>
            <TextInput
            placeholder="Address"
            style={[styles.input,styles.shadowStyle,{height:'auto'}]}
            // maxLength={10}
            multiline
            editable
            numberOfLines={4}
            onChangeText={setAddress}
            value={address}
            />
            <TouchableOpacity
            style={[styles.button,styles.shadowStyle]}  
            onPress={()=>navigation.navigate('LoginPage')}>
                <Text
                style={{fontWeight:"bold",textAlign:"center",color:'white',borderRadius:10}}>REGISTER</Text>
            </TouchableOpacity>
        </View>

    )
}
export default SignUpPage

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