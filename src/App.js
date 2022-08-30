import React, { createContext, useReducer } from 'react';
import './App.css';
import CountDownTimers from './components/CountDownTimers';
import {initialState, timersReducer } from './reducers/timers/timerReducer';

export const TimerContext = createContext()

function App() {
  const [timers, dispatch] = useReducer(timersReducer, initialState)

  return (
    <TimerContext.Provider value={{timers, dispatch }}>
      <div className="App">
        <CountDownTimers/>
      </div>
    </TimerContext.Provider>
    
  );
}

export default App;
