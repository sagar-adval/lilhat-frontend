import React, { useState } from "react";
import "./auth.scss";
import LoginImage from "../../assets/images/login.svg";
import { Link } from "react-router-dom";
import AuthService from '../../services/auth.service';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    AuthService.login({email, password}).then(res => console.log(res)).catch(err => console.log(err));
    console.log(email, password);
  };

  return (
    <div id="auth-container">
      <div id="auth-card" className="card-shadow">
        <div>
          <div id="image-section">
            <img src={LoginImage}></img>
          </div>
          <div id="form-section">
            <h2>Welcome Back!</h2>
            <form onSubmit={submitFormHandler}>
              <div className="input-field mb-1">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required="required"
                  type="text"
                  placeholder="Email"
                ></input>
              </div>
              <div className="input-field mb-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required="required"
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
              <button>LOGIN</button>
            </form>
            <p>
              Don't have an account? <Link to="/register">Register now!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
