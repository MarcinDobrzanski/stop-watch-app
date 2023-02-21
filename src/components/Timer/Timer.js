import styles from './Timer.module.scss'

const Timer = ({ time }) => {
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
  const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, '0');
  const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
  const milliseconds = (time % 1000).toFixed(0).toString().padStart(1, '0');
  const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  return (
    <div className={styles.timer}>
      {timeString}
    </div>
  );
};

export default Timer;