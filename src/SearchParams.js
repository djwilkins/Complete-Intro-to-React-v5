import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, AnimalDropDown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropDown] = useDropdown('Breed', '', []);
  const [breeds, setBreeds] = useState([]);

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
