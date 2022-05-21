import React from "react"
import { View, Text, Image, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { MockChat } from "../../mock"
import { INav } from "../../types/QuestTypes"

interface ITile{
    image:string,
    name:string,
    text:string
}
const Tile=({image,name,text}:ITile)=>{
    return(
        <View
        style={{
            paddingHorizontal:10,
            flexDirection:'row',
            height:100,
            alignItems:'center',
            borderBottomWidth:1,
            borderBottomColor:'grey'
        }}>
            <Image
        style={{
            height:75,
            width:75,
            borderRadius:50,
            marginEnd:20,
        }}
        source={{uri: image
    }}
      />
            <View>
            <Text
            style={{
                fontSize:20,
                fontWeight:'bold'
            }}>{name}</Text>
            <Text>{text}</Text>
            </View>
        </View>
    )
}


const Chat:React.FC<INav>=({navigation})=>{
    return(
        <SafeAreaView
        style={{
            backgroundColor:'white',
            flex:1,
        }}>
            <Text
            style={{
                marginLeft:40,
                fontSize:28,
                fontWeight:'bold',
                marginBottom:10
                
            }}>
                Chat
            </Text>
            {
                MockChat.map((mc)=>
                <Pressable
                key={mc.name}
                onPress={()=>navigation.navigate('ChatPage',{id:mc.name,text:mc.text,image:mc.image,number:mc.number})}>
                <Tile  {...mc}/>
                </Pressable>
                )
            }
            
        </SafeAreaView>
    )
}

export default Chat