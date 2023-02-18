import { Component } from 'react';

export default class Timer extends Component {
  state = { secondsLeft: 12, timer: null, timerStarted: false };

  timerStart = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      this.setState(({ secondsLeft }) => {
        const newsecondsLeft = secondsLeft - 1;
        if (newsecondsLeft === 0) clearInterval(timer);
        return { secondsLeft: newsecondsLeft };
      });
    }, 1000);
    this.setState({ timer });
  };

  timerPause = () => {
    this.setState({ timerStarted: false });
    clearInterval(this.state.timer);
  };

  render() {
    const { secondsLeft, timerStarted } = this.state;
    const play = <button type="button" className="icon-play" onClick={this.timerStart} />;
    const pause = <button type="button" className="icon-pause" onClick={this.timerPause} />;
    const button = timerStarted ? pause : play;
    const buttonVeiw = secondsLeft ? button : null;
    const seconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
    return (
      <div>
        {buttonVeiw}
        <span>00:{seconds}</span>
      </div>
    );
  }
}
