import './HomeView.css';

import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import AddNotePopup from './add/AddNotePopup';
import Notes from './notes/Notes';

function HomeView() {
  const [allNotes, setAllNotes] = useState([]);

  const addNote = note => {
    const notes = [...allNotes, note];
    setAllNotes(notes);
  };

  const updateAllNotes = noteId => {
    const notes = [...allNotes];

    const without = notes.filter(n => {
      return n.id !== noteId;
    });
    setAllNotes(without);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/notes/my/${localStorage.getItem("login")}`)
      .then(res => {
        setAllNotes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="card-deck justify-content-center mt-5">
        <AddNotePopup addNote={addNote}/>
        <Notes allNotes={allNotes} updateAllNotes={updateAllNotes}/>
      </div>
    </div>
  );
}

// class HomeView extends Component {
//   state = {
//     allNotes: []
//   };

//   componentDidMount() {
//     axios
//       .get(`http://localhost:8080/notes/my/${localStorage.getItem("login")}`)
//       .then(res => {
//         const items = res.data.map(note => (
//           <Col xl={2} lg={3} md={4} sm={6} xs={12} key={note.id}>
//             <Note noteData={note} updateAllNotes={this.updateAllNotes} />
//           </Col>
//         ));

//         this.setState({ allNotes: items });
//         console.log(items)
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   render() {
//     return (
//       <div>

//         {<AddNotePopup addNote={this.addNote} />}
//       </div>
//     );
//   }
// }

export default withRouter(HomeView);
