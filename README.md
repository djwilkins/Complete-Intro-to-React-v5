# Adopt Me (react intro project)

See commits [here](https://github.com/djwilkins/Complete-Intro-to-React-v5/commits/) primarily and secondarily notes below.

## Setting Up Tooling

installed eslint with this command:

- npm install -D eslint-config-prettier

installed parcel with this command

Note: parcel is an alternative to webpack

- npm install -D parcel-bundler

installed react and react-dom to install locally

(And no longer link this in from a cdn)

- npm i react react-dom

## Implementing JSX

Before "Update and reconfigure Eslint for React/JSX" commit:

Installed these packages so eslint understands react/JSX

(ie. fix so doesn't think import React not used cause of JSX not written to explicitly use React object directly.)

- npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

Also updated .eslintrc "extends" (sets of rules) and "plugins" (abilities) to utilize the above, "rules" (to not use type script for now and allow console logging with a warning)

Note: Brian said that this .eslintrc.json file is basically the .eslintrc.json file he uses for all his projects at this point.

Brian points out that the {} expressions utilized in the Pet component (Pet.js) at this point are limited to anything that can go on the right side of an equal sign (examples: formula, function call, ternary operator/though not a normal if statement, etc.)

Best I can tell, these are basically the react/JSX version of ES6 template literals.
