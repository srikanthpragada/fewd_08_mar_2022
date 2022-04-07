import React, { Component } from 'react'

export default class Counter2 extends Component {
  constructor(props) {
    super(props)
    this.state = { value : 0 }
    // This binding is necessary to make `this` work in the callback
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  decrement() {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.increment}>Increment</button>
        &nbsp;
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}
