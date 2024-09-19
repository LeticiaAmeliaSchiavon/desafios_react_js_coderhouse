import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from './CartContext';

const CartWidget = () => {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
    if (totalItems === 0) return null;
  
    return (
      <div style={{ position: 'relative' }}>
        <i className="fas fa-shopping-cart"></i>
        <span style={{ position: 'absolute', top: 0, right: 0, background: 'red', borderRadius: '50%', padding: '0.5em' }}>
          {totalItems}
        </span>
      </div>
    );
  };

export default CartWidget;