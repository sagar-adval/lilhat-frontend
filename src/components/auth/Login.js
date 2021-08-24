import React from "react";
import LoginImage from "../../assets/images/login.svg";

const Login = () => {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div>
          <div id="image-section">
            <img src={LoginImage}></img>
          </div>
          <div id="form-section">
            <h2>Welcome Back!</h2>
            <form>
              <div className="input-field">
                <input placeholder="Email"></input>
              </div>
              <div className="input-field">
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
