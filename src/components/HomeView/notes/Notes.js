import React from 'react';
import { Col } from 'react-bootstrap';

import Note from './Note';

function Notes({ allNotes, updateAllNotes }) {

  return (
    <div className="card-deck justify-content-center mt-5">
      {allNotes.map(note => (
        <Col xl={2} lg={3} md={4} sm={6} xs={12} key={note.id}>
          <Note noteData={note} updateAllNotes={updateAllNotes}/>
        </Col>
      ))}
    </div>
  );
}

export default Notes;
