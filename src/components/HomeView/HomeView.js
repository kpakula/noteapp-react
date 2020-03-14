import './HomeView.css';

import axios from 'axios';
import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

import Note from './notes/Note';

class HomeView extends Component {
  state = {
    allNotes: []
  };

  updateAllNotes = note => {
    var notes = [...this.state.allNotes];
    const without = notes.filter(n => {
      return parseInt(n.key) !== note;
    });

    this.setState({ allNotes: without });
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/notes/my/${localStorage.getItem("login")}`)
      .then(res => {
        const items = res.data.map(note => (
          <Col xl={2} lg={3} md={4} sm={6} xs={12} key={note.id}>
            <Note noteData={note} updateAllNotes={this.updateAllNotes} />
          </Col>
        ));

        this.setState({ allNotes: items });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showPopup = () => {
    console.log("Show");
  };

  hidePopup = () => {
    console.log("Hide")
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/notes/add">
            <Button className="btn btn-secondary mt-5">Add note +</Button>
          </Link>
        </div>
        

        {/* Test component */}
        <Button data-modal-target="#custom-modal" className="btn" onClick={this.showPopup}>
          Test
        </Button>
        <div className="card-deck justify-content-center mt-5">
          {this.state.allNotes}
        </div>


        <div className="custom-modal" id="custom-modal">
          <div className="custom-modal-header">
            <div className="custom-modal-title">Example Modal</div>
            <button data-close-button className="custom-modal-close-button">&times;</button>
          </div>
          <div class="custom-modal-body">
            Laborum non ipsum do eu nisi duis. Dolor in mollit commodo commodo.
            Dolore esse non laborum ut nisi ea reprehenderit irure dolor.
            Nostrud adipisicing fugiat quis eiusmod fugiat do. Exercitation nisi
            sint labore esse ex laboris ullamco non laborum ut esse qui
            consectetur. Aute pariatur fugiat est nostrud laboris eiusmod mollit
            tempor ad. Eu aute et in amet occaecat eu non. Ad laboris qui dolore
            Lorem esse magna occaecat. Ullamco adipisicing reprehenderit nulla
            fugiat excepteur. Enim incididunt incididunt aliquip cillum ullamco
            sit. Labore laboris cillum mollit et in in dolore ullamco dolore ea
            qui sunt. Voluptate nisi consequat Lorem enim ad anim ea voluptate.
            Fugiat nostrud dolor ipsum pariatur enim Lorem aliquip cupidatat
            laborum tempor non deserunt esse non. Tempor in ad enim duis. Et
            cillum duis esse ad officia labore et cupidatat velit quis tempor
            pariatur qui. Fugiat dolore nisi adipisicing ullamco est eiusmod

          </div>
        </div>
        <div class="" id="custom-overlay"></div>

      </div>
    );
  }
}

export default withRouter(HomeView);
