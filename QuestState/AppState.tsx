import React, { PropsWithChildren, ReactNode, useContext, useReducer } from 'react'
import { IQuestState,IQuestReducer,ActionType, initialQuestState } from './StateTypes'


import QuestContext from './AppContext'
import QuestReducer from './AppReducer'



const QuestStateProvider:React.FC=(props:PropsWithChildren<ReactNode>)=>{
    const [state,dispatch]=useReducer<React.Reducer<IQuestState,IQuestReducer>>(QuestReducer,initialQuestState)
  
    const setLoginStatus=()=>{
        console.log('setLoginStatus')
        dispatch({
            type:ActionType.SetLoginStatus
        })
    }
    const setUserNumber=(num:string)=>{
        console.log('setUserNumber')
        dispatch({
            type:ActionType.SetUserNumber,
            payload:num
        })
    }
    return (
        <QuestContext.Provider value={{...state,
        setLoginStatus,setUserNumber}}>
            {props.children}
        </QuestContext.Provider>
    )
}

const UseQuestState=()=>{
    const context=useContext(QuestContext)
    if(context===undefined)
        throw new Error('useState must be used within QuestContext')
    return context
}

export {QuestStateProvider,UseQuestState}