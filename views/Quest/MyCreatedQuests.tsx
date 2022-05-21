import { View, Text, Pressable, Modal, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { INav } from '../../types/QuestTypes';
import ToggleButton from '../../components/ToggleButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import TileBubble from '../../components/TileBubble';


 const MyCreatedQuests:React.FC<INav>=({navigation})=> {
    const [Quests, setQuests] = useState<Array<any>>([])
    const [modalVisible, setModalVisible] = useState(false);
    const [currentQuest, setcurrentQuest] = useState<any>({});
 


    useFocusEffect( React.useCallback(()=>{
        try{

            let fetchAll=async()=>{
                let res=await fetch('http://10.0.2.2:3000/getMyCreatedQuests?creator=Paul',{
            method:'GET',

            
        })
        // console.log((await res.json()))
        console.log('mycreateEffect')
        const quests=(await res.json()).Items
        setQuests(()=>quests)
        // console.log(Quests)
        
    }
    fetchAll()
    }catch(err){
        console.error(err)
    }},[])
    )
    const setQuestStatus=async()=>{
        try {
            await fetch('http://10.0.2.2:3000/setQuestStatus',{
                method:'POST',
                body:JSON.stringify({
                    id:currentQuest.id,
                    completed:currentQuest.completed
                })
            })
        } catch (error) {
            console.error(error)
        }
    }

    const ToggleComplete=()=>{
        setQuests(Quests.map((q)=>{
            if(q.id===currentQuest.id)
            q['completed']=!q['completed']
            setQuestStatus()
            return q

        }))
    }

    return (
    <SafeAreaView
    style={{
        flex:1,
        backgroundColor:'#F9E72D',
        borderLeftWidth:1,
        paddingHorizontal:20,
    }}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Have you completed the Quest</Text>
            <Text
            style={{
                fontSize:20,
                fontWeight:'bold'
            }}>{currentQuest.title} ?</Text>
            <View
            style={{flexDirection:'row'}}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                ToggleComplete()  
                setModalVisible(!modalVisible)
            }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
              </View>
          </View>
        </View>
        </Modal>

        <Text
        style={{
            fontSize:25,
            fontWeight:'bold',
            padding:10
        }}>MY CREATED QUESTS</Text>

        {Quests.map((T,ind)=>{
        return(
        <Pressable
        key={ind}
        onPress={()=>navigation.navigate('EditQuest',{
            id:T.id
        })}>
        <TileBubble>

        <View key={ind}
        style={{    
            flexDirection:'row',
            // borderBottomWidth:1,
            // padding:20,
            backgroundColor:'white',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <Text >{T.title}</Text>
            {/* <Text >{T.id}</Text> */}
            
            <ToggleButton 
            toggleValue={T.completed} toggleFn={()=>{
                setcurrentQuest(()=>T)
                setModalVisible(!modalVisible)
            }}
            text={T.completed?'completed':'not completed'}/>
       </View>
        </TileBubble>
        </Pressable>
        )
        }
        )}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:70,
    margin:15

  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
export default MyCreatedQuests