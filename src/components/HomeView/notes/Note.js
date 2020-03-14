import React from "react";
import axios from "axios";

export default function Note(props) {
  const deleteClickHandler = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:8080/notes/${props.noteData.id}`)
    .then(res => {
        props.updateAllNotes(props.noteData.id)
    })
    .catch(err => {
        console.log(err)
    })
  }

  // const handleOnClick = (event) => {
  //   event.preventDefault();
  // }

  return (
    <div className="card text-white bg-warning mb-3 customCard mx-auto text-secondary">
      <div className="note-header">
        <span className="note-close" onClick={deleteClickHandler}>
          <i className="fas fa-times"></i>
        </span>
      </div>
      <div className="card-header">Note {props.noteData.id}</div>
      <div className="card-body" >
        <h5 className="card-title">{props.noteData.title}</h5>
        <p className="card-text">
          {props.noteData.text}
        </p>
      </div>
    </div>
  );
}
