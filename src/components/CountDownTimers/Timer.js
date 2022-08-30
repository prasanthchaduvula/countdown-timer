import React, { useContext, useEffect, useRef } from "react";
import { decrementTimer, removeTimer } from "../../reducers/timers/timerActions";
import { TimerContext } from "../../App";

function Timer({ id, timer: {timerSec, currTime} }) {
  const timerContext = useContext(TimerContext);

  const { dispatch } = timerContext;
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => { dispatch(decrementTimer(id))}, 10000);
    return () => {
      clearInterval(timerRef.current);
    };
  });

  useEffect(() => {
    if (timerSec <= 0) {
      deleteTimer();
    }
  }, [timerSec]);

  const deleteTimer = () => {
    clearInterval(timerRef);
    dispatch(removeTimer(id));
  };

  const displayTimer = () => {
    const displayCurrTime = `${currTime.getDate()}:${currTime.getMonth()}:${currTime.getFullYear()} ${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`;
    let t = new Date(currTime);
    t.setSeconds(t.getSeconds() + timerSec);
    const displayCounterTime = t.toTimeString().split(" ")[0];
    return [displayCurrTime, displayCounterTime]
  }

  const [displayCurrTime, displayCounterTime]  = displayTimer()

  return (
    <li key={id} className="timer">
      <button className="timer-closebtn" onClick={deleteTimer}>X</button>
      <p className="timer-countdown">{displayCounterTime}</p>
      <p className="timer-currtime">{displayCurrTime}</p>
    </li>
  );
}

export default Timer;
