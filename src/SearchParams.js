import React, { useState } from 'react'; 

const SearchParams = () => {
  const [location, setLocation] = useState('San Jose, CA');

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="location"/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;