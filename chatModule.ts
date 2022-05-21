// import { UseQuestState } from "./QuestState/AppState"

export const socket=new WebSocket('ws://10.0.2.2:3001')
console.log('hello')
// const {userNumber}=UseQuestState()
socket.onopen=(e)=>{
    console.log('socket open')
    socket.send(JSON.stringify({
        action:'setUserId',
        userId:'8837093148',
        
    }))
}

export const sendText=(msg:string,receipientId:string)=>{
    console.log('send')
    console.log(msg)
    console.log(receipientId)
    let data={
        action:'send',
        message:msg,
        'receipientId':receipientId
    }
    socket.send(JSON.stringify(data))
}

