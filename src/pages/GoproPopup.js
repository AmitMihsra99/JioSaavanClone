// Popup.js
import React, { useState } from 'react';
import './pagecss.css';

function GoproPopup({ text }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="popup-container">
      <button className="popup-button" onMouseEnter={togglePopup} onMouseLeave={togglePopup}>
        Here
      </button>
      {showPopup && <div className="popup-content">{text}</div>}
    </div>
  );
}

export default  GoproPopup;
