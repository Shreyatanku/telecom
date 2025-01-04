import React from 'react';
import StatCard from './StatCard';
import { FaBoxOpen, FaClipboardCheck, FaTools } from 'react-icons/fa';
import styles from '../../styles/ManagerStats.module.css';

const ManagerStats = () => {
  const stats = [
    { title: 'Low Stock Items', value: 18, icon: <FaBoxOpen /> },
    { title: 'Completed Orders', value: 120, icon: <FaClipboardCheck /> },
    { title: 'Pending Maintenance', value: 5, icon: <FaTools /> },
  ];

  return (
    <div className={styles.container}>
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
      ))}
    </div>
  );
};

export default ManagerStats;
