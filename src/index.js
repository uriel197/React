import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

// Book objects:

const books = [
  {
    id: 1,
    img: "./images/book-1.jpg",
    title: "A Court of Mist and Fury",
    description: "A Court of Thorns and Roses, 2",
    author: "by Sarah J. Maas",
  },
  {
    id: 2,
    img: "./images/book-2.jpg",
    title: "The Psychology of Money",
    description: "Timeless lessons on wealth, greed, and happiness",
    author: "by Morgan Housel",
  },
  {
    id: 3,
    img: "./images/book-3.jpg",
    title: "Forgiving What You Can't Forget",
    description:
      "Discover How to Move On, Make Peace with Painful Memories, and Create a Life Thats Beautiful Again",
    author: "by Lysa TerKeurst ",
  },
];

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

// Adding props:
const Book = (props) => {
  const { img, title, description, author } = props;
  const buttonHandler = () => alert(`clicked on ${title} by ${author}`);
  const onHover = () => console.log(author); /* 2 */
  return (
    <article className="book" onMouseEnter={onHover}>
      <img src={img} alt="book cover" />
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>{author}</h4>
      <button type="button" onClick={buttonHandler}>
        Book title
      </button>
    </article>
  );
};

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

***2: 
*/
