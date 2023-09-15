import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  // state như là rootReducer, muốn lấy count trong state thì phải dùng state.count
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    // const action = decrease();
    dispatch(decrease());
  };

  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
