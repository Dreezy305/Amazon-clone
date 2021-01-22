import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";
import { auth } from "../firebase/Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.messsage));
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //creates a new acc with new email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="Login">
      <Link to="/">
        <img
          className="Login-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <label className="login-mail">E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-pass">Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-signIn" onClick={signIn}>
            Sign-in
          </button>
        </form>
        <p>Doest not have an account?</p>
        <button className="signup-button" onClick={signUp}>
          Create account
        </button>
      </div>
    </div>
  );
}

export default Login;
