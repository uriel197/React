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
    <StrictMode>
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
