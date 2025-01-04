import React, { useState } from 'react';
import styles from '../../styles/AddSupplierPage.module.css';

const AddSupplierPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Supplier Added:', formData);
    setFormData({ name: '', contact: '', address: '' });
  };

  return (
    <div className={styles.container}>
      <h1>Add Supplier</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Supplier Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Supplier</button>
      </form>
    </div>
  );
};

export default AddSupplierPage;
