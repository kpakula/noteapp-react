import './HomeView.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import AddNotePopup from './popup/AddNotePopup';
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

      <Notes allNotes={allNotes} updateAllNotes={updateAllNotes} />
      <AddNotePopup addNote={addNote} />

    </div>
  );
}


export default withRouter(HomeView);
