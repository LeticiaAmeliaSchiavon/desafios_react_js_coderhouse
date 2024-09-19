import React, { useState } from 'react';
import { useCart } from './CartContext';
import { createOrder } from './orderService';

const Checkout = () => {
  const { cartItems, clear } = useCart();
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = await createOrder(buyer, cartItems);
      setOrderId(id);
      clear();
    } catch (error) {
      console.error('Erro ao criar ordem:', error);
    }
  };

  return (
    <div>
      {orderId ? (
        <p>Obrigado pela sua compra! Seu ID de ordem é: {orderId}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nome" value={buyer.name} onChange={handleInputChange} required />
          <input type="text" name="phone" placeholder="Telefone" value={buyer.phone} onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleInputChange} required />
          <button type="submit">Finalizar Compra</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
