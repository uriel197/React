import React, { useState } from "react";
import Review from "./Review";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <section className="container">
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
  );
}

export default App;
