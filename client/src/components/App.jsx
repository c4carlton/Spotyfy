import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Player from './Player.jsx'
import Filter from './Filter.jsx'
import Playlist from './Playlist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
render() {
  return(
    <div>
      <h1>Carltonify</h1>
      <Player />
      <Player />
      <Filter />
      <Playlist />
      <Playlist />
      <Playlist />
    </div>
  )
 }
}

export default App;
