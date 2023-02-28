const { useState } = require('react');

const Timer = ({ minutes, seconds }) => {
  const secondsFromProps = minutes * 60 + seconds;

  const [secondsLeft, setSecondsLeft] = useState(secondsFromProps);
  const [timerStarted, setTimerStarted] = useState(false);

  let secondsDeclaration = secondsFromProps;
  let dateStartTimer = null;
  let timerId = null;

  const timerFinish = () => {
    setTimerStarted(false);
    secondsDeclaration = 0;
    clearInterval(timerId);
  };

  const changeTimerValue = () => {
    const dateNow = Date.now();
    const secondsSinceStart = Math.floor((dateNow - dateStartTimer) / 1000);
    const newSecondsLeft = secondsDeclaration - secondsSinceStart;
    if (newSecondsLeft === 0) timerFinish();
    setSecondsLeft(newSecondsLeft);
  };

  const timerStart = () => {
    if (secondsLeft === 0) return;
    dateStartTimer = Date.now();
    setTimerStarted(true);
    timerId = setInterval(() => changeTimerValue(), 1000);
  };

  const timerPause = () => {
    setTimerStarted(false);
    secondsDeclaration = secondsLeft;
    clearInterval(timerId);
  };

  const play = <button type="button" className="icon-play" onClick={timerStart} />;
  const pause = <button type="button" className="icon-pause" onClick={timerPause} />;
  const button = timerStarted ? pause : play;
  const displayMinutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, '0');
  const displaySeconds = (secondsLeft % 60).toString().padStart(2, '0');

  return (
    <div>
      {button}
      <span>
        {displayMinutes}:{displaySeconds}
      </span>
    </div>
  );
};

export default Timer;
