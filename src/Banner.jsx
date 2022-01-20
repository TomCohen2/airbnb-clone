import React from "react";
import "./Banner.css";
// import Button from "@mui/icons-material/core";
import Button from "@mui/material/Button";
import { useState } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Banner(props) {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__searchButton"
          variant="outline"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? <h4>Hide</h4> : <h3>Search Dates</h>}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => navigate("/search")}>Explore nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
