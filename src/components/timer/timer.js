import { Component } from 'react';

export default class Timer extends Component {
  state = { timeLeft: 3, timer: null, timerStarted: false };

  timerStart = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      this.setState(({ timeLeft }) => {
        const newTimeLeft = timeLeft - 1;
        if (newTimeLeft === 0) clearInterval(timer);
        return { timeLeft: newTimeLeft };
      });
    }, 1000);
    this.setState({ timer });
  };

  timerPause = () => {
    this.setState({ timerStarted: false });
    clearInterval(this.state.timer);
  };

  render() {
    const { timeLeft, timerStarted } = this.state;
    const play = <button type="button" className="icon-play" onClick={this.timerStart} />;
    const pause = <button type="button" className="icon-pause" onClick={this.timerPause} />;
    const button = timerStarted ? pause : play;
    return (
      <div>
        {button}
        <span>00:{timeLeft}</span>
      </div>
    );
  }
}
