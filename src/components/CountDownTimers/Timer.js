import React, { useContext, useEffect, useRef, useState } from "react";
import { removeTimer } from "../../reducers/timers/timerActions";
import { TimerContext } from "../../App";

function Timer({ id, timer: { currTimeInMs, timerInMs} }) {
  const timerContext = useContext(TimerContext);
  const [timerCount, setTimerCount] = useState(timerInMs)

  const { dispatch } = timerContext;
  const timerRef = useRef(null);
  
  useEffect(() => {
    timerRef.current = setInterval(() => { 
      setTimerCount(prevCount => prevCount - 10)
    }, 10);
    return () => {
      clearInterval(timerRef.current);
    };
  });

  useEffect(() => {
    if (timerCount <= currTimeInMs) {
      deleteTimer();
    }
  }, [timerCount]);

  const deleteTimer = () => {
    clearInterval(timerRef);
    dispatch(removeTimer(id));
  };

  const displayTimer = () => {
    console.log(timerCount)
    const currT = new Date(currTimeInMs)
    const displayCurrTime = `${currT.toLocaleDateString().replaceAll("/", ".")} ${currT.toLocaleTimeString()}`;

    let countDown = new Date(timerCount)
    const displayCountDownTime = `${countDown.getSeconds()}.${countDown.getMilliseconds()}`

    return [displayCurrTime, displayCountDownTime]
  }

  const [displayCurrTime, displayCountDownTime]  = displayTimer()

  return (
    <li key={id} className="timer">
      <button className="timer-closebtn" onClick={deleteTimer}>X</button>
      <p className="timer-countdown">{displayCountDownTime}</p>
      <p className="timer-currtime">{displayCurrTime}</p>
    </li>
  );
}

export default Timer;
