import React from "react";
import CreateTimer from "./CreateTimer";
import ListTimers from "./ListTimers";

function CountDownTimers(){
  return (
    <div className="timers-com">
      <ListTimers />
      <CreateTimer />
    </div>
  )
}

export default CountDownTimers