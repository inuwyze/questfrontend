import React, { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet, TextInput, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { sendText, socket } from "../../chatModule"
interface IChat{
    from:string,
    msg:string,
}
const ChatPage=(props:any)=>{
    const [text, settext] = useState('')
    const [texts, settexts] = useState<IChat[]>([])

    const addChat=(msg:string,from:string)=>{
        settexts((old)=>[...old,{from,msg}])
    }

    useEffect(()=>{
        socket.onmessage=(e)=>{
            const {message}=JSON.parse(e.data)
            addChat(message,'other')
            
        }

        return ()=>{
            console.log('cleanup')
            socket.onmessage=null
        }
    },[])

    return(
        <SafeAreaView
        style={{
            flex:1,
            backgroundColor:'#F9E72D',
            // paddingHorizontal:25
        }}>
            <View
            style={{
                
                flexDirection:'row',
                justifyContent:'space-between',
                borderBottomWidth:2,
                borderBottomColor:'gold',
                paddingBottom:10,
                paddingHorizontal:15,
                alignItems:'center'
            }}>
                <View
                style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                <Pressable
                onPress={()=>props.navigation.goBack()}
                style={{
                    transform: [
                        { scaleX: -1 },
                        {  scale:1.5}
                      ]
                }}>
                <Text
                >&#10140; </Text>
                </Pressable>
                <Image
                style={{
                    height:50,
                    width:50,
                    borderRadius:50,
                    marginHorizontal:20,
                    // borderColor:'brown',
                    // borderWidth:1,
                }}
                source={{uri:props.route.params.image
                }}
                />
                <Text
                style={{
                    fontSize:20,
                    fontWeight:'bold'
                }}>{props.route.params.id}</Text>
                </View>
                <Text
                style={{
                    fontStyle:'italic',
                    fontSize:20,
                    fontWeight:'bold',
                    borderWidth:1,
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    textAlign:"center",
                    textAlignVertical:"center",
                    // padding:10                    
                }}>i</Text>
            </View>


            <View
            style={{
                backgroundColor:'white',
                flex:1,
                padding:20,
                position:'relative'
            }}>

            <Text
            style={styles.bubble}>{props.route.params.text}</Text>
            {texts.map((t,ind)=>
                <Text
                key={ind}
                style={[styles.bubble,{alignSelf:t.from==='me'?'flex-end':'flex-start'}]}>
                    {t.msg}
                </Text>)}
            </View>


            <View
            style={{
                flexDirection:'row',
                padding: 15,
                backgroundColor:'white'
            }}>
                <TextInput
                placeholderTextColor='grey'
                placeholder="message ... "
                value={text}
                returnKeyType='send'
                onChangeText={settext}
                onSubmitEditing={()=>{
                    settexts((old)=>[...old,{from:'me',msg:text}])
                    sendText(text,props.route.params.number)
                    settext('')
                }}
                style={{
                    padding:10,
                    borderWidth:2,
                    flex:1,
                    borderRadius:5
                }}></TextInput>
            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    bubble:{
        backgroundColor:'#F9E72D',
        padding:10,
        borderRadius:12,
        marginVertical:5,
        alignSelf: 'flex-start'
    }
})
export default ChatPage