import React from "react";
import axios from "axios";

export default function Note(props) {
  const deleteClickHandler = (event) => {
    event.preventDefault();
    console.log("Kliknieto delete")
    console.log(props.noteData.id)
    axios.delete(`http://localhost:8080/notes/${props.noteData.id}`)
    .then(res => {
        console.log("Usunieto")
        props.updateAllNotes(props.noteData.id)
    })
    .catch(err => {
        console.log("Error")
    })
  }

  const handleOnClick = (event) => {
    event.preventDefault();
    console.log("Kliknieto body")
  }

  return (
    <div className="card text-white bg-warning mb-3 customCard mx-auto text-secondary">
      <div className="note-header">
        <span className="note-close" onClick={deleteClickHandler}>
          <i className="fas fa-times"></i>
        </span>
      </div>
      <div className="card-header">Note {props.noteData.id}</div>
      <div className="card-body" onClick={handleOnClick}>
        <h5 className="card-title">{props.noteData.title}</h5>
        <p className="card-text">
          {props.noteData.text}
        </p>
      </div>
    </div>
  );
}
