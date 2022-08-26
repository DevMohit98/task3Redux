import React, {  useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import "../App.css"
import TodoList from "./TodoList"
import { ADDTASK ,SHOWACTIVE,COMPLETEDTASK} from "../Redux/actions/todo-action"
const Todo=()=>{
  const dispatch=useDispatch();
  let data=useSelector((state)=>state.allTask.task);
  const [task,setTask]=useState("");
  const HandleKeyPress=(event)=>{
if(event.key === "Enter"){
const taskInfo={
  id:Math.random(),
  item:task,
  status:false
}
let addedTask=[...data,taskInfo];
dispatch(ADDTASK(addedTask))
setTask("");
}
  }

  const ActiveTask=()=>{
   dispatch(SHOWACTIVE())
  }
  const CompletedTask=()=>{
    dispatch(COMPLETEDTASK())
  }
  const ShowAllTask=()=>{}
    return (
        <>
       <div className="todo-bg d-flex justify-content-center align-items-center flex-column">
       <div className="todo-container p-3">
       <div className="mb-3">
       <div className="d-flex justify-content-center  AddTask">
       <input
                type="text"
                className="form-control"
                placeholder="what needs to be done"
                name="task"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                onKeyPress={HandleKeyPress}
              />
       </div>
       <hr />
      {data.length<=0 ? <h1 className="enter-task">No task added...</h1>: <TodoList/>} 
       <div className="d-flex justify-content-between align-items-center checkAll">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                />
                <label className="form-check-label">Check All</label>
              </div>
              <h1 className="count-task">No task....</h1>
            </div>
            <hr/>
       <div className="task-btn">
              <button className="btn btn-primary" onClick={ShowAllTask} >
                All
              </button>
              <button className="btn btn-primary mx-2" onClick={ActiveTask}>
                Active
              </button>
              <button className="btn btn-primary"onClick={CompletedTask}>
                Completed
              </button>
            </div>
       </div>
       </div>
       </div>
        </>
    )
}
export default Todo