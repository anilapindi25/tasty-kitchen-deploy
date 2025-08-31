import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const EmptyCartView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleOrderNow = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      navigate('/') 
    }, 1500)
  }
  
  return (
    <div className="empty-cart-container">
      {isLoading ? (
        // <div className="loader-container">
          <div className="loader"></div>
        /* </div> */
      ) : (
        <>
          <img
            src="https://res.cloudinary.com/dsrifdfcy/image/upload/v1753384291/cooking_1_m5vmyx.png"
            alt="empty cart"
            className="empty-cart-image"
          />
          <h1 className="empty-cart-heading">No Orders Yet!</h1>
          <p className="empty-cart-description">
            Your cart is empty. Add something from the menu.
          </p>
          <button className="order-now-button" onClick={handleOrderNow}>
            Order Now
          </button>
        </>
      )}
    </div>
  )
}

export default EmptyCartView
