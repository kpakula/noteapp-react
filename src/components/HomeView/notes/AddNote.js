import './AddNote.css';

import axios from 'axios';
import React, { Component, useState } from 'react';
import { Col, Row } from 'react-bootstrap/';

function AddNote({ hidePopup }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleTitleInput = event => {
    setTitle(event.target.value);
  };

  const handleText = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/notes", {
        login: localStorage.getItem("login"),
        title: title,
        text: text
      })
      .then(res => {
        hidePopup();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Row className="justify-content-center align-items-center h-100">
      <Col xs={10} sm={8} md={5} lg={4} className="leftSide">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputTitle">Title</label>
            <input
              type="text"
              className="form-control mb-0"
              id="exampleInputTitle"
              placeholder="Enter title"
              value={title}
              onChange={handleTitleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Text</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={text}
              onChange={handleText}
              placeholder="Enter text"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-secondary w-50 mt-2">
            Add
          </button>
        </form>

      </Col>
    </Row>
  );
}

export default AddNote;
