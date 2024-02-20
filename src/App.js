import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>Arne's Electronics</h1>
          <div className="menu">
            <nav>
              <ul>
                <li><a href="#desktops">Desktop PCs</a></li>
                <li><a href="#laptops">Laptops</a></li>
                <li><a href="#monitors">Monitors</a></li>
                <li><a href="#components">PC Components</a></li>
              </ul>
            </nav>
            <input type="text" placeholder="Search products..." />
          </div>
          <div className="basket">
            <span role="img" aria-label="basket">🛒</span>
            <span>0</span>
          </div>
        </div>
      </header>
      <main>
        <section id="desktops">
          <h2>Desktop PCs</h2>
          <div className="product-list">
            <div className="product-item">
              <img src="https://via.placeholder.com/150" alt="Desktop PC" />
              <h3>Desktop PC 1</h3>
              <p>Description of Desktop PC 1</p>
              <p>Price: $999</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-item">
              <img src="https://via.placeholder.com/150" alt="Desktop PC" />
              <h3>Desktop PC 2</h3>
              <p>Description of Desktop PC 2</p>
              <p>Price: $1299</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
        <section id="laptops">
          <h2>Laptops</h2>
          <div className="product-list">
            <div className="product-item">
              <img src="https://via.placeholder.com/150" alt="Laptop" />
              <h3>Laptop 1</h3>
              <p>Description of Laptop 1</p>
              <p>Price: $799</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-item">
              <img src="https://via.placeholder.com/150" alt="Laptop" />
              <h3>Laptop 2</h3>
              <p>Description of Laptop 2</p>
              <p>Price: $1099</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
        <section id="monitors">
          <h2>Monitors</h2>
          <div className="product-list">
            <div className="product-item">
              <img src="https://via.placeholder.com/150" alt="Monitor" />
              <h3>Monitor 1</h3>
              <p>Description of Monitor 1</p>
              <p>Price: $199</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-item">
              <img src="https://via.placeholder.com/150" alt="Monitor" />
              <h3>Monitor 2</h3>
              <p>Description of Monitor 2</p>
              <p>Price: $299</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
        <section id="components">
          <h2>PC Components</h2>
          <div className="product-list">
            <div className="product-item">
              <img src="https://via.placeholder.com/150" alt="Component" />
              <h3>Component 1</h3>
              <p>Description of Component 1</p>
              <p>Price: $49</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-item">
              <img src="https://via.placeholder.com/150" alt="Component" />
              <h3>Component 2</h3>
              <p>Description of Component 2</p>
              <p>Price: $99</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <h3>Helpful Information</h3>
        <ul>
          <li><a href="#cpu">How to Change Your CPU</a></li>
          <li><a href="#laptop">Choosing a Laptop for School</a></li>
          <li><a href="#display">Difference Between Display Types</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
