import React from 'react';
import { Button } from 'react-bootstrap';

function Popup() {
    const showPopup = () => {
        console.log("Show");
      };
    
      const hidePopup = () => {
        console.log("Hide")
      }
  return (
    <div>
      <Button className="btn" onClick={showPopup}>
        Test
      </Button>
      <div className="custom-modal" id="custom-modal">
        <div className="custom-modal-header">
          <div className="custom-modal-title">Example Modal</div>
          <button
            className="custom-modal-close-button"
            onClick={hidePopup}
          >
            &times;
          </button>
        </div>
        <div className="custom-modal-body">
          Laborum non ipsum do eu nisi duis. Dolor in mollit commodo commodo.
          Dolore esse non laborum ut nisi ea reprehenderit irure dolor. Nostrud
          adipisicing fugiat quis eiusmod fugiat do. Exercitation nisi sint
          labore esse ex laboris ullamco non laborum ut esse qui consectetur.
          Aute pariatur fugiat est nostrud laboris eiusmod mollit tempor ad. Eu
          aute et in amet occaecat eu non. Ad laboris qui dolore Lorem esse
          magna occaecat. Ullamco adipisicing reprehenderit nulla fugiat
          excepteur. Enim incididunt incididunt aliquip cillum ullamco sit.
          Labore laboris cillum mollit et in in dolore ullamco dolore ea qui
          sunt. Voluptate nisi consequat Lorem enim ad anim ea voluptate. Fugiat
          nostrud dolor ipsum pariatur enim Lorem aliquip cupidatat laborum
          tempor non deserunt esse non. Tempor in ad enim duis. Et cillum duis
          esse ad officia labore et cupidatat velit quis tempor pariatur qui.
          Fugiat dolore nisi adipisicing ullamco est eiusmod
        </div>
      </div>
      <div className="" id="custom-overlay"></div>
    </div>
  );
}

export default Popup;
