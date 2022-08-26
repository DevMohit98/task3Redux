import {combineReducers} from "redux"
import  {taskReducer}  from "./taskReducer";
 const reducer=combineReducers({
    allTask:taskReducer
})
export default reducer