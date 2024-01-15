import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

const ProductList = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const collectionRef = categoryId
      ? db.collection('products').where('category', '==', categoryId)
      : db.collection('products');

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    });

    return () => unsubscribe();
  }, [categoryId]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/item/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;