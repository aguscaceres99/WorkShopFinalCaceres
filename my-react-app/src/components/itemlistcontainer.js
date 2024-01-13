import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto mt-4 p-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-bold mb-4">Bienvenido</h2>
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;