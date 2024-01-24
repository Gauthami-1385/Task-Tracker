import "./App.css";
import TaskList from "./Components/TaskList/TaskList";
import AddTask from "./Components/AddTask/AddTask";
import TaskController from "./Components/TaskController/TaskController";

function App() {
  return (
    <div className="App">
      <h1 style={{ margin: "0", padding: "0" }}>Task-Tracker</h1>
      <div className="functionality">
        <AddTask />
        <TaskList />
      </div>
      <TaskController />
    </div>
  );
}

export default App;
