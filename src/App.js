import React from 'react';
import { render } from 'react-dom';
// import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  return (
    // strict mode- can be shipped to production
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me</h1>
        <SearchParams/>
      </div>
    </React.StrictMode>

  )
};

render(<App/>, document.getElementById('root'));
