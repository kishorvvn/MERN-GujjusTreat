import React, { useEffect, useReducer } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import logger from "use-reducer-logger";

export default function HomeScreen() {

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST": return { ...state, loading: true };
      case "FETCH_SUCCESS": return { ...state, products: action.payload, loading: false };
      case "FETCH_FAIL": return { ...state, loading: false, error: action.payload };
      default: return state;
    };
  };

  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), { loading: true, error: '', products: [] });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/product");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });

      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message })
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);

  console.log(products);
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {
          loading ?
            (<div> Loading..... </div>)
            : error ?
              (<div> {error} </div>)
              :
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

