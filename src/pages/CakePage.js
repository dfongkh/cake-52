import "./CakePage.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const CakePage = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  return (
    <div className="cakepage-container">
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="cakepage">
            <img
              className="cakepage-img"
              src={product.imageUrl}
              alt={product.name}
            ></img>

            <div className="cakepage-info">
              <h1 className="cakepage-title">{product.name}</h1>
              <p className="cakepage-text">{product.description}</p>
              <h2 className="cakepage-price">${product.price}</h2>
              <h2>
                Status: <span>&nbsp;</span>
                {product.countInStock > 0 ? "Available" : "Not Available"}
              </h2>
              <h2>Quantity:</h2>
              <h2>
                <select
                  className="cakepage-qtybox"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  {/*}
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                  */}
                </select>
              </h2>
              <h2>
                <button
                  className="cakepage-cartbutton"
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CakePage;
