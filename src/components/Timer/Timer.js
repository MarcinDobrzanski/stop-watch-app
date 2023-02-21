import styles from './Timer.module.scss'
import React, { useState } from 'react';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateTime = () => {
    setCurrentTime(new Date());
  }

  setInterval(updateTime, 1);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const milliseconds = currentTime.getMilliseconds().toString().padStart(3, '0');
  const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;

  return (
    <div className={styles.watch}>
      {timeString}
    </div>
  );
}

export default Timer;