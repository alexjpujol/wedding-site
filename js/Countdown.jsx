import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      difference: ''
    };
  }

  componentDidMount() {
    this.setTime = setInterval(() => this.calculateDifference(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.setTime);
  }

  calculateDifference() {
    const weddingTime = new Date(2018, 9, 13, 18);
    this.setState({
      difference: weddingTime
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.difference.toString()}</h1>
      </div>
    );
  }
}

export default Countdown;
