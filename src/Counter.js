import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actionTypes";
import "./Counter.css";

class Counter extends Component {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <button onClick={this.decrement}>-</button>
        <span className="span">{this.props.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
