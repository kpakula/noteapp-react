import './Register.css';

import axios from 'axios';
import sha256 from 'js-sha256';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';

function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/signup", {
        login: login,
        password: sha256(password).toLowerCase()
      })
      .then(res => {
        if (res.data) {
          setValid(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleLoginInput = event => {
    setLogin(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <Row className="justify-content-center align-items-center h-100">
      <Col xs={10} sm={8} md={5} lg={4} className="leftSide">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputLogin">Register</label>
            <input
              type="text"
              className="form-control mb-0"
              id="exampleInputLogin"
              placeholder="Enter login"
              value={login}
              onChange={handleLoginInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter password"
              value={password}
              onChange={handlePassword}
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

        {isValid && <Redirect to="/signin" />}
      </Col>
    </Row>
  );
}

export default withRouter(Register);
