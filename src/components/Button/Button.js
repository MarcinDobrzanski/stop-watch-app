import styles from './Button.module.scss';
import React, { useState, useEffect } from 'react';
import Timer from './../Timer/Timer';

const Button = () => {

  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1);
    } else if (!timerActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, time]);

  const handleStart = () => {
    setTimerActive(true);
  };

  const handleStop = () => {
    setTimerActive(false);
  };

  const handleReset = () => {
    setTimerActive(false);
    setTime(0);
  };

  return (
    <div>
      <Timer time={time} />
      <button className={styles.button} onClick={handleStart}>Start</button>
      <button className={styles.button} onClick={handleStop}>Stop</button>
      <button className={styles.button} onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Button;