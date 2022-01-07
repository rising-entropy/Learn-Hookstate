import React from 'react'
import useGlobalState from '../store/globalStates'

export default function AllTasks() {

    const states = useGlobalState();

    // console.log(states.getAllTasks())
    console.log(states.addNewTask("Hello", "There"))
    console.log(states.addNewTask("Hey", "There"))

    console.log(states.updateTaskName(1, "General"));
    console.log(states.updateTaskStatus(1, "Kenobi"))
    // console.log(states.getAllTasks())
    console.log(states.deleteTask(1))
    
    console.log(states.getAllTasks())


    return (
        <div>
            
        </div>
    )
}
