import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      difference: '',
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.setTime = setInterval(() => this.calculateDifference(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.setTime);
  }

  calculateDifference() {
    const weddingTime = new Date(2018, 9, 13, 18).getTime();
    const currentTime = new Date().getTime();
    const difference = weddingTime - currentTime; 
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000); 
    this.setState({
      daysTil: days,
      hoursTil: hours,
      minutesTil: minutes,
      secondsTil: seconds 
    });
  }

  render() {
    return (
      <div>
        <h1 id="home_countdown">{this.state.daysTil} days, {this.state.hoursTil} hours, {this.state.minutesTil} minutes, {this.state.secondsTil} seconds</h1>
      </div>
    );
  }
}

export default Countdown;
