import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropDown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropDown] = useDropdown('Breed', '', []);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
      pet.breeds("dog").then(console.log, console.error);
  }) // useEffect schedules its method to run after the component has renderered the 1st time
  // That's to not delay the user's initial load for a better experience
  // Note: useEffect replaces a number of older react component methods

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
