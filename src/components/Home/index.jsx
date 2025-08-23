import Navbar from '../Navbar';
import Courosuel from '../Courosuel';
import Products from '../Products';
import Footer from '../Footer';
import './index.css';

const Home = () => (
  <div className="home-main">
    <Navbar />
    <Courosuel />
    <section className="restaurants-section">
      <Products />
    </section>
    <Footer />
  </div>
);

export default Home;