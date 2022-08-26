import { ActionTypes } from "../constants/action-types";
export const ADDTASK=(task)=>{
    return {
        type:ActionTypes.ADD_TASK,
        payload:task
    }
}
export const COMPlETETASK=(id)=>{
    return {
        type:ActionTypes.CHANGE_TASK_STATUS,
        payload:id
    }
}
export const REMOVETASK=(id)=>{
    return {
        type:ActionTypes.REMOVE_TASK,
        payload:id
    }
}
export const SHOWACTIVE=()=>{
    return {
        type:ActionTypes.SHOW_ACTIVE
    }
}
export const COMPLETEDTASK=()=>{
    return {
        type:ActionTypes.SHOW_COMPLETED
    }
}
