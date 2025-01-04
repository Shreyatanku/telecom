import React from 'react';
import SupplierCard from './SupplierCard';
import styles from '../../styles/SupplierList.module.css';

const SupplierList = ({ suppliers }) => {
  if (!suppliers || suppliers.length === 0) {
    return <p className={styles.noSuppliers}>No suppliers found.</p>;
  }

  return (
    <div className={styles.list}>
      {suppliers.map((supplier) => (
        <SupplierCard key={supplier.id} supplier={supplier} />
      ))}
    </div>
  );
};

export default SupplierList;
