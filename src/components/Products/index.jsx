
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
    </div>
  );
};

export default Products;
