import React, { useContext, useState } from "react";
import { TimerContext } from "../../App";
import { addTimer } from "../../reducers/timers/timerActions";

function CreateTimer() {
  const timerContext = useContext(TimerContext)
  const { dispatch } = timerContext
  const [newTimer, setNewTimer] = useState("");

  const createTimer = () => {
    const date = new Date();
    const timeInMs = date.getTime() + (Number(newTimer) * 1000)

    const payload = {
      currTimeInMs: date.getTime(),
      timerInMs: timeInMs
    };

    dispatch(addTimer(payload));
    setNewTimer("");
  };

  return (
    <div className="timer-form">
      <p>New Timer</p>
      <input
        type="number"
        value={newTimer}
        onChange={(e) => setNewTimer(e.target.value)}
      />
      <button onClick={createTimer}>Add</button>
    </div>
  );
}

export default CreateTimer;
