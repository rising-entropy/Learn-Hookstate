import React from 'react'
import useGlobalState from '../store/globalStates';
import Task from './Task';

export default function AllTasks() {

    const state = useGlobalState();
    let theTasks = state.getAllTasks();

    const allTheTasks = []

    for(let i=0; i<theTasks.length; i++)
    {
        allTheTasks.push(<Task key={i} task={theTasks[i]} />);
    }


    return (
        <div className='row'>
            <div className="container container-fluid">
                {allTheTasks.map(e => e)}
            </div>
        </div>
    )
}
