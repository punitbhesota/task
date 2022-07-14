import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function userLogin(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/userLogin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = response.json();
    console.log(data);
  }
  return (
    <div className="Login">
      <img id="bg-signup" src="cute-girl.png" alt="background" />
      <form onSubmit={userLogin}>
        <h3>Log In for ride</h3>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          className="form-input-login"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          className="form-input-login"
          placeholder="Password"
        />
        <p>Forgot Password?</p>
        <button type="submit" value="Login">
          Login
        </button>
        <div className="login-action">
          Dont have an account ?
          <Link className="linkStyle" to="/Signup">
            <p>Signup</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
