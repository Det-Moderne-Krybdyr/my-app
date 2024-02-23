import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import HelpfulInformation from "./HelpfulInformation";

const BasketContext = createContext();

function useBasket() {
  return useContext(BasketContext);
}

function DesktopPCs() {
  return <h2>Desktop PCs Page</h2>;
}

function Laptops() {
  return <h2>Laptops Page</h2>;
}

function Monitors() {
  return <h2>Monitors Page</h2>;
}

function PCComponents() {
  return <h2>PC Components Page</h2>;
}

function ProductList({ products }) {
  const { addToBasket } = useBasket();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToBasket(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

function Basket() {
  const { basket } = useBasket();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const getTotalPrice = () => {
    return basket.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    navigate("/checkout"); // Use navigate to go to the checkout page
  };

  return (
    <div
      className="basket"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <span role="img" aria-label="basket">
        🛒
      </span>
      <span>{basket.length}</span>
      {isDropdownVisible && (
        <div className="dropdown">
          {basket.map((item) => (
            <div key={item.id} className="dropdown-item">
              {item.name} - ${item.price}
            </div>
          ))}
          <div className="total">Total: ${getTotalPrice()}</div>
          <button onClick={handleCheckout}>Checkout</button>{" "}
          {/* Add the checkout button */}
        </div>
      )}
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      <div className="App">
        <Router>
          <header>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1>Arne's Electronics</h1>
            </Link>
            <div className="header-content">
              <nav>
                <ul>
                  <li>
                    <Link to="/desktops">Desktop PCs</Link>
                  </li>
                  <li>
                    <Link to="/laptops">Laptops</Link>
                  </li>
                  <li>
                    <Link to="/monitors">Monitors</Link>
                  </li>
                  <li>
                    <Link to="/components">PC Components</Link>
                  </li>
                </ul>
              </nav>
              <div className="search-basket">
                <input type="text" placeholder="Search products..." />
                <Basket />
              </div>
            </div>
          </header>
          <Routes>
            <Route
              path="/desktops"
              element={
                <ProductList
                  products={products.filter(
                    (product) => product.category === "Desktop PCs"
                  )}
                />
              }
            />
            <Route
              path="/laptops"
              element={
                <ProductList
                  products={products.filter(
                    (product) => product.category === "Laptops"
                  )}
                />
              }
            />
            <Route path="/monitors" element={<Monitors />} />
            <Route path="/components" element={<PCComponents />} />
            <Route path="/checkout" element={<Checkout />} />{" "}
            <Route
              path="/HelpfulInformation"
              element={<HelpfulInformation />}
            />{" "}
            {/* Add the checkout route */}
          </Routes>
          <footer>
            <h3>
              <Link to="/HelpfulInformation" style={{ textDecoration: "none" }}>
                Helpful Information
              </Link>
            </h3>
          </footer>
        </Router>
      </div>
    </BasketContext.Provider>
  );
}

export { useBasket };
export default App;
