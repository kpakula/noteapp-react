import React, { Component } from "react";
import "./Register.css";
import { Col, Row } from "react-bootstrap";
import { Link, withRouter, Redirect } from "react-router-dom";
import sha256 from "js-sha256";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      isValid: false
    };
  }

  handleSubmit = event => {
    axios
      .post("http://localhost:8080/signup", {
        login: this.state.login,
        password: sha256(this.state.password).toLowerCase()
      })
      .then(res => {
        if (res.data) {
          this.setState({ isValid: true });
        }
      })
      .catch(err => {
        console.log(err);
      });

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
              <label htmlFor="exampleInputLogin">Register</label>
              <input
                type="text"
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
              You have account?
              <Link className="text-dark" to="/signin">
                <b> Sign in</b>
              </Link>
            </small>

            <button type="submit" className="btn btn-secondary w-50 mt-2">
              Register
            </button>
          </form>

          {this.state.isValid && <Redirect to="/signin" />}
        </Col>
      </Row>
    );
  }
}

export default withRouter(Register)
