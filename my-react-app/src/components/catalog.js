import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../mockdata';
import ItemList from './itemlist';

const Catalog = () => {
  const { categoryName } = useParams();

  useEffect(() => {
    
    
    const fetchProducts = async () => {
      const filteredProducts = categoryName
        ? products.filter(product => product.category === categoryName)
        : products;

      console.log(filteredProducts);
    
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div>
      <h2>Catálogo de Productos Gamers</h2>
      <ul>
       
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
      <ItemList products={products} />
    </div>
  );
};

export default Catalog;