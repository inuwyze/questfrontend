import React from "react"
import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native"

interface IProps {
    number: number;
    setNumber:  React.Dispatch<React.SetStateAction<number>> ;
  }
const NumberToggle:React.FC<IProps>=({number,setNumber})=>{
    // const [number, setNumber] = useState(1)
    
    const increment=(inc:number)=>{
        setNumber(number+inc)
    }
    const decrement=()=>{
        if(number===0)
            return
        setNumber(number-1)
    }
    
    return(
        <View
        style={{flexDirection:"row",width:280}}>
            <TouchableOpacity
                onPress={decrement}
                style={[styles.button,{marginRight:8}]}
            >
                <Text 
                style={{color:'white',fontSize:24}}>-</Text>
            </TouchableOpacity>

            <TextInput
            keyboardType="number-pad"
            onChangeText={(t)=>setNumber(parseInt(t))}
            value={''+number}
            style={[styles.input]}/>
            
            
            <TouchableOpacity
                onPress={()=>increment(1)}
                onLongPress={()=>increment(10)}
                style={[styles.button,{marginLeft:8}]}
            >
                <Text
                style={{color:'white',fontSize:24}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        flex:3,
        width:280,
        backgroundColor:'white',
        padding: 10,
        borderRadius:10,
        borderColor:'orange',
        borderWidth:1,
        textAlign:'center'
    },
    button:{
        backgroundColor:'black',
        flex:1,
        // marginHorizontal:4,
        borderRadius:10,
        borderColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
    }
})

export default NumberToggle