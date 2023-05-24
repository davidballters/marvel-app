import styles from './Progressbar.module.scss'

export default function Progressbar({ progress = 0, goalSeries, totalSeries }) {
  const totalProgress = Math.floor(progress / 10) * 10
  return (
    <div className={`${styles.progress_bar} ${styles[`percent_${totalProgress.toString()}`]}`}>
      <span className={styles.goal_productions}>{goalSeries} peliculas Meta de Produccion</span>
      <div className={styles.progress_bar__wrapper}>
        <div className={styles.progress_bar__percent} />
        <div className={styles.progress_bar__percent} />
        <div className={styles.progress_bar__percent} />
        <div className={styles.progress_bar__percent} />
        <div className={styles.progress_bar__percent} />
        <div className={styles.progress_bar__percent} />
        <div className={styles.progress_bar__percent} />
        <div className={styles.progress_bar__percent} />
        <div className={styles.progress_bar__percent} />
        <div className={styles.progress_bar__percent} />
      </div>
      <span className={styles.created_productions}>{totalSeries} Peliculas producidas</span>
    </div>
  )
}
