// import React, { useContext, useState } from 'react';
// import CartContext from '../../context/CartContext';
// import CartItem from '../CartItem';
// import { useNavigate } from 'react-router-dom';
// import './index.css';

// const CartListView = () => {
//   const navigate = useNavigate();
//   const { cartList, clearCart } = useContext(CartContext);

//   const [selectedPayment, setSelectedPayment] = useState('');
//   const [error, setError] = useState('');

//   const total = cartList.reduce((acc, item) => acc + item.cost * item.quantity, 0);

//   const placeOrder = () => {
//     if (!selectedPayment) {
//       setError('Please select a payment option before placing the order.');
//       return;
//     }
//     setError('');
//     clearCart(); // 
//     navigate('/payment-success'); 
//   };

//   return (
//     <div className="cart-container">
//       <h1 className="cart-heading">Cart</h1>
//       {cartList.length === 0 ? (
//         <div className="empty-cart">Your cart is empty</div>
//       ) : (
//         <>
//           <ul className="cart-items-list">
//             {cartList.map(item => (
//               <CartItem key={item.id} item={item} />
//             ))}
//           </ul>

//           <div className="payment-options">
//             <h3>Select Payment Method:</h3>
//             <select
//               value={selectedPayment}
//               onChange={(e) => setSelectedPayment(e.target.value)}
//             >
//               <option value="">-- Select Payment --</option>
//               <option value="RazorPay">RazorPay</option>
//               <option value="Stripe">Stripe</option>
//               <option value="PayPal">PayPal</option>
//             </select>
//             {error && <p className="error-text">{error}</p>}
//           </div>

//           <div className="total-section">
//             <h3>Order Total: ₹{total}</h3>
//             <button className="checkout-btn" onClick={placeOrder}>
//               Place Order
//             </button>
//             <button className="clear-cart-btn" onClick={clearCart}>
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartListView;

import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem';
import { useNavigate } from 'react-router-dom';
import './index.css';

const CartListView = () => {
  const navigate = useNavigate();
  const { cartList, clearCart } = useContext(CartContext);

  const [selectedPayment, setSelectedPayment] = useState('');
  const [error, setError] = useState('');

  const total = cartList.reduce((acc, item) => acc + item.cost * item.quantity, 0);

  const placeOrder = () => {
    if (!selectedPayment) {
      setError(' Please select a payment option before placing the order.');
      return;
    }
    setError('');
    clearCart(); 
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

          <div className="payment-options">
            <h3>Select Payment Method:</h3>
            <label>
              <input
                type="radio"
                name="payment"
                value="RazorPay"
                checked={selectedPayment === 'RazorPay'}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              RazorPay
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="Stripe"
                checked={selectedPayment === 'Stripe'}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              Stripe
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="PayPal"
                checked={selectedPayment === 'PayPal'}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              PayPal
            </label>
            {error && <p className="error-text">{error}</p>}
          </div>

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
