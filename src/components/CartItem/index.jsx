import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './index.css';

const CartItem = ({ item }) => {
  const { onIncreaseQuantity, onDecreaseQuantity, removeFromCart } = useContext(CartContext);

  return (
    <li className="cart-item">
      <img src={item.image_url} alt={item.name} className="cart-item-img" />
      <div className="cart-item-details">
        <p className="cart-item-title">{item.name}</p>
        <div className="quantity-controls">
          <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
        </div>
      </div>
      <div className="price-section">
        <p className="cart-item-price">₹ {item.cost * item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)} className="remove-btn">✖</button>
      </div>
    </li>
  );
};

export default CartItem;