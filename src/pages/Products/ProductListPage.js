import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation to the Add Product page
import ProductList from '../../components/products/ProductList';
import ProductFilter from '../../components/products/ProductFilter';
import styles from '../../styles/ProductListPage.module.css';

const mockProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', stockLevel: 20, reorderPoint: 5 },
  { id: 2, name: 'Sofa', category: 'Furniture', stockLevel: 0, reorderPoint: 3 },
  { id: 3, name: 'T-Shirt', category: 'Apparel', stockLevel: 50, reorderPoint: 10 },
];

const ProductListPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const navigate = useNavigate();

  const handleFilter = ({ query, category }) => {
    let filtered = mockProducts;
    if (query) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }
    setFilteredProducts(filtered);
  };

  const handleAddProduct = () => {
    navigate('/products/add'); // Navigate to Add Product page
  };

  return (
    <div className={styles.container}>
      <h1>Product List</h1>
      <div className={styles.actions}>
        <button className={styles.addButton} onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
      <ProductFilter onFilter={handleFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductListPage;
