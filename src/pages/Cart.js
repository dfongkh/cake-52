import "./Cart.css";
import paymentImg from "../assets/payment.png";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import { updateCart, removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(updateCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className="cart">
      <div className="cart-left">
        <h2 className="cart-title">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty{" "}
            <Link className="cart-homeLink" to="/">
              Go back
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
        {cartItems.length !== 0 ? (
          <Link className="cart-homeLink" to="/">
            Countinue Shopping >
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="cart-right">
        <div className="cart-info">
          <h3>Subtotal ({getCartCount()}) items</h3>
          <h3>${getCartSubTotal()}</h3>
        </div>
        <div>
          <button className="cart-checkOutBtn">Check Out</button>
        </div>
        <div className="cart-paymentBox">
          <p>We Accept:</p>
          <img
            className="cart-paymentImg"
            src={paymentImg}
            alt="Payment Methods"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
