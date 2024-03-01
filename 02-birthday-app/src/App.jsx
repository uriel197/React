import data from "./data";
import React, { useState } from "react";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <section className="container">
        <h1>People's List</h1>
        <List people={people} />
        <button type="button" className="btn" onClick={() => setPeople([])}>
          Clear all
        </button>
      </section>
    </>
  );
}

export default App;
