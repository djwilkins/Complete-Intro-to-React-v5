import React, {useState} from 'react';
import { render } from 'react-dom'; // like destructuring but for module import
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Details from './Details.js';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('darkblue');  
  return (
      <React.StrictMode>
        <ThemeContext.Provider value={themeHook}>
          <Router>
              <header>
                  <Link to="/">Adopt Me!</Link>
              </header>
              <Switch>
                <Route path="/details/:id">
                    <Details />
                </Route>
                <Route path="/">
                    <SearchParams />
                </Route>
              </Switch>
          </Router>;
        </ThemeContext.Provider>
      </React.StrictMode>
  );
};
render(<App />, document.getElementById('root'));
