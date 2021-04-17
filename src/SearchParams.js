import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropDown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropDown, setBreed] = useDropdown('Breed', '', breeds);
  // The "breeds" array passed to the BreedDropDown as options above (see useDropdown.js)
  // is initially defined as an empty array - but is subsequently
  // Populated by the useEffect method below setting "Breeds" equal an array of breed names
  // Returned by the pet api breed method - first, for the default animal (above)
  // And again subsequently for any other chosen animal/AnimalDropdown.

  useEffect(() => {
      setBreeds([]);
      setBreed("");

      pet.breeds(animal).then(({ breeds }) => {
          const breedStrings = breeds.map(({ name }) => name);
          setBreeds(breedStrings);
      }, console.error);
  }, [animal, setBreed, setBreeds]);
  // useEffect schedules its method to run after the component has renderered the 1st time
  // That's to not delay the user's initial load for a better experience
  // Note: useEffect replaces a number of older react component methods
  // The dependencies pased to useEffect as the second parameter above
  // Lets react now that only when any of these dependencies change
  // Does the useEffect method need to run again.

  return (
    <div className="search-params">
      <form>
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
