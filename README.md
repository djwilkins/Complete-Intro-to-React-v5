# Complete Intro to React v5

This repo is my commits from going through the Frontend Masters [Complete Intro to React v5](https://frontendmasters.com/courses/complete-react-v5/) with [Brian Holt](https://frontendmasters.com/teachers/brian-holt/).

The official repo for the course is available [here](https://github.com/btholt/complete-intro-to-react-v5) and the course documentation [here](https://btholt.github.io/complete-intro-to-react-v5/).  Although, because of changes in React Router since v5 was created, I did in some ways diverge in following the yet unreleased in video form v6 docs [here](https://btholt.github.io/complete-intro-to-react-v6/).

## Purpose

The purpose of this README will be for me to summarize what I learned during the course to help cement my learning and for ease of future reference.

## Getting Started

Brian begins the course rather brilliantly by giving students their first taste of REACT syntax with the quickest setup possible. As reflected in [my initial commit](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/9353ed97ffd213f27eb37a1ff68896b436f9b478), this involved pulling react in from online in a <script> tag (CDN style) and writing some very basic react in another <script> tag in index.html directly.  Not a best practice - just a nice way to moving quickly.

That very basic React is simple a [function component](https://reactjs.org/docs/components-and-props.html "See Function vs Class Component distinction in official docs here") called App that returns a header element wrapped in a div element.

## Function Components and Props

After spawing off our React js into its own App.js file ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/e5614e021c2a966e45d1469e24606a43f277b18c)), we then add a new **function component** called <Pet> and utilize it three times in our <App> component ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/fa896f4667f14b00329277e53535fb771614337e)).

We then implement [props](https://reactjs.org/docs/components-and-props.html) by passing them down from our <App> componant into each <Pet> component one by one ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/4a0d7444970f30a161a94c4d4de39209f7082fe0)). 

We also learn to utilize destructuring (JS ES6) in passing props to avoid redundant dot notation in our child component ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/e482f4e07c5efa5e20ebd752fb9509155ab036a2)).

## Node.js and Tooling

Next we initialize our project folder with "npm init -y" so we can start managing packages in a package.json file ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/ab299694f4cf7e97728a98b9f3d15f5de26195a4)) and add a .gitignore to avoid commiting packages installed under node_modules to git ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/1fe82d24b7f90a7699ba62320a8e170345b621b3)).

We npm install [prettier](https://prettier.io/), add and add some prettier configurations to our package.json ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/75dc9f80159ac12596aae12c443ef4f3bc089768)) and through a .prettierrc.js file ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/e7aca728e7b1073793af8ee6a1f0dd21a63444d0)).

We npm install [eslint](https://eslint.org/) ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/b03cf543e0077685fc0018e7a0fc77e4f3ec6aa6)) and add some eslint configurations to our package.json and through a .eslintrc.json ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/1fe326ba2bb451ac14474aef69401da8756b8c8d)).

Why both? Prettier is more concerned with generic things like spacing where as Eslint's goes further with opinionation on coding best practices (like not declaring unused variables).

Finally, we update our .gitignore to exclude additional files ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/a562a3079a72b91301b49b369241c2d73caa315f)).

## Parcel & Bundling React Locally

Next we install [Parcel](https://parceljs.org/) which is an alternative to Webpack.

And npm install React (react/react-dom) to include/package it locally, remove our CDN links of it from before and import it from local packages instead ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/72d0f99325fbd50aa5d3749e3328bef12dc4a060))

## Spawning Pet.js and JSX Implementation

We continue getting things setup more propertly by spawning the <Pet> component off into its own file ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/c35cf38ef9cea0d4e96b3eb1f7f4e7ce7fdb4d89)). And implement the alternate "Default export pattern" ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/af67f6ee17a3bcd250804ac79741222fcea8ba0d)).

And more importantly, implement [JSX](https://reactjs.org/docs/jsx-in-depth.html) syntax in both our <Pet> (Pet.js) and <App> (App.js) components ([here](([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/720c127130f1e9e8ddb7aef8f9d8ddf4f5cfbe98)) and [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/e32e4da9efe11b41c3bf2e3d0da9a60b8e9ee447)).

We also update our Eslint congifuations to under React/JSX ([here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commit/1462d6d297e4b2b4c43cb7ade03f88dc21ba9c55)).

## SearchParams Component and useState Hook

<u>**PICKUP ON SUMMARIZING COMMITS HERE**</u>