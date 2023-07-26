import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/product");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  console.log(products);
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {
          products.map(product => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
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
    </div>
  )
}

