import { ADD_TIMER, DECREMENT_TIMER, REMOVE_TIMER } from "./types";

export const initialState = [];

export const timersReducer = (state, action) => {
  switch (action.type) {
    case ADD_TIMER:
      return [action.payload, ...state];

    case DECREMENT_TIMER:
      return state?.map((item, index) => {
        if (index == action.payload) {
          item.timerInMs -= 10
        }
        return item;
      })

    case REMOVE_TIMER:
      return state?.filter((item, idx) => idx != action.payload);

    default:
      return state;
  }
};