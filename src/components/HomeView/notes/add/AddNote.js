import "./AddNote.css";

import axios from "axios";
import React, { useState } from "react";
import { Row } from "react-bootstrap/";
import { CirclePicker } from "react-color";

function AddNote({ hidePopup, addNote }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#ccc");

  const handleTitleInput = event => {
    setTitle(event.target.value);
  };

  const handleText = event => {
    setText(event.target.value);
  };

  const handleColor = color => {
    setColor(color.hex);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(title)
    console.log(text)
    console.log(color)
    axios
      .post("http://localhost:8080/notes", {
        login: localStorage.getItem("login"),
        title: title,
        text: text,
        color: color
      })
      .then(res => {
        hidePopup();

        const note = {
          id: res.data.id,
          title: res.data.title,
          text: res.data.text,
          color: res.data.color
        };

        addNote(note);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Row className="justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="col-12 text-center">
          <div className="note-picker">
            <CirclePicker color={color} onChangeComplete={handleColor} />
          </div>
        </div>
        {/* <div className="col-12">{color}</div> */}
        <div className="col-12 mt-4">
          <input
            type="text"
            className="form-control mb-0"
            id="exampleInputTitle"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleInput}
          />
        </div>
        <div className="col-12 mt-4">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handleText}
            placeholder="Enter text"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary w-50 mt-4">
          Add
        </button>
      </form>

      {/* <Col xs={10} sm={8} md={5} lg={4} > */}
      {/* <form onSubmit={handleSubmit}>
        <CirclePicker/>
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

          <div className="form-group">

          </div>
          <button type="submit" className="btn btn-secondary w-50 mt-2">
            Add
          </button>
        </form> */}
      {/* </Col> */}
    </Row>
  );
}

export default AddNote;
