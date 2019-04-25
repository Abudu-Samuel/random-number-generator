import React, { Component } from "react";
import RandomNumber from "./RandomNumber";

class App extends Component {
  state = {
    number: null,
    genNum: [],
    min: 0,
    max: 0
  };

  handleEvent = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  generateRandomNumber = () => {
    let i;
    let gen = [];
    if (this.state.number > 0 && this.state.number <= 5000) {
      for (i = 0; i < this.state.number; i++) {
        const num = Math.floor(100000 + Math.random() * 900000);
        gen.push(`080${num}`);
      }
      this.setState({ genNum: gen });
    }
    return <p>Sorry,minimum is 1 and maximum is 5000</p>;
  };

  sortGeneratedNumber = sortValue => {
    // window.event.preventDefault();
    if (sortValue === "asc") {
      const sort = this.state.genNum.sort((a, b) => Number(a) - Number(b));
      this.setState({ genNum: sort });
    } else {
      const sort = this.state.genNum.sort((a, b) => Number(b) - Number(a));
      this.setState({ genNum: sort });
    }
  };

  minAndMaxValue = num => {
    // window.event.preventDefault();
    const sorted = this.state.genNum.sort((a, b) => Number(a) - Number(b));
    if (num === "min") {
      const min = sorted[0];
      this.setState({ min });
    } else {
      const max = sorted[this.state.genNum.length - 1];
      this.setState({ max });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-6 offset-md-4 mb-3">
            <h3>Random number generator</h3>
          </div>
          <div className="col-md-5 offset-md-3">
            <RandomNumber
              handleEvent={this.handleEvent}
              generateRandomNumber={this.generateRandomNumber}
              genNum={this.state.genNum}
              sortGeneratedNumber={this.sortGeneratedNumber}
              minAndMaxValue={this.minAndMaxValue}
              min={this.state.min}
              max={this.state.max}
              number={this.state.number}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
