import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ itemCount }) => {
  return (
    <div>
      <FaShoppingCart size={24} />
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;