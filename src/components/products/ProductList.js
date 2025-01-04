import React from 'react';
import ProductCard from './ProductCard';
import styles from '../../styles/ProductList.module.css';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className={styles.noProducts}>No products found.</p>;
  }

  return (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
