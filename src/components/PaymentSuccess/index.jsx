import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const PaymentSuccess = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleGoHome = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      navigate('/') 
    }, 1500)
  }

  return (
    <div className="payment-success-container">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <img
            src="https://res.cloudinary.com/dsrifdfcy/image/upload/v1753383793/check-circle.1_1_ooobob.png"
            alt="payment success"
            className="success-img"
          />
          <h1 className="success-heading">Payment Successful</h1>
          <p className="success-msg">Your payment was processed successfully.</p>
          <button className="go-home-button" onClick={handleGoHome}>
            Go to Home
          </button>
        </>
      )}
    </div>
  )
}

export default PaymentSuccess
