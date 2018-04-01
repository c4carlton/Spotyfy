import React from "react";
import ReactDOM from "react-dom";
import ReactAudioPlayer from 'react-audio-player'

const Player = (props) => {
  return (
    <div style={{width: "40%", display: "inline-block"}}>
      <h2 style={{color: 'black'}}>Number Text</h2>
    <ReactAudioPlayer
      src=""
      autoPlay
      controls
    />
    </div>
  )
}

export default Player;
