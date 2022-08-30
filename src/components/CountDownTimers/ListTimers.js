import React, { useContext } from "react";
import { TimerContext } from "../../App";
import Timer from "./Timer";

function ListTimers() {
  const timerContext = useContext(TimerContext);
  const { timers } = timerContext

  if(timers?.length <= 0){
    return <h4>No timers to display, Please add one</h4>
  }

  return (
    <div>
      <ul>
        {timers?.map((timer, index) => (
          <Timer key={index} id={index} timer={timer} />
        ))}
      </ul>
    </div>
  );
}

export default ListTimers;
