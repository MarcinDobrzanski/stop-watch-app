import styles from './TimerSwitch.module.scss';
import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';

const TimerSwitch = () => {

  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    setTimerActive(true);
    setIntervalId(setInterval(() => {
      setTime(time => time + 1);
    }, 1));
  };

  const handleStop = () => {
    setTimerActive(false);
  };

  const handleReset = () => {
    setTimerActive(false);
    setTime(0);
  };

  useEffect(() => {

    return () => {
      if (intervalId) clearInterval(intervalId);
    }
  }, [timerActive, intervalId]);

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