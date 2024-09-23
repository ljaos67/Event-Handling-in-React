import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [focus, setFocus] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }
  function onMouseOver() {
    setFocus(true);
  }
  function onMouseOut() {
    setFocus(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        style={focus ? { backgroundColor: "black" } : {}}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
