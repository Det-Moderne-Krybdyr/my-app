import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Arne's Electronics</h1>
        <div className="header-content">
          <nav>
            <ul>
              <li><a href="#desktops">Desktop PCs</a></li>
              <li><a href="#laptops">Laptops</a></li>
              <li><a href="#monitors">Monitors</a></li>
              <li><a href="#components">PC Components</a></li>
            </ul>
          </nav>
          <div className="search-basket">
            <input type="text" placeholder="Search products..." />
            <div className="basket">
              <span role="img" aria-label="basket">🛒</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </main>
      <footer>
        <h3>Helpful Information</h3>
        {/* Links to helpful information pages */}
      </footer>
    </div>
  );
}

export default App;
