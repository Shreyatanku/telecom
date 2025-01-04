import React from 'react';
import styles from '../../styles/SupplierCard.module.css';

const SupplierCard = ({ supplier }) => {
  if (!supplier || !supplier.name) {
    return <div className={styles.error}>Invalid supplier data</div>;
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{supplier.name}</h3>
      <p className={styles.contact}>Contact: {supplier.contact}</p>
      <p className={styles.address}>Address: {supplier.address}</p>
      <p className={styles.orders}>Orders: {supplier.orderCount}</p>
    </div>
  );
};

export default SupplierCard;
