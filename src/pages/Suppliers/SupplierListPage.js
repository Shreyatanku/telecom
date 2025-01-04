import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation to the Add Supplier page
import SupplierList from '../../components/suppliers/SupplierList';
import styles from '../../styles/SupplierListPage.module.css';

const mockSuppliers = [
  { id: 1, name: 'Tech Supplies Co.', contact: 'tech@supplies.com', address: '123 Tech St', orderCount: 120 },
  { id: 2, name: 'Furniture World', contact: 'info@furnitureworld.com', address: '456 Home Lane', orderCount: 45 },
  { id: 3, name: 'Fashion Mart', contact: 'support@fashionmart.com', address: '789 Trendy Ave', orderCount: 80 },
];

const SupplierListPage = () => {
  const [suppliers, setSuppliers] = useState(mockSuppliers);
  const navigate = useNavigate();

  const handleFilter = (query) => {
    const filtered = mockSuppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(query.toLowerCase())
    );
    setSuppliers(filtered);
  };

  const handleAddSupplier = () => {
    navigate('/suppliers/add'); // Navigate to Add Supplier page
  };

  return (
    <div className={styles.container}>
      <h1>Supplier List</h1>
      <div className={styles.actions}>
        <button className={styles.addButton} onClick={handleAddSupplier}>
          Add Supplier
        </button>
      </div>
      <input
        type="text"
        placeholder="Search suppliers..."
        onChange={(e) => handleFilter(e.target.value)}
        className={styles.searchInput}
      />
      <SupplierList suppliers={suppliers} />
    </div>
  );
};

export default SupplierListPage;
