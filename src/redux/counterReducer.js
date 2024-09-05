const initinalState = {
  counter: 0,
};
export function counterReducer(state = initinalState, action) {
  if (action.type == "INCREMENT") {
    return { ...state, counter: state.counter + action.payload };
  } else if (action.type == "DECREMENT") {
    return { ...state, counter: state.counter - action.payload };
  } else {
    return state;
  }
}
