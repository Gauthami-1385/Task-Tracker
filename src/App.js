import "./App.css";
import TaskList from "./Components/TaskList/TaskList";
import AddTask from "./Components/AddTask/AddTask";
import TaskController from "./Components/TaskController/TaskController";
import { useEffect, useState } from "react";
function App() {
  const [start, setStart] = useState(false);

  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("task")) || [];
  });
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(list));
  }, [list]);
  const startTimer = () => {
    setStart(true);
  };
  const clearList = () => {
    setList([]);
  };
  return (
    <div className="App">
      <h1 className="appheading">TASK-TRACKER</h1>
      <div className="functionality">
        <AddTask data={list} setList={setList} />
        <TaskList data={list} clearList={clearList} />
      </div>
      <TaskController
        list={list}
        startTimer={startTimer}
        start={start}
        setStart={setStart}
      />
    </div>
  );
}

export default App;
/* 
sum include 
media query----------------done
reset button
clear position change */
