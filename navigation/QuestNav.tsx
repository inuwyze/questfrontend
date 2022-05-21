import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import createPage from '../views/Quest/createPage';
import MyCreatedQuests from '../views/Quest/MyCreatedQuests';
import { MyQuests } from '../views/Quest/MyQuests';

import { QuestBoard } from '../views/Quest/QuestBoard';


const QuestTab=createMaterialTopTabNavigator()
const MyQuestNav=()=>{
    
    
    return(
        <QuestTab.Navigator
        screenOptions={{
            tabBarStyle:{height:0}
        }}
        >
            <QuestTab.Screen name='QuestBoard' component={QuestBoard}></QuestTab.Screen>
            <QuestTab.Screen name='MyQuests' component={MyQuests}></QuestTab.Screen>
        </QuestTab.Navigator>
    )
}
const Tab=createMaterialTopTabNavigator()
const CreateQuestNav=()=>{
    
    
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{height:0}
        }}>
            <Tab.Screen name='createPage' component={createPage}></Tab.Screen>
            <QuestTab.Screen name='MyCreatedQuests' component={MyCreatedQuests}></QuestTab.Screen>
        </Tab.Navigator>
    )
}
export {MyQuestNav, CreateQuestNav}