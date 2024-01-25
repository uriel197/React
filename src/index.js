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

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/812XbpMDovL._AC_UL600_SR600,400_.jpg"
    alt="book cover"
  />
);
const Title = () => <h2>A Court of Mist and Fury</h2>;
const Author = () => <h4>by Sarah J. Maas </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
