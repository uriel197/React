import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [answer, setAnswer] = useState(false);

  const handleButton = () => {
    setAnswer(!answer);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleButton}>
          {answer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {answer && <p className="question">{info}</p>}
    </article>
  );
};

export default Question;
