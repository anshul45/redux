import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

const Shop = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2>Buy Shoes 50 rs</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        -
      </button>
      Add to Cart
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          dispatch(actionCreators.depositeMoney(100));
        }}
      >
        +
      </button>
      {/* <button
        className="btn btn-primary mx-2"
        onClick={() => {
          action.withdrawMoney(100);
        }}
      >
        -
      </button>
      Add to Cart
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          action.depositeMoney(100);
        }}
      >
        +
      </button> */}
    </div>
  );
};

export default Shop;
