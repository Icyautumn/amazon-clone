import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  // gets the items in the basket
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </NavLink>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <NavLink to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">{!user ? 'Guest' : user.email}</span>

            <span className="header_optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </NavLink>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&amp; orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <NavLink to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            {/* find how many items in the basket */}
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
