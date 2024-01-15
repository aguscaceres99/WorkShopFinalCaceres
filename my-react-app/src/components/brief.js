import React from 'react';
import { useCart } from './components/cartcontext';

const Brief = () => {
  const { cartState } = useCart();

  return (
    <div>
      <h2>Resumen Breve del Carrito</h2>
      <p>Artículos en el carrito: {cartState.items.length}</p>
      <p>Total: ${cartState.items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    </div>
  );
};

export default Brief;