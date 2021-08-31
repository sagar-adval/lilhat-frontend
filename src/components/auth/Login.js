import React from "react";
import "./auth.scss";
import LoginImage from "../../assets/images/login.svg";

const Login = () => {
  return (
    <div id="auth-container">
      <div id="auth-card" className="card-shadow">
        <div>
          <div id="image-section">
            <img src={LoginImage}></img>
          </div>
          <div id="form-section">
            <h2>Welcome Back!</h2>
            <form>
              <div className="input-field mb-1">
                <input placeholder="Email"></input>
              </div>
              <div className="input-field mb-2">
                <input placeholder="Password"></input>
              </div>
              <button>LOGIN</button>
            </form>
            <p>Don't have an account? Register now!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
