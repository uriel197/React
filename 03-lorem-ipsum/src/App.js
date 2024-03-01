import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) amount = 0;
    if (amount > data.length) amount = data.length;
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h2>Tired of boring lorem ipsum?</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number" /* 1 */
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

/************* COMMENTS **************

***1: eventhough type="number" if you check typeof count = string.
so we have to convert it to a number with parseInt(count)
*/
