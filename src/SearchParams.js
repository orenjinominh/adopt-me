import React, { useState, useEffect, useContext } from 'react'; 
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';

const SearchParams = () => {
  // sets up hooks for location, animal, breed, breeds
  const [location, setLocation] = useState('San Francisco, CA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  // calls API with location, breed, type, then sets Pets with animals or empty array 
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    })

    setPets(animals || []);
  }
  // useEffect only runs after first render, and when animal changes and not every re-render
  // breeds is not used inside of useEffects and therefore not depended on
  useEffect(() => {
    // updates breed to empty when you change animal since you can't have a poodle cat!
    setBreed("");
    setBreeds([]);

    // API call and then grabs name of breed and maps to breedStrings (async call) 
    pet.breeds(animal).then(({breeds: apiBreeds}) => {
      const breedStrings = apiBreeds.map(({name}) => name); // destructures returned object's name key to name 
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // has these changed since last time useEffect was ran? if not doesn't trigger useEffect again

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="location" />
        </label>
        <AnimalDropdown/>
        <BreedDropdown/>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >

            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{backgroundColor: theme}}>Submit</button>
      </form>
      <Results pets={pets}/>
    </div>
  );
}

export default SearchParams;