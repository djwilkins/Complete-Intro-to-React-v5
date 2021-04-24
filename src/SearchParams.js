import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';
import ThemeContext from './ThemeContext';
import { setTheUsername } from 'whatwg-url';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropDown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropDown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext); // Noticing we're pulling the current value (state) here (and choosing not to also grab the method to update state)
  // The "breeds" array passed to the BreedDropDown as options above (see useDropdown.js)
  // is initially defined as an empty array - but is subsequently
  // Populated by the useEffect method below setting "Breeds" equal an array of breed names
  // Returned by the pet api breed method - first, for the default animal (above)
  // And again subsequently for any other chosen animal/AnimalDropdown.

  async function requestPets() {
      const { animals } = await pet.animals({
          location,
          breed,
          type: animal
      });

      setPets(animals || []);
  }

  useEffect(() => {
      setBreeds([]); // Restarts breeds as empty array when changing animal
      setBreed(""); // Deselects breed choice when changing animal

      // Adding apiBreeds as destructuring alias below
      // Takes api returned object.breeds and assigns to variable apiBreeds
      pet.breeds(animal).then(({ breeds: apiBreeds }) => {
          const breedStrings = apiBreeds.map(({ name }) => name);
          setBreeds(breedStrings);
      }, console.error);
  }, [animal, setBreed, setBreeds]);
  // useEffect schedules its method to run after the component has renderered the 1st time
  // That's to not delay the user's initial load for a better experience
  // Note: useEffect replaces a number of older react component methods
  // The dependencies passed to useEffect as the second parameter above
  // Lets react now that only when any of these dependencies change
  // Does the useEffect method need to run again (ie. animal changing).
  // (Reminds me a bit of a watcher in Angular)

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
          e.preventDefault();
          requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropDown/>
        <BreedDropDown/>
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
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
