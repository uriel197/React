import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import { books } from "./books";  /* 1 */
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

***1: The use of curly braces {} in the import statement is related to the way modules are exported in JavaScript.

import { books } from "./books";

When you see curly braces around the import, it typically means that the module you are importing is using named exports. In the ./books module, there is likely a named export named books.
If in your ./books file, you have something like export const books = [...], then you need to use curly braces to import the named export.
import Book from "./Book";

When there are no curly braces, it usually means that the module is using the default export. In the ./Book module, there is likely a default export, which is the single value or object/function that is considered the "default" export for that module.
If in your ./Book file, you have something like export default Book;, then you can import it without curly braces.
*/
