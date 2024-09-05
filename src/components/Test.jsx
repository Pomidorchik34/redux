import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

function Test() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <>
      <h1>{counter.counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 5 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: 5 });
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default Test;
