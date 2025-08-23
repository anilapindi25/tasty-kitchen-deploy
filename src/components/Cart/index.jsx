import React, { useContext } from 'react'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import CartContext from '../../context/CartContext'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './index.css'

const Cart = () => {
  const { cartList } = useContext(CartContext)

return (
  <div className="page-container">
    <Navbar />
    <div className="cart-main-content">
      <div className="cart-container">
        {cartList.length === 0 ? <EmptyCartView /> : <CartListView />}
      </div>
    </div>
    <Footer />
  </div>
)
}

export default Cart
