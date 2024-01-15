import React, { useState } from 'react';
import { useCart } from './components/cartcontext';

const Checkout = () => {
  const { cartState } = useCart();

 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

 
  const handleCheckout = () => {
    
    console.log('Compra realizada con éxito');
  };

  
  const isFormValid = () => {
    return (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      phone.trim() !== '' &&
      email.trim() !== '' &&
      email === confirmEmail
    );
  };

  return (
    <div>
      <h2>Realizar Compra</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Apellido:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Teléfono:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>Correo Electrónico:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Confirmar Correo Electrónico:</label>
        <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />

        {/* Botón de realizar compra */}
        <button type="button" onClick={handleCheckout} disabled={!isFormValid()}>
          Realizar Compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;