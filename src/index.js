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
        return <Book key={book.id} book={book}></Book>; /* 1 */
      })}
    </section>
  );
}

// Adding props:
const Book = (props) => {
  const { img, title, description, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="book cover" />
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

/************ COMMENTS ***********

***1: In the provided code, the line "<Book book={book}></Book>" is part of the BookList component.  this line is creating and rendering a Book component for each book in the books array, and it's passing the corresponding book object as a prop named book to each Book component. The Book component then uses this prop to display the details of the book, such as the title, description, author, and image.
The choice of naming the prop as book is arbitrary and determined by the developer who wrote the code. In React, when you create a component and pass data to it using props, you can choose any valid JavaScript identifier as the name for the prop.
In this specific case:
<Book book={book}></Book>
The prop being passed is named book, and it receives the current book object from the map iteration over the books array. The decision to name it book is likely based on the context of the application. Since each iteration represents a book from the array, using a prop name like book makes sense for clarity and readability.

key={book.id} The key attribute is used in React when rendering a list of elements to help React identify which items have changed, been added, or been removed. It is important for optimizing the performance of rendering lists.
Here's why using a key is important:

Efficient Reconciliation: React uses the key to efficiently update the DOM when the list of items changes. When a list is re-rendered, React needs a way to quickly identify which items have been added, removed, or changed. The key helps React perform this reconciliation more efficiently.

Avoiding Unnecessary Re-renders: Without a unique key, React may have to re-render the entire list when any change occurs. With a key, React can identify specific elements and update only the elements that have changed, leading to better performance.

Stable Identity for Components: The key provides a stable identity for each component instance. This is important when React is managing the state of components, such as when you have components with local state or components that maintain focus or scroll position.
*/
