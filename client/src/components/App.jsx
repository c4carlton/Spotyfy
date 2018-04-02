import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Player from './Player.jsx'
import Filter from './Filter.jsx'
import Playlist from './Playlist.jsx';
import query from 'query-string'
import Spotify from 'spotify-web-api-node'

const spotifyWebApi = new Spotify()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        track: "",
        artist: "",
        album: "",
        albumArt: "",
        id: ""
      }
    }
  }
  
  componentWillMount() {
    let parsed = query.parse(window.location.hash);
    let accessToken = parsed.access_token
    console.log(accessToken)

    fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then((response) => response.json())
      .then(data => {
        console.log(data.item)
        this.setState({
          current: {
            track: data.item.name,
            artist: data.item.artists[0].name,
            album: data.item.album.name,
            albumArt: data.item.album.images[0].url,
            id: data.item.artists[0].id
          }
        })
        console.log(this.state.current)
      })
    // fetch replaces ajax
    // has promises built in
    // 1st arg is endpoint 2nd is header
    
  }

  // getNowPlaying() {
  //   spotifyApi.getMyCurrentPlaybackState()
  //   .then((response) => {
  //     this.setState({
  //       nowPlaying: {
  //         name: response.item.name
  //         albumArt: response.item.album.images[0].url
  //       }
  //     })
  //   })
  // }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

render() {
  return(
    <div>
      <h1>Carltonify</h1>
      <h2> 
      <a href="http://localhost:8888">
          <button>Log in with Spotify</button>
        </a>
      </h2>
      <Playlist current={this.state.current}/>
    </div>
  )
 }
}

export default App;
