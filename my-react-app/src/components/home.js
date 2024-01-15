import React from 'react';
import ProductList from './productlist';
import Navbar from './navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h2>Productos Disponibles</h2>
      <ProductList />
    </div>
  );
};

export default Home;