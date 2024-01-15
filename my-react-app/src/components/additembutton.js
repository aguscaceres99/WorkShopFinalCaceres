import React from 'react';
import { useCart } from './components/cartcontext';

const AddItemButton = ({ product, quantity }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <button onClick={handleAddToCart}>Agregar al Carrito</button>
  );
};

export default AddItemButton;