import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <img className="f-logo" src="comfort1.png" alt="comfort" />
      <div className="f-bottom">
        <div className="f-nav">
          <span>About us</span>
          <span>Press</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>
        <div className="f-form">
          <form>
            <span id="f-form-h">Signup for newsletter</span>
            <input placeholder="Enter your email" />
            <div>
              <img src="./fb1.png" alt="fb" />
              <img src="./twitter.png" alt="twitter" />
              <img src="./insta.png" alt="instagram" />
              <img src="./linkedin.png" alt="linkedin" />
              <img id="ytlogo" src="./yt.png" alt="yt" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
