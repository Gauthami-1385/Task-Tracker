import React, { useEffect, useState } from "react";
import Progress from "../Progress/Progress";
import "./TaskController.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause } from '@fortawesome/free-solid-svg-icons'
function TaskController({ list, start, startTimer, setStart }) {
  let [time, setTime] = useState(0);

  const sum = list.reduce((acc, current) => acc + Number(current.seconds), 0);
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
  const resetTime = () => {
    setTime(0);
  };
  return (
    <div className="controller-container">
      <div className="rel width-100">
        <button
          className="startbutton"
          onClick={startTimer}
          disabled={time !== 0}
        >
         {time===0? <FontAwesomeIcon icon={faPlay} />:<FontAwesomeIcon icon={faPause} />}
        </button>
        <progress className="progress-line " value={time} max={sum} />
        {list.map((data, i) => {
          accumulator += Number(data.seconds);
          return (
            <Progress
              setStart={setStart}
              accumulator={accumulator}
              resetTime={resetTime}
              time={data.seconds}
              sum={sum}
              currentTime={time}
              key={i}
              lastCircle={i === list.length - 1 ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskController;
