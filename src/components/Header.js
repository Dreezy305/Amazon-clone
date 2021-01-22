import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchicon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header-option">
            <span className="header-option-one">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header-option-two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-option-one">New here?</span>
          <span className="header-option-two">Sign Up</span>
        </div>

        <Link to="/orders">
          <div className="header-option">
            <span className="header-option-one">Returns</span>
            <span className="header-option-two">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-option-two">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
