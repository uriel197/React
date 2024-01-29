import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// For simple 1 taggers:
// function Greetings() {
//   return <h2>My First Component</h2>;
// }

// another way to do that:
// function Greetings() {
//   return React.createElement("h2", {}, "My First Components");
// }

// to include more than 1 tag:
// function Greetings() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "This is our last Component")
//   );
// }

// the simpliffied version:
// function Greeting2() {
//   return (
//     <div>
//       <h2>My Last Simplified Component</h2>
//     </div>
//   );
// }

// nested Components:
function Greet() {
  return (
    <StrictMode>   /* 1 */
      <div>
        <h2>Uriel Pardes</h2>
        <Job />
        <Age />
      </div>
    </StrictMode>
  );
}

const Job = () => <p>Position: Full Stack Dev</p>;
const Age = () => <p>Age:47</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greet />);


/**************** COMMENTS ****************

***1: In React, StrictMode is a tool designed to highlight potential problems in your application during development. 
It helps you catch common mistakes and use deprecated features by enabling a set of checks. When you wrap your components or 
the entire application in StrictMode, React performs additional checks and warnings.
In our example, all components (Job and Age) within the div inside the StrictMode component will be subject to the additional 
checks provided by StrictMode. It is important to note that these checks only run in development mode and are meant to help you 
identify and fix potential issues before deploying your application to production.

Here are some examples of what StrictMode can catch:

Detecting unsafe lifecycle methods usage.
Detecting legacy string ref usage.
Detecting deprecated findDOMNode usage.
Warning about the use of componentWillReceiveProps.
Detecting unexpected side effects in render functions.
By using StrictMode, you can improve the robustness of your application by catching potential issues early in the 
development process. However, it's worth noting that StrictMode is not intended for use in production builds and should be used 
exclusively during development.

*/