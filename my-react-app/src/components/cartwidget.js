import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './components/cartcontext';

const CartWidget = () => {
  const { cartState } = useCart();
  const itemCount = cartState.items.length;

  return (
    <div>
      <FaShoppingCart size={24} />
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;