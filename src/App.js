import React from 'react';
import { render } from 'react-dom'; // like destructuring but for module import
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './Details.js';
import SearchParams from './SearchParams';

const App = () => {
  return (
      <React.StrictMode>
          <Router>
              <Route path="/details/:id">
                  <Details />
              </Route>
              <Route path="/">
                  <SearchParams />
              </Route>
          </Router>;
      </React.StrictMode>
  );
};
render(<App />, document.getElementById('root'));
