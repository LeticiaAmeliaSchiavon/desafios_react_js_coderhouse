import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeItem, clear } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Meu Carrinho</h1>
      {cartItems.length === 0 ? (
        <div>
          <p>Não há itens no carrinho.</p>
          <Link to="/">Voltar para a página inicial</Link>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button onClick={clear}>Limpar Carrinho</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
