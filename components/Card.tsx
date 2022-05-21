import React, { PropsWithChildren, ReactNode } from "react"
import { View } from "react-native"

const Card:React.FC<PropsWithChildren<ReactNode>>=({children})=>{
    return(
        <View
        style={{
            padding:5,
            // elevation:10,
            // flex:2
            width:'50%',
            marginHorizontal:'auto',
            // borderWidth:1,
            justifyContent:'center',
            alignContent:'center'
        }}>
            {children}
        </View>
    )
}
export default Card