import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
<Row className="justify-content-center align-items-center h-100">
      <Col xs={10} sm={8} md={5} lg={4} className="leftSide">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Login</label>
            <input
              type="email"
              class="form-control mb-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter password"
            />
          </div>
          <small id="emailHelp" class="form-text text-light">You don't have account? <Link to="/signup">Sign up</Link></small>

          <button
            type="submit"
            class="btn btn-secondary w-50 mt-2"
          >
            Login
          </button>
        </form>
      </Col>
    </Row>
  );
}
