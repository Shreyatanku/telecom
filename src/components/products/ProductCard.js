import React from 'react';
import styles from '../../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.category}>Category: {product.category}</p>
      <p className={styles.stock}>
        Stock: <span className={product.stockLevel > 0 ? styles.inStock : styles.outOfStock}>
          {product.stockLevel}
        </span>
      </p>
      <p className={styles.reorder}>Reorder Point: {product.reorderPoint}</p>
    </div>
  );
};

export default ProductCard;
