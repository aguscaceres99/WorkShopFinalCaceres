import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '150px' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default Item;