import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import sha256 from "js-sha256";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  handleSubmit = event => {
    console.log(
      `Login: ${this.state.login} \n Password: ${this.state.password}`
    );
    console.log(sha256(this.state.password))
    event.preventDefault();
  };

  handleLoginInput = event => {
    this.setState({ login: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={10} sm={8} md={5} lg={4} className="leftSide">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputLogin">Login</label>
              <input
                type="email"
                className="form-control mb-0"
                id="exampleInputLogin"
                placeholder="Enter login"
                value={this.state.login}
                onChange={this.handleLoginInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
            </div>
            <small id="emailHelp" className="form-text text-light">
              You don't have account?{" "}
              <Link className="text-dark" to="/signup">
                <b>Sign up</b>
              </Link>
            </small>

            <button type="submit" className="btn btn-secondary w-50 mt-2">
              Login
            </button>
          </form>
        </Col>
      </Row>
    );
  }
}
