import { useState } from "react"
import close from '../assets/close.png'

const Display = (props) => {

    const { taskList, setTaskList } = props
    console.log(taskList)

    const deleteTasks = (taskFromMap) => {
        setTaskList(taskList.filter(relatedTask => relatedTask !== taskFromMap))
    }

    const completeTasks = (singleTask) => {
        singleTask.completed = !singleTask.completed
        console.log(singleTask)
        setTaskList([...taskList])
    }

    return (
        <div id="sticky-notes">
            {taskList.map((singleTask, index) => {
                return (
                    <ul>
                        <img id="x" src={close} alt="delete" onClick={() => deleteTasks(singleTask)}/>
                        {singleTask.completed == true ?
                        <li style={{color: "red", textDecoration: "line-through"}} key={index}>{singleTask.task}</li>:
                        <li key={index}>{singleTask.task}</li>}
                        <input id="checked" type='checkbox' onChange={() => completeTasks(singleTask)}/>
                    </ul>
                )
            })}
        </div>
    )
}

export default Display