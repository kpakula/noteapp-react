import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./HomeView.css";
import Note from "./notes/Note";

export default function HomeView() {
  return (
    <div class="card-deck justify-content-center mt-5">
      <Col xl={2} lg={3} md={4} sm={6} xs={12}>
        <Note />
      </Col>
    </div>
  );
}
