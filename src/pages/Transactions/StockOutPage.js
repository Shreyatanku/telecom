import React, { useState } from 'react';
import styles from '../../styles/StockOutPage.module.css';

const StockOutPage = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Stock Out Data:', formData);
    setFormData({ productName: '', quantity: '', date: '' });
  };

  return (
    <div className={styles.container}>
      <h1>Stock Out</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Product Name" value={formData.productName} onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <button type="submit">Record Stock Out</button>
      </form>
    </div>
  );
};

export default StockOutPage;
