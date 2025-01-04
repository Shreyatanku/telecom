import React from 'react';
import ManagerStats from '../../components/dashboard/ManagerStats';
import NotificationPanel from '../../components/dashboard/NotificationPanel';
import styles from '../../styles/ManagerDashboardPage.module.css';

const ManagerDashboardPage = () => {
  return (
    <div className={styles.container}>
      <h1>Manager Dashboard</h1>
      <div className={styles.statsContainer}>
        <ManagerStats />
      </div>
      <div className={styles.notificationsContainer}>
        <NotificationPanel />
      </div>
    </div>
  );
};

export default ManagerDashboardPage;
