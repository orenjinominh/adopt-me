import React, { useState } from 'react'; 
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';


const SearchParams = () => {
  const [location, setLocation] = useState('San Jose, CA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds)

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="location" />
        </label>
        <AnimalDropdown/>
        <BreedDropdown/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;