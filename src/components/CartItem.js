import "./CartItem.css";

import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem-imageContainer">
        <img className="cartitem-image" src={item.imageUrl} alt={item.name} />
      </div>
      <div className="cartitem-infoContainer">
        <Link to={`/cake/${item.product}`} className="cartitem-name">
          <h3>{item.name}</h3>
        </Link>
        <p>Status: {item.countInStock > 0 ? "Available" : "Not Available"}</p>

        <select
          className="cartitem-select"
          value={item.qty}
          onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          {/*
          {[...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
          */}
        </select>
        <button
          className="cartitem-deleteBtn"
          onClick={() => removeHandler(item.product)}
        >
          Delete
        </button>
      </div>

      <div className="cartitem-priceContainer">
        <h3 className="cartitem-price">${item.price}</h3>
      </div>
    </div>
  );
};

export default CartItem;
