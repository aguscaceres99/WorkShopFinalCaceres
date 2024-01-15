import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productRef = db.collection('products').doc(id);

    productRef.get().then((doc) => {
      if (doc.exists) {
        setProduct(doc.data());
      } else {
        setProduct(null);
      }
    });
  }, [id]);

  if (!product) {
    return <p>El producto no existe.</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Foto: {product.photo}</p>
      <p>Precio: {product.price}</p>
      {/* Agregar selector de cantidad u otras propiedades del producto */}
    </div>
  );
};

export default ItemDetail;