import React, { useState } from 'react';
import styles from '../../styles/AddProductPage.module.css';

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    stockLevel: '',
    reorderPoint: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Added:', formData);
    setFormData({ name: '', category: '', stockLevel: '', reorderPoint: '' });
  };

  return (
    <div className={styles.container}>
      <h1>Add Product</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Apparel">Apparel</option>
        </select>
        <input
          type="number"
          name="stockLevel"
          placeholder="Stock Level"
          value={formData.stockLevel}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="reorderPoint"
          placeholder="Reorder Point"
          value={formData.reorderPoint}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
