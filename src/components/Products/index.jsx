
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import SortByOptions from "../SortByOptions";
import ProductCard from "../ProductCard";
import Cookies from 'js-cookie';
import './index.css';

const LIMIT = 9;

const Products = (props) => {
  const { onAddToCart } = props;
  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [sortBy, setSortBy] = useState('Lowest');
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [review, setReview] = useState("");
  const [submittedReview, setSubmittedReview] = useState(null);

  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    setIsLoading(true);
    const offset = (activePage - 1) * LIMIT;
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${sortBy}`;
   
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        setProducts(data.restaurants);
        setTotalPages(Math.ceil(data.total / LIMIT));
        setIsLoading(false);
      });
  }, [activePage, sortBy, jwtToken]);

  const buttonClick = () => {
    setShowReviewPopup(true);
    setReview("");
  };

  const handleReviewSubmit = () => {
    const reviewData = {
      name: "Rahul",
      email: "rahul@gmail.com",
      review: review
    };

    setSubmittedReview(reviewData);
    setShowReviewPopup(false);
    setReview("");
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Popular Restaurants</h2>
        <SortByOptions sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <p className="products-desc">
        Select your favourite restaurant special dish and make your day happy...
      </p>

      {isLoading ? (
        <div className="loader-container">
          <div className="loader" />
        </div>
      ) : (
        <>
          <div className="products-grid">
            {products.map(item => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
            ))}
          </div>
          <Pagination activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />
        </>
      )}

      <button className="button2" onClick={buttonClick}>
        <img
          src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?semt=ais_hybrid&w=740&q=80"
          className="chatbot"
          alt="chatbot"
        />
      </button>
      
      {showReviewPopup && (
        <div className="popup-overlay" onClick={() => setShowReviewPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>Leave a Review</h3>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review..."
              className="review-textarea"
            />
            <div className="popup-buttons">
              <button onClick={handleReviewSubmit} className="submit-button">Submit</button>
              <button onClick={() => setShowReviewPopup(false)} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}

     {submittedReview && (
  <div className="review-card">
    <h3 className="review-title">User Review</h3>
    <p className="review-field"><span>Name:</span> {submittedReview.name}</p>
    <p className="review-field"><span>Email:</span> {submittedReview.email}</p>
    <p className="review-field"><span>Review:</span> {submittedReview.review}</p>
  </div>
)}
    </div>
  );
};

export default Products;
