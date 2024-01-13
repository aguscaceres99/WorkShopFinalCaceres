import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const itemCount = 5; // Puedes cambiar este valor con la cantidad real de elementos en el carrito

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="badge">{itemCount}</span>
    </div>
  );
};

export default CartWidget;