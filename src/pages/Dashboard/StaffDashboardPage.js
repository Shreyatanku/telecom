import React from 'react';
import StaffStats from '../../components/dashboard/StaffStats';
import NotificationPanel from '../../components/dashboard/NotificationPanel';
import styles from '../../styles/StaffDashboardPage.module.css';

const StaffDashboardPage = () => {
  return (
    <div className={styles.container}>
      <h1>Staff Dashboard</h1>
      <div className={styles.statsContainer}>
        <StaffStats />
      </div>
      <div className={styles.notificationsContainer}>
        <NotificationPanel />
      </div>
    </div>
  );
};

export default StaffDashboardPage;
