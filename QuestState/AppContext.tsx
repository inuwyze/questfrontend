import { createContext } from "react";
import { initialQuestState, QuestContextType } from "./StateTypes";


const QuestContext=createContext<QuestContextType>(initialQuestState)

export default QuestContext