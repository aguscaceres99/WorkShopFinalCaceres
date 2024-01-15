import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemdetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  
  useEffect(() => {
    
    const fetchData = async () => {
      
      await new Promise(resolve => setTimeout(resolve, 1000));

      const productDetails = {
        id: itemId,
        name: 'Producto de Ejemplo',
        price: 49.99,
        description: 'Descripción del producto de ejemplo.',
      };

      setProduct(productDetails);
    };

    fetchData();
  }, [itemId]);

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;