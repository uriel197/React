import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import { books } from "./books";
import Book from "./Book";

// nested Components:
function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>; /* 1 */
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

/************ COMMENTS ***********

***1: <Book key={book.id} {...book}></Book>;
We are still rendering the Book component, but there's a change in how the book prop is passed.
key={book.id} remains, providing a unique identifier for each book.
{...book} is the spread operator, which spreads the properties of the book object as separate props for the Book component.
Destructuring in Book Component:

const { img, title, description, author } = props;
Instead of explicitly accessing props.book, we are now directly destructuring the properties from the props object, meaning "props" is back to being a single object with the properties { img, title, description, author } as opposed to being an object that contains the object book.
This assumes that the Book component receives the entire book object as props.
So, with the spread operator {...book}, we are essentially passing each property of the book object as a separate prop to the Book component. Then, in the Book component, you can destructure those props directly.

This approach is convenient and concise, as it allows you to pass all properties of the book object to the Book component without explicitly specifying each one.

*/
