import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {

    Board: undefined; //current screen
    Chat:undefined;
    ChatPage:{id:string,image:string,text?:string,number:string};

    Create: undefined; // a screen that we are 
    QuestPage: {id:string}; // a screen that we are 
    EditQuest: {id:string}; // a screen that we are 
 // navigating to, in the current screen,
 // that we should pass a prop named `slug` to it
 
    'Market Place':undefined;
 
// a screen that we are navigating to 
 // in the current screen, that we don't pass any props to it
 };

 type navigationProp = NativeStackNavigationProp<RootStackParamList,string>

export interface INav{
    navigation:navigationProp,
    props:any
}

export interface ITileBubbleProp{
    title:string,
    description:string,
    creator:string,
    completed:boolean,
    navigation:navigationProp
}

