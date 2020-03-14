import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddNote from "../notes/AddNote";
import './AddNotePopup.css'
function Popup() {
  const [isActive, setActive] = useState(false);

  const showPopup = () => {
    setActive(!isActive);
    console.log("Show");
  };

  const hidePopup = () => {
    setActive(!isActive);
    console.log("Hide");
  };

  const clickOuterOverlay = () => {
    setActive(!isActive);
  };
  return (
    <div class>
      <Button className="btn" onClick={showPopup}>
        Test
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
          {<AddNote/>}
        </div>
      </div>
      <div
        className={isActive ? "active" : null}
        id="custom-overlay"
        onClick={clickOuterOverlay}
      ></div>
    </div>
  );
}

export default Popup;
