import React from 'react';
import './musiccss.css';

function Musicplayer(props) {
  return (
    <div className="App">
      
      <div className="music-player">
        <audio controls>
        <source src={props?.data} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default Musicplayer;
