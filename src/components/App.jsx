import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingName, setHeadingName] = useState("");

  function userInput(event) {
    return setName(event.target.value);
  }

  function userSubmitted(event) {
    setHeadingName(name);
    //forms refresh automatically upon submit; prevent this by
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello, {headingName} </h1>
      <form onSubmit={userSubmitted}>
        <input
          onChange={userInput}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
