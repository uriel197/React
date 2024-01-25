import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

// Book objects
const firstBook = {
  img: "./images/book-1.jpg",
  title: "A Court of Mist and Fury",
  description: "A Court of Thorns and Roses, 2",
  author: "by Sarah J. Maas",
};

const secondBook = {
  img: "./images/book-2.jpg",
  title: "The Psychology of Money",
  description: "Timeless lessons on wealth, greed, and happiness",
  author: "by Morgan Housel",
};

const thirdBook = {
  img: "./images/book-3.jpg",
  title: "Forgiving What You Can't Forget",
  description:
    "Discover How to Move On, Make Peace with Painful Memories, and Create a Life Thats Beautiful Again",
  author: "by Lysa TerKeurst ",
};

// nested Components:
function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        description={firstBook.description}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        description={secondBook.description}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        description={thirdBook.description}
        author={thirdBook.author}
      >
        <p>On paperback only!</p> {/* 1 */}
      </Book>
    </section>
  );
}

// Adding props:
const Book = (props) => {
  const { img, title, description, author } = props;
  return (
    <article className="book">
      <img src={img} alt="book cover" />
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>{author}</h4>
      {props.children} {/* 1 */}
    </article>
  );
};

{
  /* Adding props destructuring:
const Book = ({ img, title, author }) => {
   return (
     <article className="book">
       <img src={img} alt="book cover" />
       <h2>{title}</h2>
       <h4>{author}</h4>
     </article>
   );

} */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

/************ COMMENTS ************

***1: children are used when you want to add something to only 1 of the components 
*/
