import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";

const LoginComponent = ({ authenticateUser, authenticated }) => {
  return (
    <div
      className="card bg-dark border-warning p-3 col-6"
      style={{ margin: "20px auto", float: "none" }}
    >
      <h2 className="card-header text-white bg-dark">Please Login</h2>
      <form className="card-body" onSubmit={authenticateUser}>
        <input
          type="text"
          placeholder="username"
          name="username"
          defaultValue="Dev"
          className="form-control"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          defaultValue="User1"
          className="form-control mt-2"
        />
        {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p>Login incorrect</p>
        ) : null}
        <button
          type="submit"
          className="form-control mt-3 btn btn-dark btn-outline-warning btn-normal w-25 float-right"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target[`username`].value;
    let password = e.target[`password`].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  },
});

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
