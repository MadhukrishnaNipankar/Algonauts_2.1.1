import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import googleLogo from "../assests/google.png";
import mockImage from "../assests/mock.jpg";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="form-wrapper">
      <div className="form-side">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="form-welcome-row">
            <h1>Welcome Back! &#x1F44F;</h1>
            <h2>Login with your account!</h2>
          </div>

          <div className="text-field">
            {/* <label htmlFor="email" className="input-label">
              Email
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="text-field">
            {/* <label htmlFor="password">Password</label> */}
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              title="Minimum 6 characters at least 1 Alphabet and 1 Number"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

    
            <button
             type="button" 
             class="btn btn-dark">
              Login
            </button>
      
          <div className="my-form__actions">
            <NavLink
              to="/Signup"
              className={({ isActive }) =>
                `${isActive ? "active-nav" : null} nav-link`
              }
            >
              <a
                title="Create Account"
                className="create-account-link"
              >
                Don't have an account? <strong>Sign Up</strong>
              </a>
            </NavLink>
          </div>

          <div className="divider">
            <div className="divider-line"></div>
            <span>OR</span>
            <div className="divider-line"></div>
          </div>
          <div className="socials-row">
            <a href="/" title="Use Google">
              <img src={googleLogo} alt="Google" />
              <span>Continue with Google</span>
            </a>
          </div>
        </form>
      </div>
      <div className="info-side">
        <img src={mockImage} alt="Mock" className="mockup" />
      </div>
    </div>
  );
};
export default LoginForm;