import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {COMPlETETASK,REMOVETASK} from "../Redux/actions/todo-action"
const TodoList=()=>{
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.allTask.task)
    const HandleCheck=(id)=>{
dispatch(COMPlETETASK(id))
    }
    const DeleteTask=(id)=>{
    dispatch(REMOVETASK(id))
    }
    return (
        <>
       {data.map((task,index)=>{
        const {id,item,status}=task;
        return (
            <div
            className="form-check d-flex justify-content-between align-items-center"
            key={index}
          >
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                checked={status}
                onChange={()=>HandleCheck(id)}
              />

              {status === false ? (
                <label className="form-check-label ">{item}</label>
              ) : (
                <label className="form-check-label completed ">
                  {item}
                </label>
              )}
            </div>
            {status === true ? (
              ""
            ) : (
              <div className="remove-icon">
                <i
                  className="fa-solid fa-xmark"
                  onClick={()=>DeleteTask(id)}
                ></i>
              </div>
            )}
          </div>
        )
       })}
        </>
    )
}
export default TodoList