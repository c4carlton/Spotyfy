import React from "react";
import ReactDOM from "react-dom";

class Filter extends React.Component {
  render() {
    return (
      <div style={{position: "absolute"}}>
        <img/>
        <input type="text"/>
        <button>Filter Songs</button>
      </div>
    )
  }
}

export default Filter;