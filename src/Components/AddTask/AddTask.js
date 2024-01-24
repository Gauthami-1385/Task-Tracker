import React, { useState } from "react";
import "./AddTask.css";
function AddTask() {
  const initialValue = { taskName: "", seconds: "" };
  const [entry, setEntry] = useState(initialValue);
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };
  const handleAdd = () => {
    setList([...list, entry]);
    setEntry(initialValue);
  };
  return (
    <div className="addTask-container">
      <h1>ADD TASK</h1>
      <div className="inputs">
        <label htmlFor="taskName">Task Name: </label>
        <input
          type="text"
          name="taskName"
          value={entry.taskName}
          placeholder="What's your task...."
          onChange={handleChange}
        />
        <label htmlFor="seconds">Time:</label>
        <input
          type="text"
          name="seconds"
          id=""
          onChange={handleChange}
          value={entry.seconds}
          placeholder="How many seconds do you need...."
        />
      </div>
      <div className="button-div">
        <button className="AddButton" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTask;
