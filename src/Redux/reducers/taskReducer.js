import { ActionTypes } from "../constants/action-types"

const initialState={
    task:[],
}

export const taskReducer=(state=initialState,action)=>{
    
    switch(action.type){
        case ActionTypes.ADD_TASK:
            return {...state,task:action.payload}
            case ActionTypes.CHANGE_TASK_STATUS:
               return {...state,task:state.task.map((item)=>{
                if(item.id===action.payload){
                    item.status=!item.status
                }
                return item
               })}
                case ActionTypes.REMOVE_TASK:
                    return{...state,task:state.task.filter((item)=>item.id!==action.payload)}
                    case ActionTypes.SHOW_ACTIVE:
                        return {task:state.task.filter((item)=>item.status===false)}
                        case ActionTypes.SHOW_COMPLETED:
                            return {task:state.task.filter((item)=>item.status===true)}
            default:
                return state
        }
        

}