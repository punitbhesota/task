import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="home--1">
        <div className="home--1-left">
          <h2>
            Everyday life, <br />
            made simple.
          </h2>
          <div className="home-signs">
            <Link className="home-sign-link" to="./Signup">
              <div className="home-btn home-btn-1">Sign Up for ride</div>
            </Link>
            <div className="home-btn home-btn-2">Apply for drive</div>
          </div>
          <p>Download our app from Applestore and Playstore</p>
          <div className="home-sign-buttons">
            <img src="./app-store-button.png" alt="app store" />
            <img src="./google-play-button.png" alt="app store" />
          </div>
        </div>
        <img className="home-bg-1" src="./taxi-driver.png" alt="taxi" />
      </div>
      <div className="home--2">Invest and Earn</div>
      <div className="home--3">
        <h2>Get an estimate.</h2>
        <div>
          <span>Pick up point</span>
          <span>Drop point</span>
        </div>
        <button>Get Estimate</button>
      </div>
    </div>
  );
}

export default Home;
