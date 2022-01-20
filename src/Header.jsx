import React from "react";
import "./Header.css";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://logodownload.org/wp-content/uploads/2016/10/airbnb-logo-0.png"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a Host</p>
        <LanguageIcon />
        <AccountCircleIcon />
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Header;
