import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'

export default function HomeScreen() {
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {
          data.products.map(product => (
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

