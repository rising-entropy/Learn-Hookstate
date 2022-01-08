import { createState, none, useState} from '@hookstate/core'
const store = createState({
    tasks: [
        {
            id: 1,
            task: "Learn Hookstate",
            status: "In Progress"
        }
    ]
});
const useGlobalState = () => {
  const state = useState(store);
 return ({
  getAllTasks: () => state.tasks.get(),
  updateTaskStatus: (id, newStatus) => {
    for(let i=0; i<state.value.tasks.length; i++)
    {
        if(state.value.tasks[i].id === id)
        {
            state.tasks[i].status.set(newStatus);
        }
    }
    return;
  },
  addNewTask: (task, status) => {
    let theNewTask = {
        id: state.tasks.length+1,
        task: task,
        status: status
    }
    state.tasks.merge([theNewTask])
    return;
  },
  updateTaskName: (id, newTask) => {

    for(let i=0; i<state.value.tasks.length; i++)
    {
        if(state.value.tasks[i].id === id)
        {
            state.tasks[i].task.set(newTask);
        }
    }
    return;
  },
  deleteTask: (id) => {
    for(let i=0; i<state.value.tasks.length; i++)
    {
        if(state.value.tasks[i].id === id)
        {
            state.tasks[i].set(none);
        }
    }
  },
  getSpecificTask: (id) => {
    for(let i=0; i<state.value.tasks.length; i++)
    {
        if(state.value.tasks[i].id === id)
        {
           return state.tasks[i].get();
        }
    }
  }
});
}

export default useGlobalState;
