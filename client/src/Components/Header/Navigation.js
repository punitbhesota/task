import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <img className="logo" src="./comfort1.png" alt="comfort" />
      <Link className="linkStyle" to="/">
        <div>Home</div>
      </Link>

      <div>About CTPD</div>
      <div>Ride with us</div>
      <div>Drive with us</div>
      <div>Safety</div>
      <div id="lang">
        <img src="./language1.png" alt="lang" /> EN
      </div>
      <div className="buttons">
        <Link className="linkStyle" to="/Login">
          <div id="login">Login</div>
        </Link>
        <Link className="linkStyle" to="/Signup">
          <div id="signup">Signup</div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
