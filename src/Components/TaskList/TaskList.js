import React from "react";
import "./TaskList.css";
function TaskList({ data,clearList}) {
  const display = () => {
    return data.map((data, i) => {
      return (
        <div key={i} className="listcontent">
          <p>
            {data.taskName} {data.seconds}
          </p>
        </div>
      );
    });
  };
  return (
    <div className="tasklist-container">
      <h1>TASK LIST</h1>
      <div className="list-container">{display()}</div>
      <div className="start">
        <button className="clearbutton" onClick={clearList}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default TaskList;
