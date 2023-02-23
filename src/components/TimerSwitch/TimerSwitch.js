import styles from './TimerSwitch.module.scss';
import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';

const TimerSwitch = () => {

  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    setIntervalId(setInterval(() => {
      setTime(time => time + 1);
    }, 1));
  };

  const handleStop = () => {
    clearInterval(intervalId);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setTime(0);
  };

  useEffect(() => {

    return () => {
      if (intervalId) clearInterval(intervalId);
    }
  }, [intervalId]);

  return (
    <div>
      <Timer time={time} />
      <button className={styles.button} onClick={handleStart}>Start</button>
      <button className={styles.button} onClick={handleStop}>Stop</button>
      <button className={styles.button} onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TimerSwitch;