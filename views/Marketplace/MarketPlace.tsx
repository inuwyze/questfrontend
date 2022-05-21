import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image, StyleSheet, Text, View } from "react-native"
import ToggleButton from "../../components/ToggleButton"
import Card from "../../components/Card"
import { MockMarket } from "../../mock"
const MarketPlace:React.FC=()=>{
    const [userType, setuserType] = useState(false)
    return(
        <SafeAreaView
        style={styles.container}>
            <View
            style={{
            minWidth:'100%',
            padding:10,
            flexDirection:'row',
            // flex:1,
            justifyContent:'space-between',
            width:280}}>
            <Text
            style={{fontSize:25,fontWeight:'bold'}}>Market Place</Text>
            <ToggleButton
            toggleValue={userType}
            toggleFn={setuserType}
            text={userType?'seller':'customer'}
            />
                
            
            </View>
            <View
            style={{
                flex:1,
                flexDirection:'row',
                flexWrap:"wrap"
            }}>

            {MockMarket.map((item,ind)=><Card key={ind}>
                <View
                style={{
                    borderWidth:1,
                    padding:10,
                    alignItems:'center',
                    backgroundColor:'white',
                    borderRadius:15,
                    borderColor:'lightgrey'
                }}>
                    <Image
                     style={{
                        height:100,
                        width:100,
                        borderWidth:1,
                        // borderColor:'lightgrey'
                    }}
                    source={{uri:item.image}}/>

                    <View
                    style={{
                        // borderWidth:1,
                        width:'90%'
                    }}>
                        <Text
                        style={{
                            // fontSize:20,
                            // width:'90%',
                            color:'grey',
                            fontWeight:'bold'
                            }}>{item.name}</Text>
                            <Text
                            style={{
                                // borderWidth:1,
                                fontSize:17,
                                textAlignVertical:'center',
                                fontWeight:'bold'
                            }}>
                                {item.price}
                            </Text>
                        <Text>{item.seller}</Text>
                    </View>
            
                </View>
            </Card>)}
        </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F9E72D',
        flex:1,
        paddingHorizontal:20,
        // alignItems:"center",
    }
})
export default MarketPlace