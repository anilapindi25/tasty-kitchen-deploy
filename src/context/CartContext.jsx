import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const onIncreaseQuantity = (id) => {
    setCartList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const onDecreaseQuantity = (id) => {
  setCartList(prev =>
    prev
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0) 
  );
};


  const addToCart = (product) => {
    const itemExists = cartList.find(item => item.id === product.id);
    if (itemExists) {
      onIncreaseQuantity(product.id);
    } else {
      setCartList(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartList(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeFromCart,
        onIncreaseQuantity,
        onDecreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;