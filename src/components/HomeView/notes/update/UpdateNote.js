import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap/';
import { Redirect } from 'react-router-dom';

export default class UpdateNote extends Component {
  state = {
    text: "",
    title: "",
    isValid: false
  };

  componentDidMount() {
    const id = window.location.pathname.split("/")[2];
    axios
      .get(`http://localhost:8080/notes/${id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          text: res.data.text,
          title: res.data.title,
          id: id
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleTitleInput = event => {
    this.setState({ title: event.target.value });
  };

  handleText = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.title, this.state.text);
    axios
      .post("http://localhost:8080/notes", {
        login: localStorage.getItem("login"),
        title: this.state.title,
        text: this.state.text
      })
      .then(res => {
        if (res.data) {
          this.setState({ isValid: true });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={10} sm={8} md={5} lg={4} className="leftSide">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputTitle">Title</label>
              <input
                type="text"
                className="form-control mb-0"
                id="exampleInputTitle"
                placeholder="Enter title"
                value={this.state.title}
                onChange={this.handleTitleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Text</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={this.state.text}
                onChange={this.handleText}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-secondary w-50 mt-2">
              Update
            </button>
          </form>

          {this.state.isValid && <Redirect to="/home" />}
        </Col>
      </Row>
    );
  }
}
