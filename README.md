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

# Hooks

useState is an example of a React Hook. Other React methods beginning with "use" are also Hooks (useEffect, useCallback, useMemo, even custom Hooks.)

Note: Hooks should never go inside if statements or for loops.
(This ensures that hooks are always called in a consistent order for every component render - which is required.)

Along with other updates to eslintrc.json in this commit, this adds eslint rules for hooks (including enforcing the above):

- npm -i -D eslint-plugin-react-hooks

For eslint "rules" trailing number (ie. "no-console": 1)

- 0 is turn off
- 1 is warn
- 2 is throw error

useEffect is another type of React Hook.

See comments in SearchParam.js for explanation of implementation there.

Some other notes:

- An empty array [] can be passed as an effects dependencies to tell it that it should only one once (zero dependencies to trigger re-running based on state changing for.)
- useEffect, unlike the current SearchParams.js implementation, can take/define multiple effects at once and not just one.

useEffect and useState are the two primary React hooks you'll use.

# React Builds: Dev vs Production

For webpack, need to set NODE_ENV=development (or production)
With parcel, this is done automatic based on command run.

Note: Build for development environment is larger and slower.

Build as its own "Strict Mode" which will provide extra warnings if using any unstable features.

# React Strict Mode

Requires wrapping your app in <React.StrictMode></React.StrictMode>

# React Dev Tools

Available extensions for Chrome and Firefox

# Using Fallback API

We installed "cross-env" so we can mock the Petfinder.com api in case their api is not working.

$ npm install -D cross-env

See also new "dev:mock" entry in package.json
