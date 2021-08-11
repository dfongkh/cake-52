import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { withRouter } from "react-router";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* logo */}
          <HashLink
            smooth
            to="/#top"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            Cake 52
          </HashLink>

          {/* menu icon */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* links */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#top"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#our-cakes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Cakes
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </HashLink>
            </li>

            {/* cart */}
            <li className="nav-item">
              <div className="nav-cart-container">
                <Link
                  to="/cart"
                  className="navbar-cart"
                  onClick={closeMobileMenu}
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span className="navbar-cart-badge">{getCartCount()}</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
