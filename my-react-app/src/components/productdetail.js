import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Teclado Mecánico Gaming', price: 89.99, description: 'Teclado mecánico diseñado para gamers.' },
  { id: 2, name: 'Mouse Gamer RGB', price: 49.99, description: 'Mouse con iluminación RGB para una experiencia gaming única.' },
  { id: 3, name: 'Auriculares Inalámbricos para Gaming', price: 129.99, description: 'Auriculares inalámbricos con calidad de sonido premium.' },
  
];

const ProductDetail = () => {
  const { itemId } = useParams();

  useEffect(() => {
    
   
    const fetchProductDetails = async () => {
      const product = products.find(p => p.id === parseInt(itemId, 10));

      if (!product) {
        console.error('Producto no encontrado');
        return;
      }

      console.log(product);
      
    };

    fetchProductDetails();
  }, [itemId]);

  return (
    <div>
      
      <h2>Detalles del Producto {itemId}</h2>
    </div>
  );
};

export default ProductDetail;