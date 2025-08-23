import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dsrifdfcy/image/upload/v1753338091/Layer_2_drb4ak.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found.
        <br />
        Please go back to the homepage.
      </p>
      <button className="home-btn" onClick={() => navigate('/')}>
        Home Page
      </button>
    </div>
  )
}

export default PageNotFound
