// src/components/ProductDetail.js
import React from 'react';
import './productDetail.css';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.amount}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
}

export default ProductDetail;
