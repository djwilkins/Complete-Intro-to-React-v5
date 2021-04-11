import React, { useState } from 'react';
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
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
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SearchParams;