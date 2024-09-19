import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const CartContext = createContext();

// Provider customizado
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar item ao carrinho
  const addItem = (item, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  // Função para remover item do carrinho
  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Função para limpar o carrinho
  const clear = () => {
    setCartItems([]);
  };

  // Função para verificar se o item está no carrinho
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook customizado para usar o contexto do carrinho
export const useCart = () => useContext(CartContext);

export default CartContext;
