import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

// nested Components:
function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="./images/book-1.jpg" alt="book cover" />;
const Title = () => (
  <h2 style={{ color: "red", fontSize: "1.2rem" }}>A Court of Mist and Fury</h2>
);

// Another way to inline style is:
// const Title = () => (
//     const inLineStyling = { color: "red", fontSize: "1.2rem" }
//   <h2 style={inLineStyling}>A Court of Mist and Fury</h2>
// );

const Author = () => <h4>by Sarah J. Maas </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
