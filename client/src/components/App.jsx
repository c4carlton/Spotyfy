import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReactAudioPlayer from 'react-audio-player'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
render() {
  return(
    <div>
      <h1>'Music Player Time'</h1>
      <ReactAudioPlayer
        src="my_audio_file.ogg"
        autoPlay
        controls
      />
    </div>
  )
 }
}

export default App;
