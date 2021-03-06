import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [view, setView] = React.useState(false);
  const handelClick = () => {
    setView(!view);
  }
  return (
    <div id="main"> 
      // Do not alter the main div
      <button id="click" onClick={handelClick}>
        {view === true ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </button>
    </div>
  );
}


export default App;
