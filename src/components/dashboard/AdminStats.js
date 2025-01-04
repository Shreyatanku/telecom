import React from 'react';
import StatCard from './StatCard';
import { FaUsers, FaBox, FaWarehouse } from 'react-icons/fa';
import styles from '../../styles/AdminStats.module.css';

const AdminStats = () => {
  const stats = [
    { title: 'Total Users', value: 120, icon: <FaUsers /> },
    { title: 'Total Products', value: 450, icon: <FaBox /> },
    { title: 'Total Suppliers', value: 35, icon: <FaWarehouse /> },
  ];

  return (
    <div className={styles.container}>
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
      ))}
    </div>
  );
};

export default AdminStats;
