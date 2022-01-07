import { createState, useState, none } from '@hookstate/core'
const store = createState({
    tasks: [
        {
            task: "Learn Hookstate",
            status: "In Progress"
        }
    ]
});
const useGlobalState = () => {
  const state = useState(store);
 return ({
  getAllTasks: () => state.value,
});
}
export default useGlobalState;
