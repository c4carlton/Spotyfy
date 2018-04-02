import React from 'react'

const Playlist = (props) => {
    return(
      <div style={{display: 'inline-block', width: "25%"}}>
        <img/>
        <h3>Currently Playing</h3>
        <h2><img src={props.current.albumArt} style={{ height: 150 }}/></h2>
        <ul>
          <li>{props.current.artist}</li>
          <li>{props.current.track}</li>
          <li>{props.current.album}</li>
        </ul>
        </div>
    )
}

// const Player = (props) => {
//   return (
//     <div style={{width: "40%", display: "inline-block"}}>
//       <h2 style={{color: 'black'}}>Number Text</h2>
//     <ReactAudioPlayer
//       src=""
//       autoPlay
//       controls
//     />
//     </div>
//   )
// }

export default Playlist