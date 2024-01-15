import React from 'react';

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  return (
    <div>
      <label>Cantidad:</label>
      <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
    </div>
  );
};

export default ItemQuantitySelector;