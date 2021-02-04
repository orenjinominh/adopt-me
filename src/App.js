import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from '@reach/router';
import Details from './Details';

const App = () => {
  return (
    // strict mode- can be shipped to production
    <React.StrictMode>
      <div>
        <header>
        <Link to="/">Adopt me!</Link>
        </header>
        
        <Router>
          <SearchParams path="/"/>
          <Details path="/details/:id"/>
        </Router>
        
      </div>
    </React.StrictMode>

  )
};

render(<App/>, document.getElementById('root'));
