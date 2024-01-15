import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './productlist';
import Navbar from './navbar';

const CategoryProducts = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <Navbar />
      <h2>Productos de la Categoría: {categoryId}</h2>
      <ProductList categoryId={categoryId} />
    </div>
  );
};

export default CategoryProducts;