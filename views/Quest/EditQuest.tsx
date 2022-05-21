import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, View, TouchableOpacity} from 'react-native'
import NumberToggle from '../../components/numberToggle'
const EditQuest=(props:any)=>{
  
    const [title, settitle] = useState('')
    
    const [description, setdescription] = useState('')
    const [tagInput, setTagInput] = useState('')
    const [expDays, setExpDays] = useState<number>(0)
    const [created, setCreated] = useState<number>(0)
    const [tags, setTags] = useState<Set<string>>(new Set<string>())
    
    useFocusEffect(React.useCallback(()=>{
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
        setCreated(Item.created)
        setTags(()=>new Set(Item.tags))
    }
    getQuest()
    },[]))

    const addTag=()=>{
        setTagInput('')
        if(tagInput.trim()==='')
            return
        console.log(tagInput.split(' '))
        tagInput.split(' ').forEach((t)=>
        setTags(()=>new Set(tags.add(t)))
        )
    }

    const removeTag=(selectedTag:string)=>{
        setTags(prev => new Set([...prev].filter(x => x !== selectedTag)))
    }

    const postQuest=()=>{

        const creator='Paul'
        console.log(tags)
        fetch('http://10.0.2.2:3000/editQuest',{
            method:'POST',
            body:JSON.stringify({
                id:props.route.params.id,
                title:title,
                description:description,
                tags:[...tags],
                expDays:expDays,
                created:created,
                creator:creator
            })
        }).then(response => response.json())
        .then(data => console.log(data));
        props.navigation.navigate('TabStack','Create')
        // props.navigation.navigate('TabStack','Board')
    }

    
    return(
        <SafeAreaView
        style={styles.container}>
            <Text
            style={{fontSize:30,fontWeight:'bold',marginVertical:20}}>Edit Quest</Text>
            <TextInput
            placeholder="Title"
            onChangeText={settitle}
            style={[styles.input,styles.shadowStyle]}
            
            value={title}
            />
            <TextInput
            multiline
            editable
            numberOfLines={5}
            placeholder="Description"
            onChangeText={setdescription}
            style={[styles.input,styles.shadowStyle,{textAlignVertical:'top'}]}
            value={description}
            />
            <NumberToggle
            number={expDays}
            setNumber={setExpDays}
            />
            <View
            style={[styles.tagInput]}>

            <TextInput
            placeholder="Tag"
            onChangeText={setTagInput}
            style={[styles.input,styles.shadowStyle,{flex:4,margin:0}]}
            value={tagInput}
            />
           <TouchableOpacity   
            style={[styles.button,styles.shadowStyle]}        
            onPress={addTag}
            >
                <Text
                style={{color:'white',fontSize:24}}>+</Text>
            </TouchableOpacity>
            </View>
            <View
            style={[styles.tagInput]}>
                {[...tags].map((tag,index)=><View key={index} style={[styles.tags,styles.shadowStyle]}>
                    <Text
                    onPress={()=>removeTag(tag)}>{tag}</Text></View>)}
            </View>

            <TouchableOpacity
            style={[styles.button,{width:280,flex:0,padding:15,marginTop:40}]}
            onPress={postQuest}
            >
                <Text
                style={{color:'white'}}>DONE</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F9E72D',
        flex:1,
        alignItems:'center'
    },
    button:{
        backgroundColor:'black',
        flex:1,
        marginLeft:8,
        borderRadius:10,
        borderColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
    },
    input: {
        // height: 50,
        width:280,
        
        margin: 12,
        backgroundColor:'white',
        padding: 10,
        paddingLeft:20,
        borderRadius:10,
        borderColor:'orange',
        borderWidth:1,
        
  
      },
      shadowStyle:{
        
        elevation:10,
        
    },
    tagInput:{
        flexDirection:"row",
        width:280,
        margin: 12,
    },
    tags:{
        backgroundColor:'white',
        borderRadius:10,
        padding:7,
        marginEnd:5,
        borderWidth:1,
        borderColor:'orange',
    }
})
export default EditQuest
