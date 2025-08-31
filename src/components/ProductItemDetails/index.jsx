import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartContext from "../../context/CartContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './index.css';

const ProductItemDetails = () => {
  const { restrauntId } = useParams();
  const [restraunt, setRestraunt] = useState(null);
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState('');
  const jwtToken = Cookies.get("jwt_token");

  const {
    cartList,
    addToCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
  } = useContext(CartContext);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const url = `https://apis.ccbp.in/restaurants-list/${restrauntId}`;
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        setRestraunt(data);
        setMenu(data.food_items);
      } else {
        setError('Restaurant not found or unauthorized');
      }
    };
    fetchRestaurant();
  }, [restrauntId, jwtToken]);

  const getQuantity = (id) => {
    const item = cartList.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  if (error) return <p>{error}</p>;
  if (!restraunt) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="restaurant-details-page">
        <div className="restaurant-header">
          <LazyLoadImage
            src={restraunt.image_url}
            alt={restraunt.name}
            className="restaurant-banner"
            effect="blur"
          />
          <div className="restaurant-info">
            <h2>{restraunt.name}</h2>
            <p>{restraunt.cuisine}</p>
            <p>{restraunt.location}</p>
            <div className="restaurant-meta">
              <span>★ {restraunt.rating}</span>
              <span>{restraunt.reviews_count}+ ratings</span>
              <span>₹ {restraunt.cost_for_two} Cost for two</span>
            </div>
          </div>
        </div>

        <div className="menu-list">
          {menu.map(item => {
            const quantity = getQuantity(item.id);
            return (
              <div className="menu-card" key={item.id}>
                <LazyLoadImage
                  src={item.image_url}
                  alt={item.name}
                  className="menu-img"
                  effect="blur"
                />
                <div className="menu-info">
                  <h4>{item.name}</h4>
                  <span>₹ {item.cost}</span>
                  <span>★ {item.rating}</span>

                  {quantity > 0 ? (
                    <div className="qty-controls">
                      <button className="qty-btn" onClick={() => onDecreaseQuantity(item.id)}>-</button>
                      <span className="qty">{quantity}</span>
                      <button className="qty-btn" onClick={() => onIncreaseQuantity(item.id)}>+</button>
                    </div>
                  ) : (
                    <button className="add-btn" onClick={() => addToCart(item)}>ADD</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductItemDetails;
