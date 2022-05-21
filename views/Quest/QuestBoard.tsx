import { useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react"
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import TileBubble from "../../components/TileBubble";
import {MockQuests} from "../../mock";
import { INav } from "../../types/QuestTypes";

interface IQuestNotice {
    id:string,
    title: string;
    expDays:number;
    tags:string[];
    
  }

const QuestNotice:React.FC<IQuestNotice>=({title,expDays,tags})=>{
    return(
        <View
        >
            <View
            style={{flexDirection:"row",justifyContent:'space-between'}}>
            <Text
            style={{fontSize:16,fontWeight:'bold'}}>{title}</Text>
            <Text
            style={{color:'red',fontWeight:'bold'}}>{expDays}</Text>
            </View>
            <View
            style={{flexDirection:"row"}}>
            {tags.slice(0,5).map((t,ind)=>{
                return(
                    <View
                    key={ind}
                    style={styles.tag}>
                        <Text>
                            {t}
                        </Text>
                    </View>
                )
            })}
            </View>
            
        </View>
    )
}


export const QuestBoard:React.FC<INav>=({navigation})=>{
    
    const [toggle, settoggle] = useState(true)
    const [Quests, setQuests] = useState<any[]>([])
    const fetchAllQuests=async()=>{
        const res=await fetch('http://10.0.2.2:3000/getAllQuests',{
            method:'GET'
        })
        const quests=(await res.json()).Items
        setQuests(()=>quests)
    }
    useFocusEffect(React.useCallback(()=>{
        fetchAllQuests()
    },[]))

    return(
        <SafeAreaView
        style={styles.container}>
            <View
            style={{
                flexDirection:'row',justifyContent:'space-between',marginVertical:15}}>
            <Text
            style={{fontSize:30,fontWeight:'bold'}}>Board</Text>
            <Pressable
            onPress={()=>settoggle(!toggle)}
            style={{padding:10,backgroundColor:toggle?'black':'white'}}>
                <Text
                style={{color:toggle?'white':'black'}}>
                {toggle?'PUBLIC':'FRIENDS'}
                </Text>
            </Pressable>
            </View >
        {Quests.map((props,index)=>
        <Pressable
        key={index}
        onPress={()=>{navigation.navigate('QuestPage',{id:props.id})}}>
            <TileBubble>
                <QuestNotice {...props}/>
            </TileBubble>
        </Pressable>
        )}
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F9E72D',
        flex:1,
        // flexDirection:"column",
        // justifyContent:"center",
        // alignItems:"center",
        paddingHorizontal:20,
        // borderWidth:2
    },
    
    tag:{
        padding:3,
        marginEnd:10,
        borderWidth:1,
        borderRadius:4
    }
})