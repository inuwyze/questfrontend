import React from "react"
import { Pressable, Text } from "react-native";

interface IToggleButton{
    toggleValue:boolean,
    toggleFn: (arg:boolean)=>void,
    text:string,
}

const ToggleButton:React.FC<IToggleButton>=({toggleValue,toggleFn,text})=>{
    return(
        <Pressable
        style={{
            backgroundColor:toggleValue?'black':'white',
            padding:8,
            borderWidth:1,
            borderColor:'#6b1900'
        }}
        onPress={()=>toggleFn(!toggleValue)}
        >
            <Text
            style={{
                color:toggleValue?'white':'black'
            }}>
                {text}
            </Text>
        </Pressable>
    )
}
export default ToggleButton