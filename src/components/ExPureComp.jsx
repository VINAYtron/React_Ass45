import React from "react";

class ExPureComp extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      counter1: 0,
      counter2: 0,
    };
  }

  handleClick1 = () => {
    this.setState({ counter1: 0 });
  };

  handleClick2 = () => {
    this.setState({ counter2: this.state.counter2 + 1 });
  };

  render() {
    return (
      <>
        <b>Counter = {this.state.counter1}</b>
        <button onClick={this.handleClick1}>Click</button>
        <b>Counter = {this.state.counter2}</b>
        <button onClick={this.handleClick2}>Increment</button>
        <br />
        <br />
        <hr />
      </>
    );
  }
}

export default ExPureComp;
