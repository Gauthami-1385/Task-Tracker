import React, { useEffect, useState } from "react";
import Progress from "../Progress/Progress";
import "./TaskController.css";
function TaskController({ data, start, setStart }) {
  let [time, setTime] = useState(0);

  const sum = data.reduce((acc, current) => acc + Number(current.seconds), 0);
  let accumulator = 0;

  useEffect(() => {
    let intervalId = null;
    if (start) {
      intervalId =
        !intervalId &&
        setInterval(() => {
          setTime((prevTime) => {
            const currentTime = prevTime + 1;
            console.log(prevTime);

            if (currentTime >= sum) {
              clearInterval(intervalId);
            }
            return currentTime;
          });
        }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [start, sum]);

  return (
    <div className="controller-container">
      <div className="rel width-100">
        <progress className="progress-line " value={time} max={sum} />
        {data.map((data, i) => {
          accumulator += Number(data.seconds);
          return (
            <Progress
              accumulator={accumulator}
              name={data.taskName}
              time={data.seconds}
              sum={sum}
              currentTime={time}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskController;
