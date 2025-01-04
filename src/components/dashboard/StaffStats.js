import React from 'react';
import StatCard from './StatCard';
import { FaTasks, FaClipboardList, FaTruckLoading } from 'react-icons/fa';
import styles from '../../styles/StaffStats.module.css';

const StaffStats = () => {
  const stats = [
    { title: 'Tasks Assigned', value: 25, icon: <FaTasks /> },
    { title: 'Completed Deliveries', value: 15, icon: <FaClipboardList /> },
    { title: 'Items Restocked', value: 50, icon: <FaTruckLoading /> },
  ];

  return (
    <div className={styles.container}>
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
      ))}
    </div>
  );
};

export default StaffStats;
