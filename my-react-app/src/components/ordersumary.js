import React from 'react';
import { useCart } from '../components/cartcontext';

const OrderSummary = () => {
  const { cartState } = useCart();

  return (
    <div>
      <h2>Resumen de la Orden</h2>
      {cartState.items.length > 0 ? (
        <div>
          <ul>
            {cartState.items.map(item => (
              <li key={item.id}>
                {item.name} - Cantidad: {item.quantity} - Total: ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${cartState.items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        </div>
      ) : (
        <p>El carrito está vacío. Agrega productos para ver el resumen de la orden.</p>
      )}
    </div>
  );
};

export default OrderSummary;