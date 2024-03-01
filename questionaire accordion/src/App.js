import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

/************* COMMENTS **************

***Note: if we instead wanted to pass the "Question" component directly inside our "App" function like this:
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers</h3>
        <section className="info">
          {questions.map((question) => {
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
	    )
          })}
        </section>
      </div>
    </main>
  );
}

we would encounter a small Bug. every time you clicked on 1 of the buttons, the "handleButton" function would be activated in "All" the buttons, why?

In the first version of your code, where you have a separate SingleQuestion component, each question maintains its own state because each SingleQuestion component has its own instance of the useState hook managing its state independently. This is why each button works independently.

However, in the alternative version, where we embed the question logic directly within the App component's map function, we're encountering the issue because the state is not being managed separately for each question. In this case, the handleButton function and answer state are shared among all questions because they are defined within the scope of the App component and not within each question.

*/
