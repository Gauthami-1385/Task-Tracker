import React from "react";
import "./TaskList.css";
function TaskList() {
  return (
    <div className="tasklist-container">
      <h1 >TASK LIST</h1>
      <div className="list-container">
        <div className="listcontent">
          <p>
            Add tomato sause <span style={{ tabSize: "4" }}></span>50s
          </p>
        </div>
        <div className="listcontent">
          <p>
            Add tomato sause <span style={{ tabSize: "4" }}></span>50s
          </p>
        </div>
        <div className="listcontent">
          <p>
            Add tomato sause <span style={{ tabSize: "4" }}></span>50s
          </p>
        </div>
        <div className="listcontent">
          <p>
            Add tomato sause <span style={{ tabSize: "4" }}></span>50s
          </p>
        </div>
      </div>
      <div className="start">
        <button className="startbutton">Start</button>
      </div>
    </div>
  );
}

export default TaskList;
