import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css'; // make sure you're using the correct CSS file

const ProductCard = ({ product, quantity, onAddToCart, onIncrease, onDecrease }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/restaurants/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <img src={product.image_url} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.cuisine}</p>
        <div className="product-rating">
          <i className="fa fa-star" aria-hidden="true"></i>
          <span>{product.user_rating?.rating}</span>
          <span>({product.user_rating?.total_reviews} ratings)</span>
        </div>

        {onAddToCart && (
          quantity > 0 ? (
            <div className="quantity-controls" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => onDecrease(product.id)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => onIncrease(product.id)}>+</button>
            </div>
          ) : (
            <button
              className="add-button"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
            >
              Add
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductCard;
