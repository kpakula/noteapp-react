import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Register.css";

export default function Register() {
  return (
    <Row className="justify-content-center align-items-center h-100">
      <Col sm={8} md={5} lg={4} className="leftSide">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-secondary mt-2">
              Login
            </button>
          </form>
      </Col>
      {/* <Col className="rightSide">Right</Col> */}
    </Row>
  );
}
