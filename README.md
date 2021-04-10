# adopt-me

# installed eslint with this command:

npm install -D eslint-config-prettier

# installed parcel with this command

# Note: parcel is an alternative to webpack

npm install -D parcel-bundler

# installed react and react-dom to install locally

# (And no longer link this in from a cdn)

npm i react react-dom

# Before "Update and reconfigure Eslint for React/JSX" commit:

# Installed these packages so eslint understands react/JSX

# (ie. doesn't think import React not used cause of JSX

# not written to use it directly)

npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

# Also updated .eslintrc "extends" (sets of rules) and "plugins" (abilities) to utilize the above, "rules" (to not use type script for now and allow console logging with a warning)
