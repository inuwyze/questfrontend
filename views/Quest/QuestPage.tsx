import { useFocusEffect } from "@react-navigation/native"
import React, { useState } from "react"
import { View, Text, Pressable } from "react-native"
import TileBubble from "../../components/TileBubble"

const QuestPage:React.FC<any>=(props)=>{
    const [title, settitle] = useState('')
    
    const [description, setdescription] = useState('')
    // const [tagInput, setTagInput] = useState('')
    const [expDays, setExpDays] = useState<number>(0)
    const [tags, setTags] = useState<Set<string>>(new Set<string>())
    
    const getQuest=async()=>{
    console.log('id')
    console.log(props.route.params.id)
    const id=props.route.params.id
    let res=await fetch('http://10.0.2.2:3000/getQuest?id='+id,{
        method:'GET'
    })
    // console.log(await res.json())
    const {Item}=await res.json()
    settitle(Item.title)
    setdescription(Item.description)
    setExpDays(Item.expDays)
    setTags(()=>Item.tags)
}
    useFocusEffect(React.useCallback(()=>{
    getQuest()
    },[]))


    const AcceptQuest=()=>{
        try{

            fetch('http://10.0.2.2:3000/acceptQuest',{
                method:'POST',
            body:JSON.stringify({
                id:props.route.params.id,
                acceptor:'Paul'
                
            })
        })
        props.navigation.navigate('TabStack','Board')
    }catch(err){
        console.log(err)
    }

    }
    return(
        <View
        style={
            {flex:1,
            backgroundColor:'#F9E72D',
            // alignItems:'center',
            paddingHorizontal:20,
            paddingTop:100,
        }
        }>
            <TileBubble>

            {/* <Text
            style={{fontSize:30}}>QuestPage</Text> */}
            <Text
            style={{
                fontSize:30,
                marginTop:20,
            }}
            >{title}</Text>
            <Text
            style={{
                marginTop:20,
            }}
            >{description}</Text>
            <Text
            >{expDays}</Text>
            <View
            style={{flexDirection:'row'}}>
            {[...tags].map((t)=><Text
            style={{
                padding:5,
                margin:5,
                borderWidth:1,
                borderColor:'grey',
                borderRadius:10,
            }}
            key={t}>{t}</Text>)}
            </View>

            <Pressable
            onPress={AcceptQuest}
            style={{
                
                backgroundColor:'black',
                borderRadius:10,
                borderWidth:2,
                padding:10,
                marginTop:30,
                alignItems:'center'
            }}><Text
            style={{color:'white'}}>ACCEPT</Text></Pressable>
            </TileBubble>
        </View>
    )
}
export default QuestPage