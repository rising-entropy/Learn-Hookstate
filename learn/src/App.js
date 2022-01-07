import logo from './logo.svg';
import './App.css';
import AllTasks from './components/AllTasks';
import NewTask from './components/NewTask';

function App() {
  return (
    <div className="App">
      <h3>To-Do List</h3>
      <br />
      <div className="container container-fluid"> 
        <NewTask/>
        <AllTasks/>
      </div>
    </div>
  );
}

export default App;
