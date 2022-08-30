import { ADD_TIMER, DECREMENT_TIMER, REMOVE_TIMER } from "./types";

export const addTimer = (newTimer) => {
  return {
    type: ADD_TIMER,
    payload: newTimer
  }
}

export const decrementTimer = (timerId) => {
  return {
    type: DECREMENT_TIMER,
    payload: timerId
  }
}

export const removeTimer = (timerId) => {
  return {
    type: REMOVE_TIMER,
    payload: timerId
  }
}