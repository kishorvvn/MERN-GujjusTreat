
import './App.css';
import data from './data';

function App() {
  return (
    <div className="">
      <header className="">
        <a href="/">Gujju's Treat</a>
      </header>
      <main>
        <h1>Featured products</h1>
        <div className="products">
          {
            data.products.map(product => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <p>
                    {product.name}
                  </p>
                  <p><strong>${product.price}</strong></p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </main>

    </div>
  );
}

export default App;
