import styles from './Button.module.scss';
import React, { useState, useEffect } from 'react';
import Timer from './../Timer/Timer';

const Button = props => {

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTimeElapsed(timeElapsed => timeElapsed + 1);
      }, 10);
    } else if (!timerActive && timeElapsed !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeElapsed]);

  const handleStart = () => {
    setTimerActive(true);
  };

  const handleStop = () => {
    setTimerActive(false);
  };

  const handleReset = () => {
    setTimerActive(false);
    setTimeElapsed(0);
  };

  return (
    <div>
      <Timer timeElapsed={timeElapsed} />
      <button className={styles.button} onClick={handleStart}>Start</button>
      <button className={styles.button} onClick={handleStop}>Stop</button>
      <button className={styles.button} onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Button;