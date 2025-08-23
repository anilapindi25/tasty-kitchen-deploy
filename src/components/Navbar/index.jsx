import React from 'react'
import Cookies from 'js-cookie'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {

    const handleLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/login', { replace: true });
  };
  const navigate = useNavigate();
  return (
    <div>
       <header className="home-header">
        <div className="logo-title">
          <img src="https://res.cloudinary.com/dsrifdfcy/image/upload/v1752118329/Group_7420_pjzzf1.png" alt="logo" className="logo" />
          <span className="title">Tasty Kitchens</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to = "/cart">Cart </Link> 
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </nav>
      </header>

    </div>
  )
}

export default Navbar
