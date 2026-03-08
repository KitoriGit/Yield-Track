import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Yield Track Dashboard</h1>
      <p>Resumen de tus inversiones</p>
    </div>
  );
};