import React, { useEffect ,useRef} from "react";
import "./Progress.css";
function ViewTask({ currentTime, accumulator, name, time, sum }) {
  const ref=useRef(null)
  useEffect(() => {
    if (currentTime === accumulator) {
     ref.current.play()
    }
  }, [currentTime, accumulator]);
  return (
    <div
      style={{ left: `${((accumulator / sum) * 100)-2}%` }}
      className="progress-circle"
    >
      <audio src="beep.mp3" ref={ref} ></audio>
      {time}
    </div>
  );
}

export default ViewTask;
