import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../Actions/auth";
import "./LoginPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage({ isAuthenticated, login }) {
  const [showNotification, setShowNotification] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="LoginPage">
      <div className="login-form">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Sign In</h4>
          <a href="/signup">I don't have an account</a>
        </div>
        <br />
        {showNotification ? (
    <div />
  ) : (
    <div className="errorAlert">
      Error! Wrong Username or Password
    </div>
  )}
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="col-12">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <br />

          <div className="col-12">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              // minLength="6"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn-login">
            Submit
          </button>
        </form>

        <center>
          <div style={{ height: "10px" }} />
          <a href="/reset" className="ResetPassword">
            Can't Sign In
          </a>
        </center>
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

export default connect(mapStateToProps, { login })(LoginPage);
