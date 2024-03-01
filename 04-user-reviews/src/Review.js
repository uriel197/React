import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];

  const prevButton = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex >= people.length) newIndex = 0;
      return newIndex;
    });
  };

  const nextButton = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) newIndex = people.length - 1;
      return newIndex;
    });
  };

  return (
    <>
      <div className="container">
        <div className="review">
          <div className="img-container">
            <img className="person-img" src={image} alt={name} />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h3 className="author">{name}</h3>
          <h2 className="job">{job}</h2>
          <p className="info">Description: {text}</p>
          <button className="prev-btn" onClick={prevButton}>
            <FaChevronLeft />
            prev
          </button>
          <button className="next-btn" onClick={nextButton}>
            next
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
