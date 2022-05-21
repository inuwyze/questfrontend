import { IQuestState,IQuestReducer } from "./StateTypes"
const QuestReducer:React.Reducer<IQuestState,IQuestReducer>=(state,action)=>{
    switch(action.type){
        case 'SetLoginStatus':
            return {
                ...state,
                loginStatus:!state.loginStatus
            }
        case 'SetUserNumber':
            return {
                ...state,
                userNumber:action.payload
            }
        default:
            return state
    }
}
export default QuestReducer