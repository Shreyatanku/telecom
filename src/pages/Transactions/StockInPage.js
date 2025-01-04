import React, { useState } from 'react';
import styles from '../../styles/StockInPage.module.css';

const StockInPage = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    supplier: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Stock In Data:', formData);
    setFormData({ productName: '', quantity: '', supplier: '', date: '' });
  };

  return (
    <div className={styles.container}>
      <h1>Stock In</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Product Name" value={formData.productName} onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
        <input type="text" name="supplier" placeholder="Supplier" value={formData.supplier} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <button type="submit">Record Stock In</button>
      </form>
    </div>
  );
};

export default StockInPage;
