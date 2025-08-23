import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem';
import { useNavigate } from 'react-router-dom';
import './index.css';

const CartListView = () => {
  const navigate = useNavigate();
  const { cartList, clearCart } = useContext(CartContext);

  const total = cartList.reduce((acc, item) => acc + item.cost * item.quantity, 0);
  const placeOrder = () => {
    navigate('/payment-success');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Cart</h1>
      {cartList.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartList.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <hr />
          <div className="total-section">
            <h3>Order Total: ₹{total}</h3>
            <button className="checkout-btn" onClick={placeOrder}>Place Order</button>
            <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartListView;
