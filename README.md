# Complete Intro to React v5

This repo is my commits from going through the Frontend Masters [Complete Intro to React v5](https://frontendmasters.com/courses/complete-react-v5/) with [Brian Holt](https://frontendmasters.com/teachers/brian-holt/).

The official repo for the course is available [here](https://github.com/btholt/complete-intro-to-react-v5) and the course documentation [here](https://btholt.github.io/complete-intro-to-react-v5/).  Although, because of changes in React Router since v5 was created, I did in some ways diverge in following the yet unreleased in video form v6 docs [here](https://btholt.github.io/complete-intro-to-react-v6/).

## Purpose

The purpose of this README will be for me to summarize what I learned during the course to help cement my learning and for ease of future reference.  (*I've moved my original README.md content of notes taking during the course to [here](./NOTES.md).*)

## Getting Started

Brian begins the course rather brilliantly by giving students their first taste of REACT syntax with the quickest setup possible. As reflected in [my initial commit](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/9353ed97ffd213f27eb37a1ff68896b436f9b478), this involved pulling react in from online in a <script> tag (CDN style) and writing some very basic react in another <script> tag in index.html directly.  *(Not a best practice - just a nice way to get moving quickly.)*

That very basic React is simply a [function component](https://reactjs.org/docs/components-and-props.html "See Function vs Class Component distinction in official docs here") called App that returns a header element wrapped in a div element.

## Function Components and Props

After spawing off our React js into its own App.js file ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/e5614e021c2a966e45d1469e24606a43f277b18c)), we then add a new **function component** called Pet and utilize it three times in our App component ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/fa896f4667f14b00329277e53535fb771614337e)).

We then implement [props](https://reactjs.org/docs/components-and-props.html) by passing them down from our App component into each Pet component one by one ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/4a0d7444970f30a161a94c4d4de39209f7082fe0)). 

We also learn to utilize [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) (JS ES6) in passing props to avoid redundant dot notation in our child component ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/e482f4e07c5efa5e20ebd752fb9509155ab036a2)).

## Node.js and Tooling

Next we initialize our project folder as a node project (with "npm init -y") so we can start managing packages in a package.json file ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/ab299694f4cf7e97728a98b9f3d15f5de26195a4)) and add a .gitignore to avoid commiting packages installed under node_modules to git ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/1fe82d24b7f90a7699ba62320a8e170345b621b3)).

We npm install [prettier](https://prettier.io/), add and add some prettier configurations to our package.json ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/75dc9f80159ac12596aae12c443ef4f3bc089768)) and through a .prettierrc.js file ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/e7aca728e7b1073793af8ee6a1f0dd21a63444d0)).

We npm install [eslint](https://eslint.org/) ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/b03cf543e0077685fc0018e7a0fc77e4f3ec6aa6)) and add some eslint configurations to our package.json and through a .eslintrc.json ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/1fe326ba2bb451ac14474aef69401da8756b8c8d)).

Why both? Prettier is more concerned with generic things like spacing where as Eslint's goes further with opinionation on coding best practices (like not declaring unused variables).

Finally, we update our .gitignore to exclude additional files ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/a562a3079a72b91301b49b369241c2d73caa315f)).

## Parcel & Bundling React Locally

Next we install [Parcel](https://parceljs.org/) which is an alternative to [Webpack](https://webpack.js.org/).

And npm install React (react/react-dom) to include/package it locally, remove our CDN links of it from before and import it from local packages instead ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/72d0f99325fbd50aa5d3749e3328bef12dc4a060))

## Spawning Pet.js and JSX Implementation

We continue refactoring by spawning the Pet component off into its own file ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/c35cf38ef9cea0d4e96b3eb1f7f4e7ce7fdb4d89)). And implement the alternate "Default export pattern" with it ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/af67f6ee17a3bcd250804ac79741222fcea8ba0d)).

More importantly, we next implement [JSX](https://reactjs.org/docs/jsx-in-depth.html) syntax in both our Pet (Pet.js) and App (App.js) components ([here](([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/720c127130f1e9e8ddb7aef8f9d8ddf4f5cfbe98)) and [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/e32e4da9efe11b41c3bf2e3d0da9a60b8e9ee447)).

We also update our Eslint congifuations to understand React/JSX ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/1462d6d297e4b2b4c43cb7ade03f88dc21ba9c55)).

## SearchParams Component and useState Hook

Next we added a new SearchParams component ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/4e776274cba08a0c2cb47356ffd57683460dda7e)) and implemeneted managing it's input element value's sate with the useState Hook ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/ef6ad751e6644b0bfd24263bc9ff380fa2202910)).

We updated our eslint configurations to include React Hook rules and I captured some Hook usage comments [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/bbbbd751178a663ecb5a215d3cc0e0f6463771a0).

## Pet API

Next we install the Frontend Masters Pet API package and import it's ANIMALS array in our SearchParams component ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/4e44eb0601674685c4b04824d9c0b150e81e204f)) and then add a new select element to our SearchParams form for animal, populate its options with ANIMALS.map and track the animal selected with a new useState value ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/ba5737ce8821fa39986cb5a12a4f51c751873ba9)).

WIth React, "Each child in a list should have a unique 'key' prop" and we address this with a "key" attribute [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/ab1750b3e24d32f9b805b35d51af709e7c883370). (*Similar to angularjs requiring a unique id for elements spawned from an array with ng-repeat.*) 

## Breed and Custom Dropdown Hook

Next we expand our SearchParams component with useState hooks for two more values (breed and breeds) and add a new form select element for choosing the breed from breeds [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/61699b0c6e1ec4d19526ef9cf0665c5e1612b27f#diff-a1c641477cd8005d163fd088b5c4e46462256c97e58fada1e42d44ab4b823c28). (We will be loading "breeds" from the api per another update.)

But first, we create a **<u>custom Hook</u>** called useDropdown that abstracts the common facets of our animal and breed dropdowns and utilizes that new dropdown to refactor/simplify our SearchParmams component code ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/5cf5b2189220a3aa66fd7a263ae7a9a1e06d22a0))

## useEffect Hook

We further expand our SearchParams component with a useEffect hook, which is a hook that runs after the component has rendererd the 1st time. This hook provides for functional components (like our SearchParams) what used to only be available in React through class component methods.

We start with a simple implementation [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/011570c295e53dbdc049c9024552cdd279af08a4) that pulls the breeds from the Frontend Masters pet api for our default anamal ("dogs") and writes the result to the console.  We then update [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/4d21aee2c5d421a52ab90ba7a546b02027f20737) to (1) reset breed/breeds to nothing, (2) populate the breeds (dropdown options) based on the current animal (api returns) and (3) rerun each time animal changes.

(We also update our destructuring of animal breeds from the api to be referred to with the alias apiBreeds to distinguish from our state tracked value of the same name [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/941431b8cb9455ef3f292ddb5dbb7a649b0c4289).

## React Strict Mode, Dev v. Prod Builds and Dev Tools

We implement React Strict mode by wrapping our App component returns in a special React.StrictMode component and also discuss differences between dev and production builds using Parcel vs Webpack and finally, the availability/value of React Dev Tools for Chrome and Firefox is mentioned (all [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/f5d11c459253ec51fbb05bbe9691e55fc2ea6d18)).

*NEXT COMMIT IS "Implement Async Function"*