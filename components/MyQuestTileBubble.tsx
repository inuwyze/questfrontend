import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { ITileBubbleProp } from "../types/QuestTypes"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const MyQuestTileBubble:React.FC<ITileBubbleProp>=({title,description,creator,completed,navigation})=>{
    
    return(
        <View
        style={styles.container}>
        <View
        style={{flex:10}}>
            <Text
            style={styles.title}>
                {title}
            </Text>
            <Text>{creator}</Text>
            <Text>{description}</Text>
            {
                completed&&<View
                style={styles.completeStatus}>
                    <Text
                    
                    style={styles.completeStatusText}>
                        completed
                    </Text>

                </View>
            }
            </View>
            <View
            style={{
                flexDirection:'column',
                flex:1
            }}>
            <MaterialCommunityIcons name="chat" size={20} onPress={()=>navigation.navigate('ChatPage',{id:'rohan',text:'lets meet up',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V3C3qx89X6hSQZUNhi0QDhNWki6gD6B7Qg&usqp=CAU',number:"0987654324"})}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{    
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
    },
    completeStatus:{
        padding:4,
        alignSelf:'flex-start',
        borderWidth:1,
        borderColor:'green',
        marginTop:10,  
    },
    completeStatusText:{
        color:'green'
    }
})

export default MyQuestTileBubble