import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddNote from "../notes/AddNote";
import './AddNotePopup.css'
function Popup({ addNote }) {
  const [isActive, setActive] = useState(false);

  const showPopup = () => {
    setActive(!isActive);
  };

  const hidePopup = () => {
    setActive(!isActive);
  };



  return (
    <div>
      <Button className="btn btn-secondary mt-4 top" onClick={showPopup}>
        Add note +
      </Button>
      <div
        className={isActive ? "custom-modal active" : "custom-modal"}
        id="custom-modal"
      >
        <div className="custom-modal-header">
          <div className="custom-modal-title">Add Note</div>
          <button className="custom-modal-close-button" onClick={hidePopup}>
            &times;
          </button>
        </div>
        <div className="custom-modal-body">
          {<AddNote hidePopup={hidePopup} addNote={addNote}/>}
        </div>
      </div>
      <div
        className={isActive ? "active" : null}
        id="custom-overlay"
        onClick={hidePopup}
      ></div>
    </div>
  );
}

export default Popup;
