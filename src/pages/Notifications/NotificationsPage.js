import React from 'react';
import { useNotification } from '../../context/NotificationContext';
import styles from '../../styles/NotificationsPage.module.css';

const NotificationsPage = () => {
  const { notifications } = useNotification();

  return (
    <div className={styles.container}>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className={notification.isRead ? styles.read : styles.unread}>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
