import React from 'react'
import { useState } from 'react';
import useGlobalState from '../store/globalStates';

// Incomplete, In Progress, Complete

export default function NewTask() {

    const state = useGlobalState();

    const [task, setTask] = useState("");

    const newTaskForm = (e) => {
        e.preventDefault();
        state.addNewTask(task, "Incomplete")
        console.log(state.getAllTasks())
        document.getElementById('newTask').value = "";
        setTask("");
    }

    const taskHandler = (e) => {
        setTask(e.target.value)
    }


    return (
        <div className='row'>
            <form onSubmit={newTaskForm}>
                <input onChange={taskHandler} type="text" name="task" id="newTask" required />&nbsp;&nbsp;&nbsp;
                <button className='btn btn-success' type="submit">Add</button>
            </form>
        </div>
    )
}
