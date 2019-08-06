import React, { Component } from "react";
import "./App.css";

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const operators = ["+", "-", "*", "/"];

class App extends Component {
  state = { value: 0, sum: 0, operator: "", decimal: false };

  onNumberPress = async digit => {
    if (this.state.operator === "=") {
      await this.setState({ value: 0, sum: 0 });
    }
    if (!this.state.decimal) {
      this.setState({ value: this.state.value * 10 + digit });
    } else {
      this.setState({ value: this.state.value + digit / 10, decimal: false });
    }
  };

  renderCalculate = () => {
    switch (this.state.operator) {
      case "+":
        this.setState({ value: this.state.sum + this.state.value });
        break;
      case "-":
        this.setState({ value: this.state.sum - this.state.value });
        break;
      case "*":
        this.setState({ value: this.state.sum * this.state.value });
        break;
      case "/":
        this.setState({ value: this.state.sum / this.state.value });
        break;
      default:
        break;
    }
  };

  onOperatePress = method => {
    switch (method) {
      case "+":
        this.setState({ sum: this.state.value, value: 0, operator: "+" });
        break;

      case "-":
        this.setState({ sum: this.state.value, value: 0, operator: "-" });
        break;

      case "*":
        this.setState({ sum: this.state.value, value: 0, operator: "*" });
        break;
      case "/":
        this.setState({ sum: this.state.value, value: 0, operator: "/" });
        break;

      case "=":
        this.renderCalculate();
        break;

      default:
        break;
    }
  };

  renderOps = () => {
    return (
      <>
        {operators.map((each, index) => {
          return (
            <button
              className="key--operator"
              data-action={each}
              onClick={() => this.onOperatePress(each)}
            >
              {each}
            </button>
          );
        })}
      </>
    );
  };

  renderNumbers = () => {
    return (
      <>
        {numbers.map((each, index) => (
          <button onClick={() => this.onNumberPress(each)}>{each}</button>
        ))}
      </>
    );
  };

  renderKeys = () => {
    return (
      <div className="calculator__keys">
        {this.renderOps()}
        {this.renderNumbers()}
        <button
          data-action="decimal"
          onClick={() => {
            this.setState({ decimal: true });
          }}
        >
          .
        </button>
        <button
          data-action="clear"
          onClick={() => {
            this.setState({ sum: 0, value: 0 });
          }}
        >
          AC
        </button>
        <button
          className="key--equal"
          data-action="calculate"
          onClick={() => this.onOperatePress("=")}
        >
          =
        </button>
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="calculator">
            <div className="calculator__display">{this.state.value}</div>
            {this.renderKeys()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
