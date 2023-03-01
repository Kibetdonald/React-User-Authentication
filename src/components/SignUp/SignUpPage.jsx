import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { signup } from "../../Actions/auth";

function SignUpPage({ signup, isAuthenticated }) {
  // show notification
  const [showNotification, setShowNotification] = useState(true);
  const [showError, setShowError] = useState(true);

  
  const changeStatus = () => {
    setShowNotification(false);
  };

  // Create user account
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    re_password: "",
  });

  const { email, firstName, lastName, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(email, firstName, lastName, password, re_password);
      setAccountCreated(true);
    } else {
      setShowError(false)
    }
  };
  if (accountCreated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="LoginPage">
      <div className="login-form">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Sign Up</h4>
          <a href="/">I have an account</a>
        </div>
        <br />
        {showNotification ? (
          <div />
        ) : (
          <div className="sucessAlert">
            Sucess! Check your email for your account activation link
          </div>
        )}
        {showError ? (
          <div />
        ) : (
          <div className="errorAlert">Error! Passwords do not match</div>
        )}
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
              name="firstName"
              value={firstName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div style={{ height: "10px" }} />
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
              name="lastName"
              value={lastName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div style={{ height: "10px" }} />
          <div className="col-12">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div style={{ height: "10px" }} />

          <div className="col-12">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div style={{ height: "10px" }} />

          <div className="col-12">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              name="re_password"
              value={re_password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br />
          <button type="submit" className="btn-login">
            Agree and Sign Up
          </button>
        </form>

        <p className="terms">
          By signing up, you agree to the Terms and Conditions and Privacy
          Policy.
        </p>
        <p className="terms">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignUpPage);
