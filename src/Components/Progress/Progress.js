import React, { useEffect, useRef } from "react";
import "./Progress.css";
function ViewTask({
  currentTime,
  accumulator,
  setStart,
  time,
  sum,
  lastCircle,
  resetTime,
}) {
  const ref = useRef(null);
  console.log(lastCircle);
  useEffect(() => {
    if (currentTime === accumulator) {
      ref.current.play();
      if (lastCircle) {
        resetTime();
        setStart(false);
      }
    }
  }, [currentTime, accumulator, lastCircle, setStart, resetTime]);
  return (
    <div
      style={{ left: `${(accumulator / sum) * 100 - 2}%` }}
      className="progress-circle"
    >
      <audio src="alert.mp3" ref={ref}></audio>
      {time}
    </div>
  );
}

export default ViewTask;
