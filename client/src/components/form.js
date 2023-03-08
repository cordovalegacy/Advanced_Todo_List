import { useState } from "react"

const Form = (props) => {

    const {taskList, setTaskList} = props
    const [oneTask, setOneTask] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setTaskList([...taskList, {task: oneTask, completed: false}])
        setOneTask("")
    }

    return(
        <form onSubmit={submitHandler}>
            <h1>What needs to get done today?</h1>
            <input type="text" placeholder="post ya notes!" value={oneTask} onChange={(e) => setOneTask(e.target.value)}/>
            <input type="submit" value="Post" />
        </form>
    )
}

export default Form