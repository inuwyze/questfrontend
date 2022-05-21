export interface IQuestReducer{
    type:ActionType,
    payload?:any
}
export interface IQuestState{
    loginStatus:boolean,   
    userNumber?:string,   
}
export enum ActionType {
    SetLoginStatus = "SetLoginStatus",
    SetUserNumber = "SetUserNumber",

  }

export interface QuestContextType{
    loginStatus:boolean,
    userNumber?:string,  
    setLoginStatus:()=>void
    setUserNumber:(arg0:string)=>void
}
export const initialQuestState={
    loginStatus:false,
    setLoginStatus:()=>{}
}
