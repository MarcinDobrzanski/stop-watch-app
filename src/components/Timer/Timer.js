import styles from './Timer.module.scss'

const Timer = ({ timeElapsed }) => {
  const hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
  const minutes = Math.floor((timeElapsed / (1000 * 60)) % 60).toString().padStart(2, '0');
  const seconds = Math.floor((timeElapsed / 1000) % 60).toString().padStart(2, '0');
  const milliseconds = (timeElapsed % 1000).toFixed(0).toString().padStart(1, '0');
  const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  return (
    <div className={styles.timer}>
      {timeString}
    </div>
  );
};

export default Timer;