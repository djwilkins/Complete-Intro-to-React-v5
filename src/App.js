import React from 'react';
import { render } from 'react-dom'; // like destructuring but for module import
import { Pet } from './Pet';

const App = () => {
  return React.createElement(
    "div",
    { id: "something-important" }, // any attributes go here
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Scout",
      animal: "Dog",
      breed: "Chihuahua",
    }),
    React.createElement(Pet, {
      name: "Whiskers",
      animal: "Cat",
      breed: "Mixed",
    })
  );
};
render(React.createElement(App), document.getElementById("root"));
