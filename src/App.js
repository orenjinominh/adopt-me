import React, {useState} from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';
// import NavBar from './NavBar';
const App = () => {
  const themeHook = useState('darkblue');

  return (
    // strict mode- can be shipped to production
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Router>
            <SearchParams path="/"/>
            <Details path="/details/:id"/>
          </Router>
          
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>

  )
};

export default App;
