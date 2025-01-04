import React from 'react';
import AdminStats from '../../components/dashboard/AdminStats';
import NotificationPanel from '../../components/dashboard/NotificationPanel';
import styles from '../../styles/AdminDashboardPage.module.css';

const AdminDashboardPage = () => {
  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <div className={styles.statsContainer}>
        <AdminStats />
      </div>
      <div className={styles.notificationsContainer}>
        <NotificationPanel />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
