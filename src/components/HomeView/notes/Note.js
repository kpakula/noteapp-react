import React from "react";

export default function Note() {
  return (
    <div class="card text-white bg-warning mb-3 customCard mx-auto text-secondary">
      <div className="note-header">
        <span className="note-close">
          <i className="fas fa-times"></i>
        </span>
      </div>
      <div class="card-header">Header</div>
      <div class="card-body">
        <h5 class="card-title">Warning card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
