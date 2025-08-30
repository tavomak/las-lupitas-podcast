import styles from './styles.module.scss';

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <svg viewBox='0 0 80 80'>
          <circle id='test' cx='40' cy='40' r='32' />
        </svg>
      </div>

      <div className={`${styles.loader} ${styles.triangle}`}>
        <svg viewBox='0 0 86 80'>
          <polygon points='43 8 79 72 7 72' />
        </svg>
      </div>

      <div className={styles.loader}>
        <svg viewBox='0 0 80 80'>
          <rect x='8' y='8' width='64' height='64' />
        </svg>
      </div>
    </div>
  );
}

export default Loading;
