import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import "./HomeView.css";
import Note from "./notes/Note";
import axios from "axios";
import { Link, withRouter, Redirect } from "react-router-dom";

class HomeView extends Component {
  state = {
    allNotes: []
  };

  updateAllNotes = (note) => {
      var notes = [...this.state.allNotes];
      notes.splice(note.id, 1);
      this.setState({allNotes: notes})
  }


  componentDidMount() {
    axios.get(`http://localhost:8080/notes/my/${localStorage.getItem("login")}`)
    .then(res => {
        const items = res.data.map((note) => (
        <Col xl={2} lg={3} md={4} sm={6} xs={12} key={note.id}>
            <Note noteData={note} updateAllNotes={this.updateAllNotes}/>
        </Col>
        ))

        this.setState({ allNotes: items });
    })
    .catch(err => {
        console.log(err)
    })
  }


  render() {
    return (
      <div>
        <div>
            <Link to="/notes/add">
                <Button className="btn btn-secondary mt-5" >Add note +</Button>
            </Link>
        </div>
        <div className="card-deck justify-content-center mt-5" >
          {this.state.allNotes}
        </div>
      </div>
    );
  }
}

export default withRouter(HomeView)