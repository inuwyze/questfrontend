import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

import { INav } from '../../types/QuestTypes'
import { useFocusEffect } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TileBubble from '../../components/TileBubble'
import MyQuestTileBubble from '../../components/MyQuestTileBubble'





export const MyQuests:React.FC<INav>=({navigation})=> {
    const [myQuests, setmyQuests] = useState<any[]>([])
    const fetchMyQuests=async()=>{
        const res=await fetch('http://10.0.2.2:3000/getMyQuests?acceptor=Paul')
        setmyQuests((await res.json()).Items)
    }

    useFocusEffect(React.useCallback(()=>{
        fetchMyQuests()
    },[]))
    return (
    <SafeAreaView
    style={{
        flex:1,
        borderLeftWidth:2,
        backgroundColor:'#F9E72D',
        paddingHorizontal:20
        
    }}>
        <Text
            style={{
                fontSize:30,
                fontWeight:'bold',
                paddingBottom: 10,
                paddingHorizontal: 25,
                }}>My Quests</Text>
        {myQuests.map((q,ind)=>
        <Pressable        
        key={ind}>
            <TileBubble
            >
                <MyQuestTileBubble
                {...q}
                navigation={navigation}/>
            </TileBubble>
        </Pressable>
        )}
    </SafeAreaView>
  )
}