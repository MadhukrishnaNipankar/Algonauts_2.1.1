import React, { useState } from "react";
import googleLogo from "../assests/google.png";
import signupimage from "../assests/signupimage.jpg";
import '../styles/LoginForm.css';


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [role, setRole] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleRoleChange=(e)=>{
    setRole(e.target.value)
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Contact Number:", contactNumber);
    // Additional logic for signup submission
  };

  return (
    <div className="form-wrapper">
      <div className="form-side">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="form-welcome-row">
            <h1>Create an Account! &#x1F603;</h1>
            <h2>Sign up to continue</h2>
          </div>
         
        
          <div className="text-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="text-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="text-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Your Password"
              title="Minimum 6 characters at least 1 Alphabet and 1 Number"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="text-field">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="Your Contact Number"
              value={contactNumber}
              onChange={handleContactNumberChange}
              required
            />
          </div>

          <div className="text-field">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={handleRoleChange}
              style={{
                height:"2.8rem",
                borderRadius:"0.5rem",
                backgroundColor:"#f1f2f3",
                border:"1px solid #dfe3e6"

              }}
              required
            >
              <option className="text-field" value="">Select your role</option>
              <option className="text-field" value="Entrepreneur">Entrepreneur</option>
              <option className="text-field" value="Startup">Startup</option>
              <option className="text-field" value="Guest">Investor</option>
            </select>
          </div>

        
          <button type="button"
           class="btn btn-dark"
           >Register
           </button>
          
          <div className="my-form__actions">
              <a href="#" className="create-account-link">
                Already have an account? Login
            </a>
          </div>

          <div className="divider">
            <div className="divider-line"></div> Or{" "}
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
        <img src={signupimage} alt="signupimage" className="signupimage" />
      </div>
    </div>
  );
};

export default SignUp;