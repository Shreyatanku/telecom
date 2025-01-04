import React, { useState } from 'react';
import styles from '../../styles/ProductFilter.module.css';

const ProductFilter = ({ onFilter }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onFilter({ query: e.target.value, category });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilter({ query, category: e.target.value });
  };

  return (
    <div className={styles.filter}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <select value={category} onChange={handleCategoryChange} className={styles.select}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Apparel">Apparel</option>
      </select>
    </div>
  );
};

export default ProductFilter;
