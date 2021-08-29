import '../App/App.css';
import React, { Component } from 'react';
import shortid from 'shortid';
import Statistics from '../Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleDecrement = e => {
    console.log(e.target.name);

    this.setState(prevState => ({
      [e.target.name]: this.state[e.target.name] + 1,
    }));
  };

  totalCount = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    // console.log(this.state.good);
    return total;
  };

  positivePercentage = () => {
    console.log(this.totalCount());
    const positivPerc = Math.floor((this.state.good * 100) / this.totalCount());
    // or to the string - so, we can do whith out isNaN
    // const positivPerc = `${Math.floor((this.state.good * 100) / this.totalCount())}`;
    // console.log(positivPerc.length);
    console.log(positivPerc);
    return positivPerc;
  };

  render() {
    return (
      <div key={shortid.generate()} className="container">
        <Statistics
          btn={this.state}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onIncrement={this.handleDecrement}
          total={this.totalCount()}
          positivePercentage={this.positivePercentage()}
        />
      </div>
    );
  }
}

export default App;
