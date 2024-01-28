import React from "react";

const Book = (props) => {
  const { img, title, description, author } = props;
  const buttonHandler = () => alert(`clicked on ${title} ${author}`);
  const onHover = () => console.log(author);
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

export default Book;
