import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault(); //prevents default react behaviour on forms on clicking the submit button
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name} //controlled components use the value from state 'single source of truth'
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
