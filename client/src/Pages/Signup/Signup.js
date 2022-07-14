import React, { useState, useEffect } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [countryCode, setCountryCode] = useState("");
  // const [phone, setPhone] = useState("");
  const alert = useAlert();

  async function registerUser(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert.show("Passwords do not match");
    } else {
      const response = await fetch("http://localhost:5000/api/addUser", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          fullName,
          phoneNumber,
          // countryCode,
          password,
        }),
      });

      const data = response.json();
      console.log(data);
    }
  }

  return (
    <div className="Signup">
      <img id="bg-signup" src="cute-girl.png" alt="background" />
      <form onSubmit={registerUser}>
        <h3>Signup Up for ride</h3>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          className="form-input"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          value={fullName}
          className="form-input"
          placeholder="Full Name"
        />
        <div id="mob">
          <img src="./canada1.png" alt="flag" />
          {/* <PhoneInput
          // containerClass="phoneInput"
          containerStyle={{
            height: "45px",
            width: "462px",
            border: "1px solid #555555",
            borderRadius: "10px",
          }}
          inputStyle={{
            height: "45px",
            width: "462px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid #555555",
            // borderRadius: "10px",
          }}
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        /> */}

          <input
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
            type="tel"
            placeholder="Mobile Number"
          />
        </div>
        <div id="pwd">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div id="cb">
          <input type="checkbox" name="cb" />
          <label for="cb">Terms &amp; Conditions</label>
        </div>
        <button type="submit" value="Sign Up">
          Sign Up
        </button>
        <div className="signup-action">
          Already have an account ?{" "}
          <Link className="linkStyle" to="/Login">
            <p>Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
