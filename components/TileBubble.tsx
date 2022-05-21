import React, { PropsWithChildren, ReactNode } from "react"
import { View, Text, StyleSheet } from "react-native"
import { ITileBubbleProp } from "../types/QuestTypes"

const TileBubble:React.FC<PropsWithChildren<ReactNode>>=({children})=>{
    return(
        <View
        style={styles.container}>
            {children}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{    
        
        borderColor:'black',
        borderBottomWidth:4,
        borderRightWidth:4,
        padding:20,
        borderRadius:10,
        marginVertical:10,
        elevation:10,
       
        backgroundColor:'white'
    },

})

export default TileBubble