import React, {useState} from 'react'
import useGlobalState from '../store/globalStates';


export default function Task(props) {

    const state = useGlobalState();

    const [task, setTask] = useState("");
    const [status, setStatus] = useState("");

    const statusChangeHandler = (e) => {
        setStatus(e.target.value);
        document.getElementById(`status${props.task.id}`).value = e.target.value
        state.updateTaskStatus(props.task.id, e.target.value)
    }

    const taskChangeHandler = (e) => {
        setTask(e.target.value);
        document.getElementById(`task${props.task.id}`).value = e.target.value
        state.updateTaskName(props.task.id, e.target.value)
    }

    const deleteTaskHandler = () => {
        state.deleteTask(props.task.id)
    }

    let theBorderColor;

    if(props.task.status === 'Incomplete')
    {
        theBorderColor = "#FF9999"
    }
    else if(props.task.status === 'Complete')
    {
        theBorderColor = "#17D7A0"
    }
    else
    {
        theBorderColor = "#F3ED9E"
    }

    return (
        <div className='row' style={{margin: '25px auto'}}>
            <div style={{padding: '5px', borderWidth: '2px', borderColor: theBorderColor, backgroundColor: theBorderColor}}>
                <input type="text" onChange={taskChangeHandler} name={`task${props.task.id}`} id={`task${props.task.id}`} defaultValue={props.task.task} />&nbsp;&nbsp;&nbsp;
                <select name="status" onChange={statusChangeHandler} defaultValue={props.task.status} id={`status${props.task.id}`}>
                    <option value="Incomplete">Incomplete</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Complete">Complete</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                <button className='btn btn-danger' onClick={deleteTaskHandler} >Delete</button>
            </div>
        </div>
    )
}
