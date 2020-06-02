import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailProduct } from "../actions/productActions";

function ProductScreen(props) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(detailProduct(props.match.params.id));
  }, []);

  const handleAddToChart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to="/"> Back to result</Link>
      </div>

      {loading ? (
        <div>...loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                {product.rating} Stars ({product.review})
              </li>
              <li>{product.price}</li>
              <li>
                Descrpition:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: {product.price}</li>
              <li>Status: {product.inStock > 0 ? "In Stock" : "Out of stock"}</li>
              <li>
                Qty:
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(product.inStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.inStock > 0 && (
                  <button onClick={handleAddToChart} className="button primary">
                    Add to chart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
