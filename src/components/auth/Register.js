import React from "react";
import "./auth.scss";
import RegisterImage from "../../assets/images/register.svg";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div id="auth-container">
      <div id="auth-card" className="card-shadow">
        <div>
          <div id="image-section">
            <img src={RegisterImage}></img>
          </div>
          <div id="form-section">
            <h2>Welcome Back!</h2>
            <form>
              <div className="input-field mb-1">
                <input placeholder="First Name"></input>
              </div>
              <div className="input-field mb-1">
                <input placeholder="Last Name"></input>
              </div>
              <div className="input-field mb-1">
                <input placeholder="Email"></input>
              </div>
              <div className="input-field mb-1">
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="input-field mb-2">
                <input placeholder="Password"></input>
              </div>
              <button>REGISTER</button>
            </form>
            <p>
              Already have an account? <Link to="/login">Login now!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
