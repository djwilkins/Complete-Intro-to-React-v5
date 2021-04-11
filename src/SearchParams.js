import React, { useState } from 'react';
import { ANIMALS } from "@frontendmasters/pet";
import { option } from 'commander';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("dog");
    // array destructuring [current state, update state]
    // = useState(initial default value)

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} 
                    placeholder="Location" onChange={event => setLocation(event.target.value)} />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal}
                    onChange={event => setAnimal(event.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => <option key={animal} value={animal}>{animal}</option>)}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SearchParams;